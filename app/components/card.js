import React from 'react'
import Image from 'next/image'
export default function Card(props) {
    const {product} = props
  return (
    <div>
        <Image src={product.image} alt={product.title} width={300} height={400}/>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
    </div>
  )
}
