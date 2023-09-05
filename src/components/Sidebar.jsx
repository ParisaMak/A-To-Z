import { Link } from "react-router-dom"

function Sidebar({filteredProducts ,CatName}) {
  return (
    <div className='bg-gray-300 py-4 hidden sm:block w-1/3 h-full '>
      {filteredProducts.map(({ CatName: itemCatName, CategoriesArray }) => (
        <div className='w-full text-start text-xs pl-4 ' key={itemCatName}>
          <Link to={`/${CatName}/${itemCatName}`}>
            <p className='text-[10px] text-sm font-bold py-2 sm:text-sm'>{itemCatName}</p>
          </Link>
          {CategoriesArray?.map(({ CatName: articleCatName, tagCodes }) => (
            <Link to={`/${CatName}/${itemCatName}/${tagCodes[0]}`} key={articleCatName}>
              <p>{articleCatName}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar;