

const ProductCard = ({image, name, link, overview}) => {
  return (
    <div className='md:w-80 flex md:flex-col flex-row-reverse
     bg-blue-100 rounded-lg leading-7 items-center md:p-0 px-2'>
    <img src={image} alt="image" className='rounded-lg md:w-80 md:h-60 w-80 h-34'/>
    <div className='p-2 font-semibold'>
       {name}
       <p className="text-sm font-semibold text-textColor text-grey mt-2 ">{overview}</p>
       <p className=" text-sm mt-2"><a href={link}>View more {"->"}</a></p>
    </div>
    

  </div>
  )
}

export default ProductCard