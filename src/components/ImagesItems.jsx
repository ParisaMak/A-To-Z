import { Link } from 'react-router-dom';

function ImagesItem({items}) {
  
    return (
        <div className='w-full flex flex-wrap gap-2 justify-center  mt-2 md:justify-start'>
            {items.map((article) => (
                     <div >
                        <Link to={`/items/${article.code}`}>
                            <img src={article?.galleryDetails[0]?.baseUrl} alt="" className='w-[200px] md:w-[70px]' />
                        </Link>
                    </div>
            ))}
   
        </div>
    )
}

export default ImagesItem