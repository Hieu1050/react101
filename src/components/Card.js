import React from "react"
export default function Card (props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className = "card">
            {/* if badgeText is NOT null, display its content */}
            {badgeText && <div className="card-badge">{badgeText} </div>}
            <img className = "card-image" alt = "card image" src = {`/images/${props.coverImg}`} />
            <div className = "card-rating-loc">
                <img className = "card-star" alt = "star" src = "/images/card-star.png" />
                <span className = "card-rating"> {props.stats.rating}</span>
                <span  className="gray"> ({props.stats.reviewCount}) • </span>
                <span  className="gray"> {props.location}</span>
            </div>
            <p className = "card-description"> {props.title}</p>
            <p className = "card-pricing"> <span className="bold">From {props.price}$</span> / person</p>
        </div>
    )
}