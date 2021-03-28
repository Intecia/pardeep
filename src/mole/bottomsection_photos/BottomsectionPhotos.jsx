import React,{useState} from 'react'
/* import wheart from '../../assets/wheart.png'
import rheart from '../../assets/rheart.png' */
import "./bottomsectionphotos.css"
const BottomsectionPhotos = (props) => {

  console.log("photoAPI",props.photosAPI);
  const[fav,setFav]=useState(props.fav);

  const changeImage=(e)=>{
     console.log("target==",e.target);   
     
  }

    return (
        <section className="main">
        <div className="container">
          {/* <div className="heading">
            <ul className="p-main-heading">
              <li className='p-heading-list'><a href='#' onClick={handleClick}className="p-heading-link">Photos</a></li>
              <li className='p-heading-list'><a href='#' onClick={handleClick} className="p-heading-link">Videos</a></li>
              <li className='p-heading-list'><a href='#' className="p-heading-link">Favourites</a></li>
            </ul>
          </div> 
          <div className="p-hr-line"></div>*/}

          <div id="photos">
            <ul className='p-item-group'>
              {props.photosAPI.map((item,i) => {
               /*  console.log("item--->",item); */ 
                return (
                  <li className='p-item-list'>
                    <div  className="img-group" key={item.id}>
                    <img src={item.src.medium} width="230px" height="160px"></img>
               

                     {<div><input type="checkbox" id="heart" value={item.src.medium} onClick={(e)=>{changeImage(e)}}></input><label for="heart"></label></div>} 
                     {/* {image?<div><img src={wheart} key={i} id="heart" onClick={changeImage} alt="not available" width="22px" height="22px"></img><label for="heart"></label></div>:<div><img src={rheart} id="heart" onClick={changeImage} alt="not available" width="22px" height="22px"></img><label for='heart'></label></div>}  */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    )
}

export default BottomsectionPhotos