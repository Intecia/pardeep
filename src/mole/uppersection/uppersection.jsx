import React from 'react'
import "./uppersection.css"
const Uppersection = ({DataJson,name,searchInput,handleClick}) => {
    return (
        <section className="showcase">
        <div className="container">
          <p className="logo-text">{DataJson.logo}</p>
          <div className="info">
            <h4>{DataJson.heading}</h4>
            <p>{DataJson.desc}</p>
            <input
              type="text"
              onChange={(e) => {
                searchInput(e);
              }}
              value={name}
              placeholder="Photo and videos"
            ></input>
            <button type="button" className="btn" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </section>
    )
}

export default Uppersection
