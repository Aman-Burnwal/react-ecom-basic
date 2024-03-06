import { useState, useEffect } from "react";
import "./body.css"
import { Card, Button, SimulateData, API_URL, useFetchCard } from "../index"




const Body = () => {


  const [data, setData] = useState([]);
  const [originalData, setOrignalData] = useState([])
  const [inputValue, setInputValue] = useState("");

  const fetchedData = useFetchCard();


  useEffect(() => {

    setData(fetchedData);


    setOrignalData(fetchedData);

  }, [fetchedData]);


  const sorting_data_by_rating = () => setData(originalData.filter((e) => e.info.avgRating > 4.2));

  const sort_data_by_ratingWise = () => {
    const sorted = [...originalData].sort((b, a) => a.info.avgRating - b.info.avgRating)
    setData(sorted);

  }


  const sorting_data_by_name = () => {
    !inputValue.trim() ?
      setData(originalData) :
      setData(originalData.filter((data) => data?.info?.name.toLowerCase().includes(inputValue.trim().toLowerCase())))
  }



  return originalData.length === 0 ?
    (<SimulateData />) :
    (<div className="Body">

      <div className="serch-container">

        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={sorting_data_by_name}>Search</button>

        <div className="btn-parent" onClick={sorting_data_by_rating}>
          <Button  content={"Show higher rating"}/>
        </div>
        <div className="btn-parent" onClick={sort_data_by_ratingWise}>
          <Button content={"Sort data by higher rating"} />
        </div>

      </div>


      <div className="cards">
        {data.map((restaurant) => <Card {...restaurant.info} key={restaurant?.info?.id} />)}
      </div>

    </div>
    )
}

export default Body 