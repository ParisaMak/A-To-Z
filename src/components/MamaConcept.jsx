import { useFetchProductsByConceptQuery } from '../redux-toolkit/Api';
import ImageSlider from './ImageSlider';

const MamaConcept = () => {
  const { data ,isError,isLoading } = useFetchProductsByConceptQuery('DIVIDED');

  return (
    <div className="w-full">
      {isLoading || isError? null:(
      <div className="w-full">
        <h1 className="my-2 font-bold text-md">Mama</h1>
        <ImageSlider data={data} />
      </div>
      )}
    </div>
  );
};

export default MamaConcept;