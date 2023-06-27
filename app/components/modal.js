import React from 'react'
import Image from 'next/image'
export default function Modal(props) {
  const {show, onClose, product} = props
  if(show){
    return (
      <div onClick={onClose} className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className=' m-10 h-[500px] w-[600px] overflow-y-auto bg-zinc-800 p-9 rounded text-white grid grid-cols-1 items-center gap-5'>
          <h1 className=' font-bold text-center text-xl'>Product Details:</h1>
          <div className=' flex justify-center items-center'>
            <Image className='w-34 h-52 rounded' src={product.images[0]} alt={product.title} width={200} height={300}/>
          </div>
          <h1 className=' text-center font-semibold'>{product.title}</h1>
          <h2 className=' text-center'><span className=' font-semibold'>Category:</span> {product.category.name}</h2>
          <h3 className=' text-center'><span className=' font-semibold'>Price: </span>${product.price}</h3>
          {/* <h2 className=' text-center'><span className=' font-semibold'>Rating: </span><span className=' text-green-400'>{product.rating.rate}</span></h2> */}
          <h2 className=' text-center'><span className=' font-semibold'>Description:</span> {product.description}</h2>
          <button className='bg-white text-black p-2 rounded font-semibold hover:bg-slate-100 transition ease-linear duration-200' onClick={onClose}>Close X</button>
        </div>
      </div>
    )
  }
  return null
}
