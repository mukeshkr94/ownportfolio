import './Footer.css';
import Wave from '../image/wave-orange.png';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="email">
                <i className="fa-regular fa-envelope" style={{color: "#ffffff"}}></i>
                <span>mukeshram94@gmail.com</span>
            </div>
            <div className="socila-icon">
                <a href='#'><i class="fa-brands fa-square-github" style={{color: "#ffffff"}}></i></a>
                <a href='#'><i class="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i></a>
                <a href='#'><i class="fa-brands fa-square-facebook" style={{color: "#ffffff"}}></i></a>
                <a href='#'><i class="fa-brands fa-square-x-twitter" style={{color: "#ffffff"}}></i></a>
            </div>
        </div>
    )
}
export default Footer;
