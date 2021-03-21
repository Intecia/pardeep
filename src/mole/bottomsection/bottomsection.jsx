import React from 'react'
import "./bottomsection.css"
const Bottomsection = ({photosAPI}) => {
    return (
        <section className="main">
        <div className="container">
          <div className="heading">

            <ul>
              <li>Photos</li>
              <li>Videos</li>
              <li>Favourites</li>
            </ul>
          </div>
          <div className="hrline"></div>

          <div id="photos">
            <ul>
              {photosAPI.map((item) => {
                return (
                  <li>
                    <img src={item.src.medium} width="230px" height="160px"></img>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Bottomsection
