import React,{useState} from 'react'

const Garray=()=>{
  const [fav,setFav]=useState([]);

  const action=(dt)=>{
    setFav((prev)=>[...prev,dt]);
  }
}
  

  export default Garray;