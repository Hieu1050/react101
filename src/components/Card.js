import React from "react"
export default function Card (props){
    return (
        <div className = "card">
            
            <img className = "card-image" alt = "card image" src = {`/images/${props.card_img}`} />
            <div className = "card-rating-loc">
                <img className = "card-star" alt = "star" src = {`images/${props.card_star}`} />
                <span className = "card-rating"> {props.card_rating}</span>
                <span  className="gray"> ({props.card_popularity}) • </span>
                <span  className="gray"> {props.card_location}</span>
            </div>
            <p className = "card-description"> {props.card_title}</p>
            <p className = "card-pricing"> <span className="bold">From {props.card_pricing}$</span> / person</p>
        </div>
    )
}