import { useState, useEffect } from "react";
import "./body.css"
import {Card, Button, SimulateData, API_URL} from "../index"




const Body = () => {

  const [data, setData] = useState([]);
  const [originalData, setOrignalData] = useState([])

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {

    fetchData()

  }, [])


  const fetchData = async () => {
    const data2 = await fetch(API_URL);
    const json = await data2.json();
    setOrignalData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
 

  const sorting_data_by_rating = () => setData(originalData.filter((e) => e.info.avgRating > 4.2));

  

  const sorting_data_by_name = () => {
    if (!inputValue.trim()) return;
     console.log(inputValue, originalData[0]?.info.name);
    setData(originalData.filter((data) => data?.info?.name.toLowerCase().includes(inputValue.trim().toLowerCase())))
  }

  return originalData.length === 0
    ?
    (

      <SimulateData />
    )
    :
    (

      <SimulateData />
    // <div className="Body">
      
    //   <div className="serch-container">

    //     <input
    //       className="search-input"
    //       type="text"
    //       placeholder="Search..."
    //       value={inputValue}
    //       onChange={(e) =>setInputValue(e.target.value)}
    //     />
    //     <button onClick={sorting_data_by_name}>Search</button>

    //     <div className="btn-parent" onClick={sorting_data_by_rating}>
    //       <Button />
    //     </div>
    //   </div>
      
      
    //   <div className="cards">
    //     {data.map((restaurant) => <Card {...restaurant.info} key={restaurant?.info?.id} />)}
    //   </div>
      
    // </div>
  )
}

export default Body 