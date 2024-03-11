
import { useState, useEffect } from "react";
import { City, useFetchResturantDetails } from "../index"
const Footer = () => {

  const data =   useFetchResturantDetails()

  const [cities, setCities] = useState([]);

  useEffect(() => {

    setCities(data?.data?.cards[10]?.card?.card?.cities);

    
  }, [data])
  // console.log("data", cities);

  
  return (!cities || cities.length == 0) ? <h1> Loading</h1> : (
    
    
    <div className="footer">
      <div className="footer-city" >
        {cities.map((city) => {

          let cityname = city.text;

          return <City cityname={cityname} key={cityname}
          />
        })}
        <City />
      </div>
      

        
          
    </div>
  )
}

export default Footer