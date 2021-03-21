import React, { Fragment, useState,useEffect } from "react";
import Footer from "../../mole/footer/Footer";
import Navbar from "../../mole/navbar/Navbar";
import axios from 'axios';
import "./Home.css";
function Home() {

useEffect(()=>{
axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/8').then((res)=>{console.log(res.data)}).catch((err)=>{console.log('something WRONG')});
},[])

    return (
    <>
      <Navbar />
      
      <div className="main-section">
        
      </div>



      <div className='hr-line'></div>
     <Footer/>
    </>
  );
}

export default Home;
