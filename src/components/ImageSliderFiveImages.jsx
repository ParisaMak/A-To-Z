import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSliderFiveImages = ({ itemsToShow}) => {

  return (
    <div className="relative w-full ">
       {Array.isArray(itemsToShow) && (
          <div className="flex flex-row w-full whitespace-nowrap">
            {itemsToShow.map((item ,index) => (
              <div className="flex flex-row w-full" key={index}>
                <Link className="w-full p-0 m-0 sm:w-full " to={`/items/${item.articleCodes[0]}`}>
                  <LazyLoadImage src={item.galleryImages[0]?.baseUrl} alt="img" className="w-full h-auto object-top" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default ImageSliderFiveImages;