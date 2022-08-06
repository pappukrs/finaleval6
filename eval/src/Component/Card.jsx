import React from 'react'

const Card = ({brand,title,image,price,category}) => {
  return (
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
         <img src={img}/>
         <h1>{title}</h1>
         <h1>Brand:{brand}</h1>
         <h3>Price:{price}</h3>
         <h3>Category:{Category}</h3>
    </div>
    </>
  )
}

export default Card