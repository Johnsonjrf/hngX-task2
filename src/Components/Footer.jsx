import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  
  return (
    <div className='footer'>
        <div className='footer-icons'>
        <IconContext.Provider value={{ color: "black", size:'1.5rem', className: "global-class-name" }}>
            <a href='https'><FaFacebook /></a>
            <a href='https'><FaInstagram /></a>
            <a href='https'><FaTwitter /></a>
            <a href='https'><FaYoutube /></a>
        </IconContext.Provider>
        </div>
        <div className='terms'>
            <a href='https'>Conditions of use</a>
            <a href='https'>Privacy and Policy</a>
            <a href='https'>Press Room</a>
        </div>
        <div><p>2021 MovieBox by Adriana Eka Prayudha</p></div>
    </div>
  )
}

export default Footer