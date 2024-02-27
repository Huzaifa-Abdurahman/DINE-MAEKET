import { Product } from "./types";
import p0 from "/public/p0.png"
import p8 from "/public/p8.png"
import p2 from "/public/p2.png"
import p3 from "/public/p3.png"
import p4 from "/public/p4.png"
import p5 from "/public/p5.png"
import p6 from "/public/p6.png"
import p7 from "/public/p7.png"
export const products: Product[] = [
    {
        id: 1,
        name:"product 1",
        category:"female",
        price:70,
        images:p0,
    },
    {
        id: 2,
        name:"product 2",
        category:"male",
        price:20,
        images:p2,
    },
    {
        id: 3,
        name:"product 3",
        category:"female",
        price:50,
        images:p3,
    },
    {
        id: 4,
        name:"product 4",
        category:"male",
        price:40,
        images:p4,
    },
    {
        id: 5,
        name:"product 5",
        category:"female",
        price:200,
        images:p5,
    },
    {
        id: 6,
        name:"product 6",
        category:"kid",
        price:120,
        images:p6,
    },
    {
        id: 7,
        name:"product 7",
        category:"female",
        price:200,
        images:p7,
    },
    {
        id: 8,
        name:"product 8",
        category:"male",
        price:100,
        images:p8,
    }
]