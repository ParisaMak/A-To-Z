import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchCategoriesQuery } from '../redux-toolkit/Api';

const Article = ({ article, category, item, handleClick  }) => {


  return (
    <div className="font-light cursor-pointer " key={article.CatName}>
      <div  >
      <button className="hover:underline "  onClick={handleClick}><Link to={`/${category.CatName}/${item.CatName}/${article.tagCodes[0]}`}>{article.CatName}</Link></button> 
      </div>
    </div>
  );
};

const Item = ({ item, category, handleClick }) => {

  return (
    <div key={item?.CatName} >
      <p >{item?.CatName}</p>
      {item?.CategoriesArray?.map((article,index) => (
        <Article key={index} article={article} category={category} item={item} handleClick ={handleClick } />
      ))}
    </div>
  );
};

const Category = ({categories,handleClick }) => {
 
  const allowedCategories = ['New Arrivals', 'Shop by Product', 'Shop by Room', 'Beauty Products', 'Women', 'Men', 'Kids'];

  return (
    <div className="grid grid-cols-6 w-full items-start gap-4  pt-4 bg-gray-100 text-xs pl-4 ">
       {categories.map((category, index) => (
          <div key={index} className="font-bold">
            {category.CategoriesArray
              .filter((item) => allowedCategories.includes(item.CatName))
              .map((item) => (
                <Item item={item} category={category}  handleClick ={handleClick }/>
              ))}
          </div>
           ))}
    </div>
  );
};

function MultiLevelMenu() {
  const { data: categories } = useFetchCategoriesQuery();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  if (!Array.isArray(categories)) {
    return null;
  }

  return (

      <div className=' hidden w-full lg:flex flex-col px-10'>
         <div className='w-full grid grid-cols-6 gap-4 text-sm pb-2 border-b-[1px] border-gray-300 text-start pl-4'>
            {categories.map((category, index) => (
              <button key={index} className="hover:underline text-start " onClick={handleClick} >{category.CatName}</button>
             ))}
          </div>
          {menuOpen? 
         <Category categories={categories} handleClick ={ handleClick }/>
         :null}
       </div>

  );
}

export default MultiLevelMenu;