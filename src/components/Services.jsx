import './Services.css';
import Hemoji from '../image/glasses.png'
import Card from './Card';
import Resume from '../image/Mukesh.pdf';
import {motion} from 'framer-motion';


const Services = () =>{
    return(
        <div className='service' id='Serivces'>
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>With 2 years of web development experience, I offers Full-stack solutions using MERN/MEAN stack for seamless functionality. Utilizing Docker and AWS, I provide scalable cloud deployment and infrastructure management. Additionally, my expertise in UI/UX design enhances brand presence with visually appealing and user-friendly interfaces.</span>
                <a href={Resume} download><button className='btn' style={{fontSize:'14px'}}>Download CV</button></a>
               
                
                <div className="blur s-blur-1" style={{background:'rgb(226 166 245 / 97%)'}}>

                </div>
                
            </div>
            <motion.div
            initial={{left:'24rem'}}
            whileInView={{left:'14rem'}}
            transition={{duration:2, type:'spring'}}
            className="card">
                <div>
                    <Card 
                    emoji={Hemoji}
                    heading={'Development'}
                    details={'Html, Css, JavaScript, React, Nodejs, Express'}/>
                </div>
                <div className="blur s-blur-2" style={{background:'#c1f5ff'}}></div>
            </motion.div>
        </div>
    )
}

export default Services;