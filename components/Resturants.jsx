

import { useEffect, useState } from "react";
import { useFetchResturantDetails , Imgurl as imgurl} from "./index"
import star from "../pictures/star.png";
import {Itemcard} from "./index"



const Resturants = () => {
  const [restaurants, setRestaurants] = useState([])
  const [res, setRes] = useState([]);
  const data = useFetchResturantDetails();

  useEffect(() => {
    // console.log(data)
    if (data) setRestaurants(data?.data?.cards[0]?.card?.card);
    if (data) setRes(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }, [data])

  console.log(res)
 

  return (data && restaurants) ? <>

    <div>
      <div className="resturant-card">


        <div className="resturant-header">

          <div>
            <img src={imgurl + restaurants?.info?.cloudinaryImageId} alt=""
              height={150} width={180} />
          </div>
          <div className="resturant-card-header">
            <h1>{restaurants?.info?.name}</h1>
            <p>{restaurants?.info?.cuisines.join(", ")}</p>
            <div className="">
              <div className="resturant-card-rating"> <span > <img src={star} height={14}></img></span> {restaurants?.info?.avgRating}</div>
              <div>{restaurants?.info?.sla?.slaString}</div>
              <div>{restaurants?.info?.costForTwoMessage}</div>
            </div>
          </div>
        </div>


      </div>

      {/* recomended */}
      <div className="">
        <h2 className="resturant-header">Recomended</h2>
        <p className="resturant-header"> Items {res.length}</p>
        {res.map((dat) => {
          const { id, name, description, price } = dat.card.info;
          console.log(dat.card.info);
          return (<Itemcard {...dat.card.info } imgurl={imgurl} key={id}  />)
          
        })}
        
      </div>
    </div>

  </> : (

    <div>Resturants</div>
  )
}

export default Resturants