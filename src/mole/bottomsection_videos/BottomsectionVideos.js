import React,{useState,useEffect} from 'react'
/* import wheart from '../../assets/wheart.png'
import rheart from '../../assets/rheart.png' */
import './bottomsectionvideos.css'
const BottomsectionVideos = ({videosAPI}) => {

  console.log("videoAPI",videosAPI[0].duration);
  const[image,setImage]=useState('true');

  const changeImage=(e)=>{
     if(e.target.value==='true'){
      setImage('false');
    }
    else{
      setImage('true') 
    }   
  }

    return (
        <section className="bottom-nav">
        <div className="container">

          <div id="videos">
            <ul className='v-item-group'>
              {videosAPI.map((items,i) => {
                console.log("link=",items.link);
                return (<li className='v-item-list'>
                    <div  className="v-img-group"  key={items.id}>
                    <video width="230" height="160" controls>
        <source src={items.link} type="video/mp4"/>
        <source src={items.link} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
                     
                     {<div><input type="checkbox" id="heart" value={image} onClick={(e)=>{changeImage(e)}}></input><label htmlFor="heart"></label></div>} 
                     {/* {image?<div><img src={wheart} key={i} id="heart" onClick={changeImage} alt="not available" width="22px" height="22px"></img><label for="heart"></label></div>:<div><img src={rheart} id="heart" onClick={changeImage} alt="not available" width="22px" height="22px"></img><label for='heart'></label></div>} */}
                    </div>
                  </li>)}
              )}
            </ul>
          </div>
        </div>
      </section>
    )
}

export default BottomsectionVideos