import React, { Fragment, useState,useEffect } from "react";
import "./home.css";
import { DataJson } from "./dataj";
import Uppersection from "../../mole/uppersection/uppersection";
import BottomsectionPhotos from "../../mole/bottomsection_photos/BottomsectionPhotos";
import BottomsectionVideos from "../../mole/bottomsection_videos/BottomsectionVideos";
import NavbarBottom from '../../mole/navbarbottom/NavbarBottom'
import Favourites from '../../mole/favourites/Favourites'
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("people");
  const[fav,setFav]=useState([]);
  const [phototvideo, setPhotoVideo]=useState(true);
  const [photosAPI, setPhotosAPI] = useState([]);
  const [videosAPI, setVideosAPI] = useState([]);
  const[sendApi,setSendApi]=useState([]);
  const[loading,setLoading]=useState(false);
  useEffect(() => {
     axios
      .get("https://api.pexels.com/v1/search?query=people", {
        headers: {
          Authorization:
            "563492ad6f91700001000001eedaff4e65b6494a8fc8b72d7a5b67b7",
        },
      })
      .then((res) => {
        console.log("Fetching photos=",res.data.photos);
        setPhotosAPI(res.data.photos)
      })
      .catch((err) => {
        console.log("photos useEffect Error");
      }); 
      setLoading(true);
      axios.get("https://api.pexels.com/videos/search?query=people", {
        headers: {
          Authorization:
            "563492ad6f91700001000001eedaff4e65b6494a8fc8b72d7a5b67b7",
        },
      })
      .then((res) => {
        console.log("Fetching videos=",res.data.videos);
        setVideosAPI(res.data.videos)
      })
      .catch((err) => {
        console.log("video useEffect Error");
      });
setLoading(false);

  }, []) 

  const handleClick = () => {
     axios
      .get(`https://api.pexels.com/v1/search?query=${name}`, {
        headers: {
          Authorization:
            "563492ad6f91700001000001eedaff4e65b6494a8fc8b72d7a5b67b7",
        },
      })
      .then((res) => {
        console.log("Photo handleClick function=",res.data.photos);
        setPhotosAPI(res.data.photos)
      })
      .catch((err) => {
        console.log("Error");
      });  

       axios.get(`https://api.pexels.com/videos/search?query=${name}`, {
        headers: {
          Authorization:
            "563492ad6f91700001000001eedaff4e65b6494a8fc8b72d7a5b67b7",
        },
      })
      .then((res) => {
        console.log("Video handleClick function=",res.data.videos);
        setVideosAPI(res.data.videos)
      })
      .catch((err) => {
        console.log("On click Error");
      });   

  };
   const photoClick=(e)=>{
    console.log("bottomheaderClick",e.target.innerText);
    if(e.target.innerText==='Photos'){
      setPhotoVideo(true);
     
      console.log("sending photo API",phototvideo);
    }
    else if(e.target.innerText==='Videos'){
      setPhotoVideo(false);
    
      console.log("sending video API",phototvideo);
    }
    else{
      setPhotoVideo(null);
    }
    } 
  const searchInput = (e) => {
    let name = String(e.target.value);
    setName(name);
  };
  console.log("sending",phototvideo);
  return (
    <Fragment>
    <Uppersection DataJson={DataJson} name={name} searchInput={searchInput} handleClick={handleClick} />
    <NavbarBottom photoClick={photoClick}/>

     {/* <BottomsectionPhotos photosAPI={photosAPI}/>  */}
     {/* <BottomsectionVideos videosAPI={videosAPI} />  */}
   
      {/* {phototvideo?<div>Heloow true</div>:<div>Now false</div>} */}
    
      {phototvideo?<BottomsectionPhotos photosAPI={photosAPI} fav={fav}/> : phototvideo!==null? <BottomsectionVideos videosAPI={videosAPI} fav={fav}/>:<Favourites fav={fav}>FAVIOURATE</Favourites> }
    </Fragment>
  );
};

export default Home;
