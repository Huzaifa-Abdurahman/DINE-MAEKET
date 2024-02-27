import React from 'react'
import Link from 'next/link'
import logo from "/public/logo.webp"
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import Home from '@/app/page'


export default function Header() {
  return (
    <div  className='flex justify-between items-center py-10 px-11'>
      <Link href="/">
    <Image src={logo} alt='/' className='w-40'></Image></Link>
    <div className='flex flex-row text-lg space-x-6'>
        
    <Link href="/category/female">Female</Link>
    <Link href="/category/male">Male</Link>
    <Link href="/category/kid">Kids</Link>
    <Link href="/category/allproducts" key={19}>All Products</Link>
    </div>
    <div><input/></div>
    <div className='h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center'> <ShoppingCart className='w-8 h-8'/>  </div>
    </div>
  )
}
