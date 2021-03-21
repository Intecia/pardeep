import React, { Fragment, useState,useEffect } from "react";
import Logo from "../../assets/Logo-scroll.png";
import Video from "../../assets/Video.png";
import "./photos.css";
import { DataJson } from "./dataj";
import axios from "axios";
import Uppersection from "../../mole/uppersection/uppersection";
import Bottomsection from "../../mole/bottomsection/bottomsection";

const Photos = () => {
  const [name, setName] = useState("");
  const [photosAPI, setPhotosAPI] = useState([])

  useEffect(() => {
    axios
      .get("https://api.pexels.com/v1/search?query=people", {
        headers: {
          Authorization:
            "563492ad6f91700001000001eedaff4e65b6494a8fc8b72d7a5b67b7",
        },
      })
      .then((res) => {
        console.log(res.data.photos);
        setPhotosAPI(res.data.photos)
      })
      .catch((err) => {
        console.log("Error");
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
        console.log(res.data.photos);
        setPhotosAPI(res.data.photos)
      })
      .catch((err) => {
        console.log("Error");
      });

      
      var options = {
        method: 'GET',
        url: 'https://instagram47.p.rapidapi.com/location_posts',
        params: {locationid: '1495'},
        headers: {
          'x-rapidapi-key': 'f3c247f8dbmshea8b41ccc0d0b8fp1e45a9jsn8e9428bfd389',
          'x-rapidapi-host': 'instagram47.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  };

  const searchInput = (e) => {
    let name = String(e.target.value);

    setName(name);
  };
  console.log(DataJson);
  return (
    <Fragment>
    <Uppersection DataJson={DataJson} name={name} searchInput={searchInput} handleClick={handleClick} />
      <Bottomsection photosAPI={photosAPI}/>
    </Fragment>
  );
};

export default Photos;
