"use client";
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Navbar from '../components/navbar'
import { contextItem } from '../layout';
import Card from '../components/card';

export default function Products() {
    const [products, setProduct] = useState([])
    
    const contexty = useContext(contextItem)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then(res => {setProduct(res.data)})
        .catch(err => console.log(err))
    },[])

    const handleAdd = (product)=>{
        console.log(product);
        let updatedArray = contexty.item.map((ele)=>{
            if(ele.title===product.title){
                let a = ele.quantity+1
                return {...ele, quantity:a}
            } else {
                return ele
            }
        })
        contexty.setItem(updatedArray)
    }

    const addItem = (product)=>{
        let n = false
        contexty.item.forEach(element => {
            if(element.title === product.title){
                n = true
            }
        });

        if(n){
            handleAdd(product)
        } else{
            let newItem = {title:product.title, img:product.image, price:product.price, quantity:1}
            contexty.setItem([...contexty.item, newItem])
        }
    }

    return (
        <div>
            <Navbar/>
            <div>
                {
                    products.map((product, index)=>{
                        return(
                            <div key={index}>
                                <Card product={product} />
                                <button>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}