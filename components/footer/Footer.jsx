
import { useState, useEffect } from "react";
import { City, useFetchResturantDetails } from "../index";

const Footer = () => {

  const data = useFetchResturantDetails();
  const [cities, setCities] = useState([]);
  const [showAllCities, setShowAllCities] = useState(false);

  useEffect(() => {

    setCities(data?.data?.cards[10]?.card?.card?.cities);
    
  }, [data])
  const toggleShowAllCities = () => {
    setShowAllCities(!showAllCities);
  };
  // console.log("data", cities);

  
  return (!cities || cities.length === 0) ? <h1> Loading</h1> : (
    <div className="footer">
      <div className="footer-city">
        {cities.slice(0, showAllCities ? cities.length : 12).map((city) => {
          let cityName = city.text;
          return <City cityname={cityName} key={cityName} />;
        })}
        {!showAllCities && <p className="footer-para" onClick={toggleShowAllCities}>

          {"show next " + cities.length + " cities"}

          </p>
        }
      </div>
      
    </div>
  );
}

export default Footer