import { useSelector } from 'react-redux';
import SavedItemsComponent from '../components/SavedItemsComponent';

function Favorites() {
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <div className="bg-white w-full h-full p-10">
      <h2 className="pb-4 font-bold text-lg">Favorite List</h2>
      <div className="w-full h-full">
        {favorites.length === 0 ? (
          <p>Your favorite List is empty.</p>
        ) : (
          <div className="w-full h-full flex flex-row flex-wrap gap-4">
            {favorites.map((listItem, index) => {
              return (
                <div key={index}>
                  <SavedItemsComponent listItem={listItem} favorites={favorites} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;