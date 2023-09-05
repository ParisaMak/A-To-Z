import ImageDetails from "./ImageDetails";
function ImagesProductsPage({imageFirst,imageSecond}) {

  return (
    <div className='relative w-full bg-gray-300 h-full flex flex-col'>
      <div className='flex flex-row justify-start items-start object-fit h-auto text-center'>
        {imageFirst && <ImageDetails image={imageFirst} />}
        {imageSecond && <ImageDetails image={imageSecond} />}
      </div>
    </div>
  )
}

export default ImagesProductsPage;