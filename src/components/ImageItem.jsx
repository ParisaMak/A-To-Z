
function ImageItem({filteredItems}) {
  

    return (
          <div className='w-full md:overflow-y-scroll scrollbar-hide md:h-[520px] md:w-[350px]'>
            {filteredItems.length > 0 ? (
              filteredItems[0]?.galleryDetails?.map((image, index) => {
                return <img key={index} src={image.baseUrl}  className="object-cover w-full "alt='' />;
              })
            ) : []}
          </div>
      );
}

export default ImageItem