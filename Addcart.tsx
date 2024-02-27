import React from 'react'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { get } from 'http'
import { products } from '@/utils/mock'

export default function Addcart() {
  return (
    <div><Link href="/addtocart"><Button className='flex bg-stone-800 text-white rounded-xl' >
     <ShoppingCart />Add to cart
    </Button></Link></div>
  )
}
