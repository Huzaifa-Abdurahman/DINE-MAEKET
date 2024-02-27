import React from 'react'
import Image, { StaticImageData } from 'next/image'
import p0 from "/public/p0.png"
import p8 from "/public/p8.png"
import p2 from "/public/p2.png"
import p3 from "/public/p3.png"
import p4 from "/public/p4.png"
import p5 from "/public/p5.png"
import p6 from "/public/p6.png"
import p7 from "/public/p7.png"
import { Product } from '@/utils/types'
import Productslist from '@/view/Productslist'
import { products } from '@/utils/mock'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import Addcart from './Addcart'
import Link from 'next/link'
export default function Productcard(props :{title:string,price:number,img:string|StaticImageData,id:number,category:string}) {
  return (
    <div>
    <Link href={`/products/${props.id}`}>
      <Image src={props.img} alt='/'></Image>
    <h1 className='font-bold text-lg mt-4'>{props.title}</h1>
    <h1 className='font-bold text-lg mt-4'>${props.price}</h1>
    <h1 className='font-bold text-lg mt-4'>{props.category}</h1>
    <Addcart />
    </Link>
    </div>
  )
}
