import React from "react";
import BookcardCss from './Bookcard.module.css';
import { useBookContext } from "./assets/Contexts/bookContext";
import { useNavigate } from "react-router-dom";

const Bookcard = (props) => {
    const { selectBook } = useBookContext();
    const navigate =useNavigate()
    const handleClick =()=>{
        selectBook(props)
        navigate('/book-details'); 
    }
    return (
        <div className={BookcardCss.card} onClick={handleClick}>  
            <div className={BookcardCss.cardImg}>
            <img alt="img" src={props.image} />
            </div>
            <h4 className={BookcardCss.title}>{props.title}</h4>
        </div>        
    )
}
export default Bookcard