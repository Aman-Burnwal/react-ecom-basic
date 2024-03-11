

import { useEffect, useState } from "react";
import {useFetchResturantDetails} from "./index"



const Resturants = () => {
  const [ restaurants, setRestaurants] = useState([])

  const data = useFetchResturantDetails();

  useEffect(() => {
    if (data) setRestaurants(data?.data?.cards[0]?.card?.card);
  }, [data])
  
  console.log(restaurants)

    return (data && data.length == 0) ? <h1> heelo</h1> :  (
      
    <div>Resturants</div>
  )
}

export default Resturants