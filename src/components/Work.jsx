import './Work.css';
import Reactjs from '../image/react-js.png';
import Js from '../image/js.png';
import Express from '../image/express.png';
import MongoDb from '../image/mongo.png';
import Nodejs from '../image/nodejs.png';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';

const Work = () =>{
    return(
        <div className="work" id='Experience'>
            <div className="awesome">
                <span>Currently working on</span>
                <span>these technologies</span>
                <span>Mastering the MERN/MEAN stack, I am proficient in developing robust and scalable web applications using cutting-edge technologies. With expertise in both frontend (React/Angular) and backend (Node.js/Express), I ensure seamless integration and optimal performance. Trust me to deliver high-quality solutions that leverage the power of MongoDB/MySQL, Express, React/Angular, and Node.js for your project's success.</span>
                 
                 <Link spy={true} to="Contact" smooth={true}><button className='btn' style={{fontSize:'14px'}}>Hire Me</button></Link>
               
                
                <div className="blur s-blur-1" style={{background:'rgb(226 166 245 / 97%)'}}>

                </div>
                
            </div>
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                transition={{duration:5, type:'spring'}}
                className="w-mainCercle">
                    <div className="w-secSecrcle"><img src={Reactjs} alt='' width='100px' height="auto"/></div>
                    <div className="w-secSecrcle"><img src={Js} alt='' width='100px' height="auto"/></div>
                    <div className="w-secSecrcle"><img src={Nodejs} alt='' width='100px' height="auto"/></div>
                    <div className="w-secSecrcle"><img src={Express} alt='' width='100px' height="auto"/></div>
                    <div className="w-secSecrcle"><img src={MongoDb} alt='' width='100px' height="auto"/></div>
                </motion.div>
                <div className="w-backCircle blueCercle"></div>
                <div className="w-backCircle yellowCercle"></div>
            </div>
        </div>
    )
}

export default Work;