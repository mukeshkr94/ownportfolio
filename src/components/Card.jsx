import './Card.css';

const Card = ({emoji, heading, details}) =>{
    return(
        <div className='s-card'>
            <img src={emoji} alt=''/>
            <span>{heading}</span>
            <span>{details}</span>
        </div>
    )
}

export default Card;