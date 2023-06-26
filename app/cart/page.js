"use client";
import React from 'react'
import Navbar from '../components/navbar'
import { useContext } from 'react';
import { contextItem } from '../layout';
import Image from 'next/image';
export default function Cart() {
    const contexty = useContext(contextItem)
    
    const handleAdd = (targetIndex)=>{
        let a = contexty.item[targetIndex].quantity+1
        const updatedItem = contexty.item.map((ele, index)=>{
            if(index === targetIndex){
                return {...ele, quantity:a}
            } else {
                return ele
            }
        })
        contexty.setItem(updatedItem)
    }

    const handleSub = (targetIndex)=>{
        if (contexty.item[targetIndex].quantity > 0){
            let a = contexty.item[targetIndex].quantity-1
            const updatedItem = contexty.item.map((ele, index)=>{
                if(index === targetIndex){
                    return {...ele, quantity:a}
                } else {
                    return ele
                }
            })
            contexty.setItem(updatedItem)
        } else if(contexty.item[targetIndex].quantity < 1) {
            const update = contexty.item.map((ele) => {
                if (ele.quantity === 0) {
                  return null;
                } else {
                  return ele;
                }
              });
          
              // Remove null values from the array
              const filteredUpdate = update.filter((ele) => ele !== null);
          
              contexty.setItem(filteredUpdate);
        }
    }

    const handleTotal = ()=>{
        let final = 0;
        contexty.item.forEach(element => {
            let a = Number(element.price)
            let b = Number(element.quantity)
            final = final + (a*b)
        });
        return final;
    }

  return (
    <div>
        <Navbar/>
        <div>
            <h1>Your Cart</h1>
            <div>
                    {contexty.item.map((ele, index)=>{
                        console.log(ele)
                        return(
                            <div className="cart" key={index}>
                                <div>
                                    <Image src={ele.img} alt={ele.title} width={250} height={400}/>
                                </div>
                                <div>
                                    <h2>{ele.title}</h2>
                                    <h3>${ele.price}</h3>
                                    <div>
                                        <button onClick={()=>handleSub(index)}>-</button>
                                        <div>{ele.quantity}</div>
                                        <button onClick={()=>handleAdd(index)}>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
                <div className="payment">
                    <h2>Subtotal:</h2>
                    <div className="price">${handleTotal()}</div>
                </div>
            </div>
    </div>
  )
}
