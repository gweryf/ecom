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
    <div>
      <div onClick={onModal}>
        <Image src={product.image} alt={product.title} width={300} height={400}/>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
      </div>
      <Modal show={show} onClose={onClose} product={product} />
    </div>
  )
}
