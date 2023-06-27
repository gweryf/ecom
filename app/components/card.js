"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Modal from './modal'
export default function Card(props) {
    const {product} = props
    const [show, setShow] = useState(false)
    function onClose(){
        setShow(false)
    }

    function onModal(){
        setShow(true)
    }
  return (
    <div className=' flex flex-col justify-center items-center gap-1'>
      <div className=' flex flex-col justify-center items-center gap-5' onClick={onModal}>
        <Image className=' rounded  w-64 h-80' src={product.images[0]} alt={product.title} width={200} height={300}/>
        <h2 className=' text-center font-bold text-lg'>{product.title}</h2>
        <h3 className=' text-center font-semibold text-lg'>Price: ${product.price}</h3>
      </div>
      <Modal show={show} onClose={onClose} product={product} />
    </div>
  )
}
