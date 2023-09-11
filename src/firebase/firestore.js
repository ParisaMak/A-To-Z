import { collection, addDoc, deleteDoc, doc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './firebase.utils';

const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
};

export const addItemInShoppingCart = async (userId, listItem) => {
  const data = { userId, ...listItem };
  return await addDocument('shoppingCart', data);
};

export const getItemIdShoppingCart = async (userId, item) => {
  const { size, color, code } = item;
  const q = query(
    collection(db, 'shoppingCart'),
    where('userId', '==', userId),
    where('code', '==', code),
    where('color', '==', color),
    where('size', '==', size)
  );
  const querySnapshot = await getDocs(q);
  const itemIds = [];
  querySnapshot.forEach((doc) => {
    itemIds.push(doc.id);
  });
  return itemIds;
};

export const removeItemInShoppingCart = async (itemId) => {
  await deleteDocument('shoppingCart', itemId);
};

export const getCartItems = async (userId) => {
  const cartCollectionRef = collection(db, 'shoppingCart');
  const cartQuery = query(cartCollectionRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(cartQuery);
  const cartItems = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return cartItems;
};

export const getFavoriteItems = async (userId) => {
  const cartCollectionRef = collection(db, 'favoriteCart');
  const cartQuery = query(cartCollectionRef, where("userId", "==", userId));
  const cartItems = [];
  const querySnapshot = await getDocs(cartQuery);
  querySnapshot.forEach(doc => {
    cartItems.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return cartItems;
};

export const addItemInFavoriteCart = async (userId, listItem) => {
  const favoriteCartRef = collection(db, 'favoriteCart');
  const q = query(favoriteCartRef, where('userId', '==', userId), where('code', '==', listItem.code));
  const existingItemSnapshot = await getDocs(q);
  if (existingItemSnapshot.empty) {
    const data = { userId, ...listItem };
    return await addDoc(favoriteCartRef, data);
  } else {
    console.log('Item with the same code already exists in favorites.');
    return null;
  }
};

export const removeItemFromFavoriteCart = async (userId, code) => {
  try {
    const q = query(
      collection(db, 'favoriteCart'),
      where("userId", "==", userId),
      where("code", "==", code)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log("Document successfully deleted!");
    });
  } catch (error) {
    console.error("Error removing document: ", error);
  }
};

export const updateItemQuantityInFirestore = async (itemId, quantity) => {
  const itemRef = doc(db, 'shoppingCart', itemId);
  await updateDoc(itemRef, {
    quantity: quantity
  });
};