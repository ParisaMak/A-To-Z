import { useFetchProductsByConceptQuery } from '../redux-toolkit/Api';
import ImageSliderFiveImages from './ImageSliderFiveImages';

const EverydayFashionConcept = () => {
  const { data ,isLoading ,isError } = useFetchProductsByConceptQuery('EVERYDAY FASHION');
  const itemsToShow =  data?.results.slice(0, 3)
  return (
    <div className="w-full">
         {isLoading || isError? null:(
      <div className="w-full h-full">
        <h1 className="my-2 font-bold text-md">Everyday Fashion</h1>
        <ImageSliderFiveImages itemsToShow={itemsToShow} />
      </div>
         )}
    </div>
  );
};

export default EverydayFashionConcept;