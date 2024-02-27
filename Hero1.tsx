import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import { Twitter } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import { FacebookIcon } from 'lucide-react'
import Link from 'next/link'

export default function Hero1() {
  return (
    <section className='flex flex-row justify-evenly mt-24 py-5 px-0 space-x-24 items-baseline'>
        <div className='flex flex-col justify-center items-start'><div className='flex w-[300px] h-[30px]'><Image src="/logo.webp" alt='/' width={100} height={100} ></Image></div>
        <div className='mt-5 text-neutral-500 text-pretty'><p>Small, artisan label that offers a <br /> thoughtfully curated collection of high <br /> quality everyday essentials made.</p></div>
        <div className='flex flex-row space-x-5 mt-6'><Link href=""><div className='flex bg-slate-200 h-10 w-10 rounded-xl justify-center items-center'><Twitter/></div></Link>

        <Link href=""> <div className='flex bg-slate-200 h-10 w-10 rounded-xl justify-center items-center'><LinkedinIcon /></div></Link>
        <Link href=""><div className='flex bg-slate-200 h-10 w-10 rounded-xl justify-center items-center'><FacebookIcon/></div></Link>
        </div></div>
        <div className='flex flex-col justify-center items-start'>
        <div  className='flex text-lg font-bold text-gray-500 '><h1>Company</h1></div>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Privacy Policy</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Terms of Use</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>About Us</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Contact Us</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>How IT Works</div></Link>
        </div>
        <div className='flex flex-col justify-center items-start'>
        <div  className='flex text-lg font-bold text-gray-500 '><h1>Support</h1></div>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Support Carrier</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>24 Hours Service</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Quik Chat</div></Link>
        </div>
        <div className='flex flex-col justify-center items-start'>
        <div  className='flex text-lg font-bold text-gray-500 '><h1>Contact</h1></div>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Whattsap</div></Link>
        <Link href=""><div className='flex text-neutral-500 text-pretty mt-6'>Support 24</div></Link>
       
        </div>
        
    </section>
  )
}
