import { useParams } from "react-router-dom";
import { useFetchProductsByTagCodesQuery } from "../redux-toolkit/Api";
import ItemCard from "../components/IItemCard";

function Items() {
  const { tagCodes } = useParams();
  const { data: items ,isLoading } = useFetchProductsByTagCodesQuery(tagCodes);
  
  if (isLoading) {
    return <div className='flex justify-center items-center  w-full h-full'>Loading...</div>;
  }

  return (
    <main className="w-full h-full flex justify-center items-center  ">
      <div className="h-full flex flex-row gap-4 flex-wrap items-center justify-center pt-4">
        {Array.isArray(items) ?
          items.map((item) => <ItemCard key={item?.articles[0]?.code} item={item} />) : 
          <div>No items found.</div>}
      </div>
    </main>
  );
}

export default Items;
