import React from 'react';
import { CgChevronLeftR, CgChevronRightR } from 'react-icons/cg';
import { useRef ,useEffect} from 'react';
import { useFetchProductsByConceptQuery } from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';


const BasicConcept = React.memo(() => {
  const sliderRef = useRef(null);

  const handleSlideLeft = () => {
    const sliderWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy(-sliderWidth, 0);
  };

  const handleSlideRight = () => {
    const sliderWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy(sliderWidth, 0);
  };

  const { data, isLoading } = useFetchProductsByConceptQuery('BASICS');

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
  <div className="w-full">
    {isLoading ? (
      <div></div>
    ) : (
      <>
        <h1 className="my-2 font-bold text-md">Basic</h1>
        <div className="relative w-full h-[calc(100vh)]">
          <CgChevronLeftR
            onClick={handleSlideLeft}
            size={30}
            className="absolute cursor-pointer top-[50%] left-[20px] z-10"
          />
          <div className="relative h-full w-full overflow-x-scroll scrollbar-hide" ref={sliderRef}>
            {Array.isArray(data?.results) && (
              <div className="h-full flex flex-row w-[calc(100%*5-5px)] whitespace-nowrap">
                {data.results.map((item) => (
                  <div className="h-full flex flex-row w-full" key={item?.id}>
                    <Link className="w-[50%] h-full" to={`/items/${item?.articleCodes[0]}`}>
                      <img
                        src={item.allArticleImages[0]}
                        alt=""
                        className="h-full object-cover w-full"
                      />
                    </Link>
                    <Link className="w-[50%] h-full" to={`/items/${item?.articleCodes[0]}`}>
                      <img
                        src={item.allArticleImages[1]}
                        alt=""
                        className="h-full object-cover w-full"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <CgChevronRightR
            onClick={handleSlideRight}
            size={30}
            className="absolute top-[50%] right-[20px] cursor-pointer z-10"
          />
        </div>
      </>
    )}
  </div>
);
});

export default BasicConcept;