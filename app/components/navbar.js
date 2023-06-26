"use client";
import Link from "next/link"
import { useContext } from "react";
import { contextItem } from "../layout";
import { IoHomeOutline, IoCartOutline, IoAppsOutline } from "react-icons/io5";
export default function Navbar() {
    const contexty = useContext(contextItem)
  return (
        <div className="navbar">
            <Link href="/"><h1 className="navtitle">Shopping Cart</h1></Link>
            <div className="navlinks">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link className="carti" href="/cart">
                    <IoCartOutline size='25px'/>
                    <div>{contexty.item.length}</div>
                </Link>
            </div>
        </div>
  )
}
