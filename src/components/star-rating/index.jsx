import { useState } from "react";
import { FaStar } from "react-icons/fa";
import classes from './index.module.css'

export default function StarRating({noOfStars = 5}) {
     const [rating,setRating] = useState(0);
            const [hover, setHover] = useState(0);

            function handleClick(getCurrentIndex){
                setRating(getCurrentIndex)
                
            }

            function handleMoveMove(getCurrentIndex){
                setHover(getCurrentIndex)
            }

            function handleMouseLeave(){
                setHover(rating)
            }

  return <div className={classes["star-rating"]}>
    {
        [...Array(noOfStars)].map((_,index)=>{
            index += 1
            return <FaStar 
            key={index}
            className={index <= (hover || rating) ? classes["active"] : classes["inactive"]}
            onClick={()=>handleClick(index)}
            onMouseEnter={()=>handleMoveMove(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
            />
        })
    }         
  </div>;
}