import React from 'react'
import {useSelector,useDispatch } from "react-redux"





const Home = () => {

  const product=useSelector((state)=>state.product.prod);
  return (
    <div>
      {product.map((ele) => (<Card {...ele}/>))}

    </div>
  )
}

export default Home