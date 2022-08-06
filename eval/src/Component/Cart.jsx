import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import CartCard from './CartCard'




const Cart = () => {
   const[products,setProducts]=useState([])
   


   const fetchCart=()=>{
    axios({
      method:'get',
      url:'http://localhost:8080/cart'

 }).then((res)=>setProducts(res.data))
 .catch((err)=>console.log(err))

   }

   useEffect(()=>{
    fetchCart();
   },[])


   const handleRemoveCart=(id)=>{
      axios({

        method:"delete",
        url:`http://localhost:8080/cart/${id}`
      }).then((res)=> fetchCart())
      .catch((err)=>console.log(err))
   }

   const handleIncreaseQuantity=(quantity)=>{

    axios({
      method:"patch",
      url:`http://localhost:8080/cart/${id}`,
      data:{quantity}
    })
   }
  


  return (
    <div>
        {products.map((ele,ind)=><CartCard key={ele.id} {...ele,handleRemoveCart,handlQuantity} />)}
        
        </div>
  )
}


export default Cart;