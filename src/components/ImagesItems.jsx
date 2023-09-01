import { Link } from 'react-router-dom';

function ImagesItem({items}) {
  
    return (
        <div className='w-full  flex flex-wrap pl-4 items-end'>
            {items.map((article) => (
                <div key={article.code}>
                     <div className='flex flex-wrap'>
                        <Link to={`/items/${article.code}`}>
                            <img src={article?.galleryDetails[0]?.baseUrl} alt="" className='h-[100px]' />
                        </Link>
                    </div>
                </div>
            ))}
   
        </div>
    )
}

export default ImagesItem