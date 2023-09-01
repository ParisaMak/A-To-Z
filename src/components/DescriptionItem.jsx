

function DescriptionItem({filteredItems}) {
  
  const product=filteredItems[0]

  return (
    <div className='flex flex-col pl-4 gap-2 text-sm flex-1 p-4'>   
      <div>
        <h1 className='font-bold'>Product Name :<span className='font-light'> {product?.name}</span></h1>
        <h1 className='font-bold'>Color:<span className='font-light'> {product?.colourDescription}</span></h1>
        <h1 className='font-bold'>Description:<span className='font-light'> {product?.description}</span></h1>
        <h1 className='font-bold'>Price:<span className='font-bold'> {product?.whitePrice.price} {product?.whitePrice.currency}</span></h1>
      </div>  
    </div>
    )
}

export default DescriptionItem