import { useFetchProductsByConceptQuery } from '../redux-toolkit/Api';
import ImageSlider from './ImageSlider';

const MamaConcept = () => {
  const { data } = useFetchProductsByConceptQuery('MAMA');

  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="my-2 font-bold text-md">Mama</h1>
        <ImageSlider data={data} />
      </div>
    </div>
  );
};

export default MamaConcept;