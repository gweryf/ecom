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
        if (contexty.item[targetIndex].quantity >= 1){
            let a = contexty.item[targetIndex].quantity-1
            const updatedItem = contexty.item.map((ele, index)=>{
                if(index === targetIndex){
                    if(a===0) return null
                    return {...ele, quantity:a}
                } else {
                    return ele
                }
            })
            const filteredUpdate = updatedItem.filter((ele) => ele !== null);
            contexty.setItem(filteredUpdate)
        } else if(contexty.item[targetIndex].quantity < 1) {
            const update = contexty.item.map((ele, index) => {
                if (index === targetIndex) {
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

    const handleDelete = (targetIndex) => {
        let updatedItem = contexty.item.map((ele, index) => {
            if(index === targetIndex){
                return null
            } else {
                return ele
            }
        })
        const filteredUpdate = updatedItem.filter((ele) => ele !== null);
        console.log(filteredUpdate);
        contexty.setItem(filteredUpdate)
    }

    const handleTotal = ()=>{
        let final = 0;
        contexty.item.forEach(element => {
            let a = Number(element.price)
            let b = Number(element.quantity)
            final = final + (a*b)
            final = Math.round(final * 100) / 100
        });
        return final;
    }

  return (
    <div>
        <Navbar/>
        <div className=' w-full flex flex-col justify-center items-center p-10'>
            <h1 className=' text-2xl font-extrabold'>Your Cart</h1>
            <div className=' flex flex-col justify-center items-center p-5 gap-5'>
                    {contexty.item.map((ele, index)=>{
                        console.log(ele)
                        return(
                            <div className=" flex flex-col justify-center items-center gap-2" key={index}>
                                <div>
                                    <Image className=' rounded-lg w-64 h-80' src={ele.img} alt={ele.title} width={250} height={400}/>
                                </div>
                                <div className=' flex flex-col gap-2 justify-center items-center'>
                                    <h2 className=' text-center font-semibold text-lg'>{ele.title}</h2>
                                    <h3 className=' text-center font-semibold text-md'>${ele.price}</h3>
                                    <div className=' flex justify-center items-center gap-2'>
                                        <button className=' bg-white w-8 rounded text-black' onClick={()=>handleSub(index)}>-</button>
                                        <div>{ele.quantity}</div>
                                        <button className=' bg-white w-8 rounded text-black' onClick={()=>handleAdd(index)}>+</button>
                                    </div>
                                    <button className=' bg-red-600 p-1 rounded hover:bg-red-500 transition ease-linear duration-300 text-white' onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
                <div className=" flex flex-col justify-center items-center gap-2">
                    <h2 className=' text-center font-bold text-2xl'>Subtotal:</h2>
                    <div className=" text-center font-semibold text-lg">${handleTotal()}</div>
                </div>
            </div>
    </div>
  )
}