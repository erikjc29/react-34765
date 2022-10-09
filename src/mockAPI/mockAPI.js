const data=[
    {
        id:1,
        title:"Air Max 1",
        img:"https://www.runningcorrer.com.ar/wprunning/wp-content/uploads/2022/05/Nike-Air-Max-1-1987-roja.jpg", 
        detail:"Shoes StreetWear Diseñadas por Veed", 
        price:20000, 
        expired:true,
        offer:"", 
        stock:10,
        category:"zapatillas"
        },
    {
        id:2,
        title:"Air Max 90",
        img:"https://media.revistagq.com/photos/5d8dd9a3e90a3a0008bddd50/master/w_1600%2Cc_limit/052640_01.jpg", 
        detail:"Shoes StreaWear Diseñadas Por Horuk", 
        price:27000, 
        expired:true,
        offer:"", 
        stock:6,
        category:"zapatillas"  
    },
    { 
        id:3,
        title:"Retro 4",
        img:"https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1616520672&q=75", 
        detail:"Shoes StreaWear Diseñadas Por Ezze", 
        price:30000, 
        expired:true,
        offer:"", 
        stock:15,
        category:"zapatillas"
    },
    {
        id:4,
        title:"SB Dunk",
        img:"https://images.stockx.com/images/Nike-SB-Dunk-Low-Parra-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1627326877", 
        detail:"Riñonera Diseñada Por Cijhei", 
        price:20000, 
        expired:true,
        offer:"", 
        stock:11,
        category:"zapatillas"
    },
    {
        id:5,
        title:"Riñonera Nike",
        img:"https://http2.mlstatic.com/D_NQ_NP_604116-MLA47968346266_102021-W.jpg", 
        detail:"Riñonera Diseñada Por Horuk", 
        price:5000, 
        expired:true,
        offer:"", 
        stock:20,
        category:"riñoneras"
    },
    {
        id:6,
        title:"Riñonera Kappa",
        img:"https://http2.mlstatic.com/D_NQ_NP_665167-MLA44062308951_112020-O.webp", 
        detail:"Riñonera StreaWear Diseñadas Por Ezze", 
        price:2500, 
        expired:true,
        offer:"", 
        stock:16,
        category:"riñoneras"
    },
    {
        id:7,
        title:"Riñonera Everlast",
        img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/770/810/products/whatsapp-image-2021-07-21-at-5-07-30-pm1-1e2293467a5e49391716269797805824-640-0.jpeg", 
        detail:"Shoes StreaWear Diseñadas Por Veed", 
        price:2600, 
        expired:true,
        offer:"", 
        stock:14,
        category:"riñoneras"
    },
]
export function getData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(data),2000)
    })
}

export function getSingleData(idParams){
    return new Promise((resolve)=>{
        let dataReq=data.find((item)=>{
           return item.id == Number(idParams)})
        console.log(dataReq)
        setInterval(()=>
            resolve(dataReq),2000)
    })
}

export function getItemsByCategory(idCategoryParams){
    return new Promise((resolve)=>{
        let filterItems= data.filter( 
            (item) => item.category == idCategoryParams)
        setInterval(()=>resolve(filterItems),2000)
    })
}