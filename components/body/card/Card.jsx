import React from 'react'
import "./card.css"

const Card = ({
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating, name, sla
}) => {
    // console.log(p)
    
  return (
    <div className= "card">
      <img className="card-img" alt="" loading="lazy" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
          <div className = "card-nameAvg">
              <p >{ name }</p>
              <p >{ avgRating }</p>
          </div>
          <p >{costForTwo}</p>
          <p >{cuisines.join(", ") }</p>
          <p > {sla.lastMileTravelString }</p>

    </div>
  )
}

export default Card