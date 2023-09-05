import { Link } from "react-router-dom"

function NameImagesProductsPage({filteredProducts,CatName}) {
  return (
    <div className='flex flex-row items-center justify-center gap-8 h-auto py-4'>
      {Array.isArray(filteredProducts) &&
        filteredProducts.map((item) => (
          <Link to={`/${CatName}/${item?.CatName}`} key={item?.CatName}>
            <div className='bg-white border-[1px] text-center  border-black px-4 py-2 text-[12px]  hover:bg-red-700 hover:text-white hover:border-white sm:text-sm xl:text-md'>
              {item?.CatName}
            </div>
          </Link>
        ))}
    </div>
  )
}

export default NameImagesProductsPage