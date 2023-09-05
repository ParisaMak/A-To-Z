
function DescriptionItem({filteredItems}) {
  const product = filteredItems[0];

  const details = [
    { label: 'Product Name', value: product?.name },
    { label: 'Color', value: product?.colourDescription },
    { label: 'Description', value: product?.description },
    { label: 'Price', value: `${product?.whitePrice.price} ${product?.whitePrice.currency}`, isBold: true },
  ];

  return (
    <div className='flex flex-col px-4 gap-2 text-sm flex-1 p-4'>   
      <div>
        {details.map((detail, index) => (
          <h1 key={index} className='font-bold pb-1'>
            {detail.label}: <span className={detail.isBold ? 'font-bold' : 'font-light'}>{detail.value}</span>
          </h1>
        ))}
      </div>  
    </div>
  );
}

export default DescriptionItem;