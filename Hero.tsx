import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import p1 from "/public/p1.webp"
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"

export default function Hero() {
  return (
    <section className='flex flex-row justify-around'>
      <div className='flex flex-col gap-y-7 mt-10'> 
        <Badge className='bg-blue-200 rounded-sm text-lg text-blue-700 py-2 px-2'>sale70%</Badge>
      
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial <br /> Take on <br /> Streetwear
          </h1>
        </div>
        <div className='flex mt-11 flex-col'><p className="leading-7 [&:not(:first-child)]">
          Anyone can beat you but no one can <br /> beat your outfit as long as you wear <br /> Dine outfits.
        </p>
            <div className='mt-16 gap-5'><Button className='bg-black text-white px-9 py-9 flex-row gap-2'><ShoppingCart /> Start <br />Shopping</Button>
          <div className='flex flex-row mt-16'>
          <div className='mt-9 w-30 h-30'><Image src={Featured1} alt='/'></Image></div>
        
        <div className='mt-9 w-30 h-30'><Image src={Featured2} alt='/'></Image></div>
      
      <div className='mt-9 w-30 h-30'><Image src={Featured3} alt='/'></Image></div>
    </div><div className='mt-9 w-30 h-30'><Image src={Featured4} alt='/'></Image></div>
      </div>
      </div>
      </div>

      <div className=' bg-amber-100 w-90 h-90 rounded-full mt-8 justify-center items-center '><div className='h-full w-full'><Image src={p1} alt=''></Image>
      </div></div></section>
  )
}
