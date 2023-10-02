import './Techskill.css';
import Html from '../image/html.png';
import Css from '../image/css.png';
import Chart from '../image/chart.png';
import Jscript from '../image/js.png';
import ReactIcon from '../image/react-js.png';
import Mongo from '../image/mongo.png';
import Mysql from '../image/mysql.png';
import Firebase from '../image/firebase.png';
import Git from '../image/git.png';
import Github from '../image/github.png';
import Mui from '../image/mui.png';
import Express from '../image/express.png';
import Netlify from '../image/netlify.png';
import Nodejs from '../image/nodejs.png';
import Bootstrap from '../image/bootstrap.png';
import Cpp from '../image/cpp.png';
import Techhero from '../image/teaching.png';

const Techskill = () =>{
    return(
       <div className="techskill">
        <span>Experties</span>
        <div className="skill-container">
            <div className="skill-left">
                <img src={Html} alt='' />
                <img src={Css} alt='' />
                <img src={Bootstrap} alt='' />
                <img src={Chart} alt='' />
                <img src={Jscript} alt='' />
                <img src={ReactIcon} alt='' />
                <img src={Mui} alt='' />
                <img src={Nodejs} alt='' />
                <img src={Express} alt='' />
                <img src={Mongo} alt='' />
                <img src={Mysql} alt='' />
                <img src={Firebase} alt='' />
                <img src={Netlify} alt='' />
                <img src={Git} alt='' />
                <img src={Github} alt='' />
                <img src={Cpp} alt='' />
                <div className="blur s-blur-1" style={{background:'rgb(226 166 245 / 97%)'}}></div>
            </div>
            <div className="skill-right">
            <img src={Techhero} alt='' />
            </div>
        </div>
       </div>
    )
}

export default Techskill;