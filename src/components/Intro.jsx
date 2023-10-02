import "./Intro.css";
import Github from "../image/github.png";
import Linkidn from "../image/lin.png";
import Insta from "../image/insta.png";
import Vec1 from "../image/vec1.png";
import Vec2 from "../image/Vector2.png";
import Emoji from "../image/glassesimoji..png";
import Hero1 from "../image/FirstHero.png";
import FloatingDiv from "./FloatingDiv";
import Crown from '../image/crown.png'
import { motion, spring } from "framer-motion"

const Intro = () => {
  const transition = {duration:2, type:'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Mukesh Kumar</span>
          <span>
            I’m a software developer! I can help you build a product, feature or
            website. Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hesitate to
            contact me.
          </span>
        </div>
        <button className="btn">Hire Me</button>
        <div className="i-icon">
          <a href="https://www.google.com/">
            <img src={Github} alt="git" />
          </a>
          <a href="https://www.google.com/">
            <img src={Linkidn} alt="lkdn" />
          </a>
          <a href="https://www.google.com/"> 
            <img src={Insta} alt="insta" />
          </a>
        </div>
      </div>
      <div className="i-right"> 
      <img src={Vec1} alt="" />
      <img src={Vec2} alt="" />
      <img src={Hero1} alt="" />
      <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
       src={Emoji} alt="" />
      <motion.div
        initial={{top:'-4%', left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
      style={{top: '-8%', left: '65%'}}>
        <FloatingDiv image = {Crown} text1='web' text2='Developer'/>
      </motion.div>
      <div className="blur" style={{background:'rgb(226 166 245 / 97%)'}}></div>
      <div className="blur" style={{background:'#c1f5ff',width:'21rem', height:'11rem', top:'17rem', left:'-6rem' }}></div>
      </div>
    </div>
  );
};

export default Intro;
