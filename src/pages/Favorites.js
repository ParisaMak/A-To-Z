import { useSelector } from 'react-redux';
import SavedItemsComponent from '../components/SavedItemsComponent';

function Favorites() {
  const favorites = useSelector(state => state.favorite.favorites) || [];
  console.log(favorites)
  return (
    <div className="bg-white w-full h-full p-10">
      <h2 className="pb-4 font-bold text-lg">Favorite List</h2>
      <div className="w-full h-full">
        {favorites?.length === 0 ? (
          <p>Your favorite List is empty.</p>
        ) : (
          <div className="w-full h-full flex flex-row flex-wrap gap-4">
            {favorites ? favorites?.map((listItem) => {
              return (
                <div key={listItem.code}>
                  <SavedItemsComponent listItem={listItem}  />
                </div>
              );
            }):[]}
          </div>
        )}
      </div>
    </div>
  );
}
export default Favorites;