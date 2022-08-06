import React from 'react'

const CartCard = ({product_id,quantity,id,handleRemoveCart,handlQuantity}) => {
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
      <h3>ProductID:{product_id}</h3>
      <h3>Quantity:{quantity}</h3>
      <button onClick={()=>handlQuantity(prev+1)}>Increase Quantity</button>
      <button onClick={()=>handlQuantity(prev-1)}>Decrease Quantity</button>
      
      <button onClick={()=>handleRemoveCart(id)}>Remove from cart</button>

    </div>
    </>
  )
}

export default CartCard