import Image from 'next/image'
import Navbar from './components/navbar'
import Link from 'next/link'
import "./styles/homepage.css"
export default function Home() {
  return (
    <div className=' h-screen flex flex-col'>
      <Navbar/>
      <section className=' h-fit w-full flex-1 gap-14 flex flex-col justify-center items-center'>
        <h1 className=' font-extrabold text-5xl'>E-Commerce</h1>
        <Link href='/products'><button className=' px-3 py-1 text-xl font-semibold hover:bg-white hover:text-black'>VISIT THE SHOP</button></Link>
      </section>
    </div>
  )
}
