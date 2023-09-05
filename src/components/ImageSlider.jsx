import { useRef, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSlider = ({ data }) => {
  const sliderRef = useRef(null);

  const handleSlideLeft = () => {
    const sliderWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy(-sliderWidth, 0);
  };

  const handleSlideRight = () => {
    const sliderWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy(sliderWidth, 0);
  };

  useEffect(() => {
    const handleResize = () => {
      sliderRef.current.scrollTo(0, 0);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
    <div className="relative w-full">
      <BsChevronLeft
        onClick={handleSlideLeft}
        size={30}
        className="absolute cursor-pointer top-[50%] left-[20px] z-10"
      />
      <div className="relative  w-full overflow-x-scroll scrollbar-hide" ref={sliderRef}>
        {Array.isArray(data?.results) && (
          <div className="flex flex-row w-[calc(100%*5+3px)] whitespace-nowrap">
            {data.results.map((item) => (
              <div className=" flex flex-row w-full" key={item?.id}>
                <Link className="w-full p-0 m-0 sm:w-1/2 " to={`/items/${item.articleCodes[0]}`}>
                  <LazyLoadImage src={item.galleryImages[0]?.baseUrl} alt="img" className="w-full  object-cover " />
                </Link>
                <Link className="w-0 sm:w-1/2 p-0 m-0" to={`/items/${item.articleCodes[0]}`}>
                  <LazyLoadImage src={item.galleryImages[1]?.baseUrl} alt="img" className="w-full object-cover" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <BsChevronRight
        onClick={handleSlideRight}
        size={30}
        className="absolute top-[50%] right-[20px] cursor-pointer z-10"
      />
    </div>
  );
};

export default ImageSlider;