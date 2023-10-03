import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="email">
                <i className="fa-regular fa-envelope" style={{color: "#ffffff"}}></i>
                <span>mukeshram94@gmail.com</span>
            </div>
            <div className="socila-icon">
                <a href='https://github.com/mukeshkr94'><i class="fa-brands fa-square-github" style={{color: "#ffffff"}}></i></a>
                <a href='https://www.linkedin.com/in/mukesh-kumar-a60766126/'><i class="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i></a>
                <a href='https://www.facebook.com/login/'><i class="fa-brands fa-square-facebook" style={{color: "#ffffff"}}></i></a>
                <a href='https://twitter.com/i/flow/login'><i class="fa-brands fa-square-x-twitter" style={{color: "#ffffff"}}></i></a>
            </div>
        </div>
    )
}
export default Footer;
