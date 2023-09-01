
function ImageItem({filteredItems}) {
  

    return (
        <div className='w-full'>
          <div className='w-[400px] h-[550px] overflow-y-scroll scrollbar-hide'>
            {filteredItems.length > 0 ? (
              filteredItems[0]?.galleryDetails?.map((image, index) => {
                return <img key={index} src={image.baseUrl} alt='' />;
              })
            ) : []}
          </div>
        </div>
      );
}

export default ImageItem