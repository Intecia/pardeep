import React,{useState} from 'react'
import {OnePhoto} from '../onephoto/OnePhoto'
import {Link} from 'react-router-dom'
import "./bottomsectionphotos.css"
const BottomsectionPhotos = (props) => {

  console.log("photoAPI",props.photosAPI);
  const[fav,setFav]=useState(props.fav);
  const[comp,setComp]=useState(false);
  const[plink,setPlink]=useState('');
   const changeImage=(e)=>{
     console.log("target==",e.target);   
     
  }
   const clickPhoto=(e)=>{
    console.log("calling onePhoto",e);
     setPlink(e);
      setComp(true);
  }  
    return (
        <section className="main">
        <div className="container">

          <div id="photos">
            <ul className='p-item-group'>
              {props.photosAPI.map((item,i) => {
               /*  console.log("item--->",item); */ 
                return (
                  <li className='p-item-list'>
                    <div  className="img-group" key={item.id}>
                    <img  onClick={()=>clickPhoto(item.src.medium)} src={item.src.medium} width="230px" height="160px" ></img>
               

                     {<div><input type="checkbox" id="heart" value={item.src.medium} onClick={(e)=>{changeImage(e)}}></input><label for="heart"></label></div>} 
                    </div>
                  </li>
                  
                );
              })}
            </ul>
            {comp && <OnePhoto plink={plink}/>}
          </div>
        </div>
      </section>
    )
}

export default BottomsectionPhotos