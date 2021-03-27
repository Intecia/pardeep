import React from 'react'
import fav from '../favourites/Garray'
const Favourites=()=> {
  console.log("Favourites==>",fav);
  return (
    <>
     {fav.map((item)=>{
       return <div>{item}</div>
     })}
    </>
  )
}

export default Favourites
