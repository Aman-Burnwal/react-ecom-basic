

import { useEffect, useState } from "react";
import {useFetchResturantDetails} from "./index"



const Resturants = () => {
  const [ restaurants, setRestaurants] = useState([])

  const data = useFetchResturantDetails();

  useEffect(() => {
    console.log(data)
    if (data) setRestaurants(data?.data?.cards[0]?.card?.card);
  }, [data])
  
  console.log(restaurants)

  return (data && restaurants) ? <>
    
    <div>
      <h2>{ restaurants?.header?.title }</h2>
    </div>
    
  </> : (
      
    <div>Resturants</div>
  )
}

export default Resturants