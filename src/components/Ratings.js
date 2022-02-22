import '../css/App.css';
import React  from 'react';
import {FaRegStar,FaStarHalfAlt,FaStar} from 'react-icons/fa';
import { Row } from 'react-bootstrap';

export default function Ratings({value}){
    let val = value;
    let isFloat = Number(value) === value && value % 1 !== 0;
    let ratingTitle = 'Average';
    if( value <= 2)
    {
        ratingTitle='Novice';
    }
    else if(value <=3)
    {
        ratingTitle='Average';
    }
    else
    {
        ratingTitle='Professional Expertise';
    }
    if(isFloat)
    {
        val = Math.trunc(value);
    }
    const ratings = [];
    for(var i=1;i<=val;i++)
    {
        ratings.push(<FaStar className="rating-star" size={18} title={ratingTitle}/>);
    }
    if(isFloat)
        ratings.push(<FaStarHalfAlt className="rating-star" size={18} title={ratingTitle}/>)
    let addedElements = ratings.length;
    for(var j=1;j<=5-addedElements;j++)
    {
        ratings.push(<FaRegStar className="rating-star" size={18} title={ratingTitle}/>);
    }
    return(
        <Row>
            {ratings}
        </Row>
    );
}
