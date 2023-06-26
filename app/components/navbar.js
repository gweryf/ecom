"use client";
import Link from "next/link"
import { useContext } from "react";
import { contextItem } from "../layout";
import { IoHomeOutline, IoCartOutline, IoAppsOutline } from "react-icons/io5";
export default function Navbar() {
    const contexty = useContext(contextItem)
  return (
            <nav className=" sticky top-0 bg-black p-5 flex justify-between md:justify-around items-center">
                <Link href="/"><h1 className=" font-bold text-xl md:text-3xl">E-Commerce</h1></Link>
                <div className=" flex justify-center items-center gap-2 md:gap-5">
                    <Link className=" md:text-xl" href="/">Home</Link>
                    <Link className=" md:text-xl" href="/products">Products</Link>
                    <Link className=" flex justify-center items-center gap-1" href="/cart">
                        <IoCartOutline size='30px'/>
                        <div className=" md:text-lg">{contexty.item.length}</div>
                    </Link>
                </div>
            </nav>
  )
}
