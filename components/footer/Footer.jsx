
import { useState, useEffect } from "react";
import { City, useFetchCard, useFetchResturantDetails } from "../index";

const Footer = () => {

  const {cities} = useFetchCard();
  // const [citiess, setCities] = useState([]);
  // const [showAllCities, setShowAllCities] = useState(false);

  // useEffect(() => {

  //   setCities(data?.cities);
    
  // }, [data])
  // const toggleShowAllCities = () => {
  //   setShowAllCities(!showAllCities);
  // };
  // console.log("data", cities);
  return;

  
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