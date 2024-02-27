'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import { Bold } from 'lucide-react';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import p0 from "/public/p0.png"
import p8 from "/public/p8.png"
import p2 from "/public/p2.png"
import p3 from "/public/p3.png"
import p4 from "/public/p4.png"
import p5 from "/public/p5.png"
import p6 from "/public/p6.png"
import p7 from "/public/p7.png"
import Image from 'next/image';
import Productcard from '@/components/Productcard';
import { Product } from '@/utils/types';
import { products } from '@/utils/mock';
import { Button } from '@/components/ui/button';

export default function Productslist() {
    
  return (
    
    <section>
        <div className='flex mt-11 justify-center'>
        
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        <div className='text-blue-700'><p>Products</p> </div><br />Check What We Have
    </h2></div>
        <div className='mt-11 '>
        <Swiper
    slidesPerView={3}
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
    {products.map((product,key)=>(
        <SwiperSlide>
        <Productcard
        key={product.id}
        title={product.name}
        price={product.price}
        category={product.category}
        img={product.images}
        id={product.id}
         /> 
        
         </SwiperSlide>
    ))}
    
    {/*<SwiperSlide><Image src={p8} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
    <SwiperSlide><Image src={p2} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
    <SwiperSlide><Image src={p3} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
    <SwiperSlide><Image src={p4} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
    <SwiperSlide><Image src={p5} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
    <SwiperSlide><Image src={p6} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
    <SwiperSlide><Image src={p7} alt='/'></Image><br /><div className='flex justify-center'><h1>Muscle Tank <br />$100</h1></div></SwiperSlide>
*/}
  </Swiper></div></section>
  )
}
