import "./Navbar.css";
import Name from "../image/mkr.png";
import {Link} from 'react-scroll';
import { motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="container" id="Navbar">
      <div className="left">
        <div className="name">
          <motion.img
            initial={{transform:'scale(0)'}}
            whileInView={{transform:'scale(1.3)'}}
            transition={{duration:6, type:'spring'}}
            src={Name}
            alt="Mukesh"
            className="name-logo"
            width="80px"
            height="auto"
          />
        </div>
      </div>
      <div className="right">
        <div className="list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true}><li>Home</li></Link>
            <Link spy={true} to="Serivces" smooth={true} ><li>Serivces</li></Link>
            <Link spy={true} to="Experience" smooth={true} ><li>Experience</li></Link>
            <Link spy={true} to="Portfolio" smooth={true}><li>Portfolio</li></Link>
            
            
            
            
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}><button className="btn">Contact</button></Link>
        
      </div>
    </div>
  );
};

export default Navbar;
