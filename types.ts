import { StaticImageData } from "next/image"


export type Product = {
    id:number,
    name:string,
    category:string,
    price:number,
    images:string | StaticImageData,
}