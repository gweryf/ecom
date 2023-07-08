"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { contextItem } from "../layout";
import Card from "../components/card";

export default function Products() {
  const [products, setProduct] = useState([]);

  const contexty = useContext(contextItem);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (product) => {
    console.log(product);
    let updatedArray = contexty.item.map((ele) => {
      if (ele.title === product.title) {
        let a = ele.quantity + 1;
        return { ...ele, quantity: a };
      } else {
        return ele;
      }
    });
    contexty.setItem(updatedArray);
  };

  const addItem = (product) => {
    let n = false;
    contexty.item.forEach((element) => {
      if (element.title === product.title) {
        n = true;
      }
    });

    if (n) {
      handleAdd(product);
    } else {
      let newItem = {
        title: product.title,
        img: product.images[0],
        price: product.price,
        quantity: 1,
      };
      contexty.setItem([...contexty.item, newItem]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" grid grid-cols-1 gap-10 md:grid-cols-3 p-10 md:p-20">
        {products.map((product, index) => {
          return (
            <div
              className=" bg-zinc-800 p-8 rounded-lg flex flex-col justify-between items-center"
              key={index}
            >
              <Card product={product} />
              <button
                onClick={() => addItem(product)}
                className=" bg-white text-black p-2 rounded font-semibold hover:bg-slate-100 transition ease-linear duration-200"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
