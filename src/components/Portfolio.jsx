import{Swiper,SwiperSlide} from 'swiper/react';
import MusicApp from '../image/musicapp.png';
import RadiumOne from '../image/RadiumOne.png';
import Rds from '../image/RSD.png';
import Hoc from '../image/hoc.png';
import './Portfolio.css';
import 'swiper/css';


const Portfolio = () =>{
    return(
      <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}

        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={MusicApp} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={RadiumOne} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Rds} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt='' />
            </SwiperSlide>
        </Swiper>
      </div>
    )
}
export default Portfolio;