import { initializeApp } from "firebase/app";
import { getFirestore,
  collection, 
  getDocs, 
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVMRmR8l1_FaV5YPtsxXYPyqfSxF68PfE",
  authDomain: "react34765-jimenez-ecommerce.firebaseapp.com",
  projectId: "react34765-jimenez-ecommerce",
  storageBucket: "react34765-jimenez-ecommerce.appspot.com",
  messagingSenderId: "266608704047",
  appId: "1:266608704047:web:12f969eaa14fdf1ce564da"
};


const FirebaseApp = initializeApp(firebaseConfig);
const db= getFirestore(FirebaseApp);


export async function getData(){
    const collectionRef = collection(db,"productos");
    // getDocs(collectionRef).then(resp=>console.log(resp))
    let result= await getDocs(collectionRef)
    let dataItem = result.docs.map(doc=>{
       return {id: doc.id, ...doc.data()} 
    })
    return dataItem;
}
export async function getSingleData(idParams){
  
    const docRef= doc(db,"productos", idParams)
    const docResult= await getDoc(docRef)
    if (docResult.exists()){
      return {id: docResult.id, ...docResult.data()}
    }
    else{
      throw new Error("- El item no se encontro en la base de datos -")
    } 
}
export async function getItemsByCategory(idCategoryParams){
  const collectionRef= collection(db,"productos")
  const queryCat= query(collectionRef,where("category","==",idCategoryParams))
  let result=await getDocs(queryCat)
  let dataItem = result.docs.map(doc=>{
    return {id: doc.id, ...doc.data()} 
 })
 return dataItem;
}



export async function createBuyOrder(orderData){
  const collectionRef=collection(db,"orders")
  let resp= await addDoc(collectionRef,orderData)
  if(resp.id.length !==0){
    return resp.id
  }
  else{
    throw new Error("Error. Intertelo de Nuevo")
  }
}

export async function sendDataToFirebase(){
  const data=[
    {
      title:"Air Max 1",
      img:"https://www.runningcorrer.com.ar/wprunning/wp-content/uploads/2022/05/Nike-Air-Max-1-1987-roja.jpg", 
      detail:"Shoes StreetWear Diseñadas por Veed", 
      price:20000, 
      expired:true,
      offer:true, 
      stock:10,
      category:"zapatillas"
      },
  {
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
let itemsColleccionRef=collection(db,"productos")
for (let prod of data){
  let newDoc= await addDoc(itemsColleccionRef,prod)
  console.log("Documento creado:",newDoc.id)
}
}

export async function getOrderData(idParams){
  
  const docRef= doc(db,"orders", idParams)
  const docResult= await getDoc(docRef)
  if (docResult.exists()){
    return {id: docResult.id, ...docResult.data()}
  }
  else{
    throw new Error("El item no se encontro en la base de datos.")
  } 
}

export default FirebaseApp;