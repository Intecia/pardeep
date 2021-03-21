import React,{useState} from 'react'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram-logo.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import './footer.css'
const Footer = () => {
    const [forBuyers, setBuyers] = useState([
        "For Buyers",
        "Art Advisory Services",
        "Buyer FAQ",
        "Return Policy",
        "Testimonials",
        "Art Prints",
        "Curator’s Circle",
        "Catalog",
        "Gift Card",
      ]);
      const [forArtist, setArtist] = useState([
        "For Artist",
        "Why Sell",
        "Artist Handbook",
      ]);
      const [forAbout, setAbout] = useState([
        "About Us",
        "About",
        "Press",
        "Careers",
        "Contact Us",
        "Blog",
        "Saatchi Art Stories",
      ]);
      const [saatchi, setSaatchi] = useState([
        "Sactchi Art",
        "Terms of Service",
        "Privacy Policy",
        "Copyright Policy",
        "Affiliate Program",
        "Accessibility",
        "Gift Card Terms",
        "Do Not Sell My Personal Information",
      ]);
      const [topCatagories, setTopCatagories] = useState([
        "Top Catagories",
        "Paintings",
        "Photography",
        "Sculpture",
        "Drawings",
        "Collage",
      ]);
      const [others, setOthers] = useState(
        ["©",
        "2021 Saatchi Art",
        "Leaf Group Commerce",
        "All Rights Reserved"]
      );
    

    return (
        <footer>
        <div className="footer-info">
            <div className='footer-container'>
          <div className="buyers">
            {forBuyers.map((buyersitem, index) => {
              return index === 0 ? <div className='heading-sa'><a href='#'>{buyersitem}</a></div>:<div className='info-sa'><a href='#'>{buyersitem}</a></div>
            })}
          </div>
           <div className="buyers">
            {forArtist.map((art,index) => {
              return index===0 ? <div className='heading-sa'><a href='#'>{art}</a></div>:<div className='info-sa'><a href='#'>{art}</a></div>;
            })}
          </div>
          <div className="buyers">
            {forAbout.map((about,index) => {
              return index===0? <div className='heading-sa'><a href='#'>{about}</a></div>:<div className='info-sa'><a href='#'>{about}</a></div>;
            })}
          </div>
          <div className="buyers">
            {saatchi.map((saach,index) => {
              return index===0?<div className='heading-sa'><a href='#'>{saach}</a></div>:<div className='info-sa'><a href='#'>{saach}</a></div>;
            })}
          </div>
          <div className="buyers">
            {topCatagories.map((top,index) => {
              return index===0?<div className='heading-sa'><a href='#'>{top}</a></div>:<div className='info-sa'><a href='#'>{top}</a></div>;
            })}
          </div>
          <div className="buyers">
            {others.map((oth,index) => {
              return index===0?<div className='heading-sa'><a href='#'>{oth}</a></div>:<div className='info-sa'><a href='#'>{oth}</a></div>;
            })}
          </div>
          
          </div>
          <div className='mini-footer'>
          <div className='footer-container'>
              <div className='brand'>SAATCHI ART</div>
              <div className='icon'>
                  <ul className='icon-list'>
                      <li><img src={facebook} className='icon1'></img></li>
                      <li><img src={instagram} className='icon1'></img></li>
                      <li><img src={twitter} className='icon1'></img></li>
                      <li><img src={linkedin} className='icon1'></img></li>
                      <li><img src={youtube} className='icon1'></img></li>
                  </ul>
              </div>
          </div>
          </div>
        </div>
        
      </footer>
    )
}

export default Footer
