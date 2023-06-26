import React from 'react'

export default function Modal(props) {
  const {show, onClose, product} = props
  if(show){
    return (
      <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className=' bg-white p-2 rounded text-black'>
          <h1>{product.title}</h1>
          <h3>{product.price}</h3>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    )
  }
  return null
}
