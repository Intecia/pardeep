import React, { Fragment, useState,useEffect } from "react";
import "./home.css";
import { DataJson } from "./dataj";
import Uppersection from "../../mole/uppersection/uppersection";
import BottomsectionPhotos from "../../mole/bottomsection_photos/BottomsectionPhotos";
import BottomsectionVideos from "../../mole/bottomsection_videos/BottomsectionVideos";
import NavbarBottom from '../../mole/navbarbottom/NavbarBottom'
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("people");
  const [phototvideo, setPhotoVideo]=useState(true);
  const [photosAPI, setPhotosAPI] = useState([]);
  const [videosAPI, setVideosAPI] = useState([]);
  const[sendApi,setSendApi]=useState([]);
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
     /*  setSendApi(photosAPI); */
      console.log("sending photo API",phototvideo);
    }
    else{
      setPhotoVideo(false);
      /* setSendApi(videosAPI); */
      console.log("sending video API",phototvideo);
    }
    } 
  const searchInput = (e) => {
    let name = String(e.target.value);
    setName(name);
  };
  return (
    <Fragment>
    <Uppersection DataJson={DataJson} name={name} searchInput={searchInput} handleClick={handleClick} />
    <NavbarBottom photoClick={photoClick}/>

     {/* <BottomsectionPhotos photosAPI={photosAPI}/>  */}
     <BottomsectionVideos videosAPI={videosAPI} /> 
   
     {/* {phototvideo}?<BottomsectionVideos prm="calling video sectoin" videosAPI={videosAPI}/>: <BottomsectionPhotos photosAPI={photosAPI}/> */}
    </Fragment>
  );
};

export default Home;
