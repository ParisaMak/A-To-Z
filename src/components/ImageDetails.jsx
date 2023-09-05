import { Link } from "react-router-dom";

const ImageDetails = ({ image: [firstImage] = [] }) => {

    if (!firstImage) {
      return null;
    }
  
    const { articleCodes, allArticleImages, name } = firstImage;
  
    return (
      <div className='flex flex-col w-[50%] justify-start '>
        <Link to={`/items/${articleCodes[0]}`}>
          <img src={allArticleImages[0]} alt={allArticleImages[0]} className='max-w-full w-auto max-h-full h-auto' />
        </Link>
        <p className='py-2 '>{name}</p>
      </div>
    );
  };
  
  export default ImageDetails;