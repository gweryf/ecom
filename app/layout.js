"use client";
import { createContext, useEffect, useState } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Com',
}
const contextItem = createContext();
export default function RootLayout({ children }) {
  const [item, setItem] = useState([]);
  return (
    <html lang="en">
      <contextItem.Provider value={{item, setItem}}>
        <body className={inter.className}>
          {children}
        </body>
      </contextItem.Provider>
    </html>
  )
}
export {contextItem}