import React,{useState,useEffect} from 'react'
/* import wheart from '../../assets/wheart.png'
import rheart from '../../assets/rheart.png' */
import './bottomsectionvideos.css'
const BottomsectionVideos = (props) => {

  console.log("videoAPI",props.videosAPI);
  const[fav,setFav]=useState(props.fav);

  const changeImage=(e)=>{
    console.log("target==",e.target);   
    setFav([fav,e.target.value]);
 }

    return (
        <section className="bottom-nav">
        <div className="container">

          <div id="videos">
            <ul className='v-item-group'>
              {props.videosAPI.map((items,i) => {
               /*  console.log("link=",items.video_files[0].link); */
                return (<li key={i} className='v-item-list'>
                    <div  className="v-img-group"  key={items.id}>
                      {/* <div>ID:={items.user.id}</div>
                      <div>name:={items.user.name}</div>
                      <div>URL:={items.user.url}</div> */}
                    <video className="vclass" width="230" height="160" controls>
                      <source src={items.video_files[0].link} type="video/mp4"/>
                      <source src={items.video_files[0].link} type="video/ogg"/>
                      Your browser does not support the video tag.
                    </video>
                     
                     {<div><input type="checkbox" id="heart" value={items.video_files[0].link} onClick={(e)=>{changeImage(e)}}></input><label htmlFor="heart"></label></div>} 
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