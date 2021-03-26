import React,{useState,useEffect} from 'react'
/* import wheart from '../../assets/wheart.png'
import rheart from '../../assets/rheart.png' */
import './bottomsectionvideos.css'
const BottomsectionVideos = ({videosAPI}) => {

  console.log("videoAPI",videosAPI);
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
          {/* <div className="heading">
            <ul className="p-main-heading">
              <li className='p-heading-list'><a href='#' onClick={handleClick}className="p-heading-link">Photos</a></li>
              <li className='p-heading-list'><a href='#' onClick={handleClick} className="p-heading-link">Videos</a></li>
              <li className='p-heading-list'><a href='#' className="p-heading-link">Favourites</a></li>
            </ul>
          </div>
          <div className="p-hr-line"></div> */}

          <div id="videos">
            <ul className='v-item-group'>
              <video width="320" height="240" controls>
        <source src="https://player.vimeo.com/external/207561527.sd.mp4?s=20ed066e0dc9c9b8c1dd80de51bccdb18cbb769f&profile_id=165&oauth2_token_id=57447761" type="video/mp4"/>
        <source src="https://player.vimeo.com/external/207561527.sd.mp4?s=20ed066e0dc9c9b8c1dd80de51bccdb18cbb769f&profile_id=165&oauth2_token_id=57447761" type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
              {videosAPI.map((items,i) => {
                return (<li className='v-item-list'>
                    <div  className="v-img-group"  key={items.id}>
                    <img src={items.link} width="230px" height="160px"></img>
                     {<div><input type="checkbox" id="heart" value={image} onClick={(e)=>{changeImage(e)}}></input><label for="heart"></label></div>} 
                     {/* {image?<div><img src={wheart} key={i} id="heart" onClick={changeImage} alt="not available" width="22px" height="22px"></img><label for="heart"></label></div>:<div><img src={rheart} id="heart" onClick={changeImage} alt="not available" width="22px" height="22px"></img><label for='heart'></label></div>}  */}
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