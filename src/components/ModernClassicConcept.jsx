import { useFetchProductsByConceptQuery } from '../redux-toolkit/Api';
import ImageSlider from './ImageSlider';

const ModernClassicConcept = () => {
  const { data ,isLoading,isError } = useFetchProductsByConceptQuery('MODERN CLASSIC');
   console.log(data)
  return (
    <div className="w-full">
      {isLoading || isError? null:(
      <div className="w-full ">
        <h1 className="my-2 font-bold text-md">Modern Classic</h1>
        <ImageSlider data={data} />
      </div>
      )}
    </div>
  );
};

export default ModernClassicConcept;