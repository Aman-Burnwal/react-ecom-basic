/* This code snippet is a React functional component named `Body`. Here's a breakdown of what it does: */

import { useState, useEffect } from "react";
import "./body.css"
import { Card, Button, SimulateData, useFetchCard, Swiggy_DATA } from "../index"




const Body = () => {

/* These lines of code are initializing state variables using the `useState` hook in a React functional
component named `Body`. Here's a breakdown of what each state variable is used for: */

  const [data, setData] = useState([]);
  const [originalData, setOrignalData] = useState([])
  const [inputValue, setInputValue] = useState("");

 /* This code snippet is a React functional component named `Body` that handles the rendering and
 functionality of a UI component. Here's a breakdown of what it does: */
  // const fetchedData = useFetchCard();
  const fetchedData = Swiggy_DATA;



/* The `useEffect` hook in the provided code snippet is used to perform side effects in a functional
component. In this specific case: */
  // useEffect(() => {

  //   setData(fetchedData);


  //   setOrignalData(fetchedData);

  // }, [fetchedData]);

/**
 * The functions `sorting_data_by_rating` and `sort_data_by_ratingWise` are used to filter and sort
 * data based on the average rating in a React application.
 */

  const sorting_data_by_rating = () => setData(originalData.filter((e) => e.info.avgRating > 4.2));

  const sort_data_by_ratingWise = () => setData ([...originalData].sort((b, a) => a.info.avgRating - b.info.avgRating))



/**
 * The function `sorting_data_by_name` filters the original data based on the name property in a
 * case-insensitive manner using the `inputValue` as a filter criteria.
 */
/**
 * The function `sorting_data_by_name` filters the original data based on the name property in a
 * case-insensitive manner using the `inputValue` as a filter criteria.
 */
/**
 * The function `sorting_data_by_name` filters the original data based on the name property in a
 * case-insensitive manner using the `inputValue`.
 */

  const sorting_data_by_name = () => {
    !inputValue.trim() ?
      setData(originalData) :
      setData(originalData.filter((data) => data?.info?.name.toLowerCase().includes(inputValue.trim().toLowerCase())))
  }



/* This `return` statement in the `Body` component is a conditional rendering logic. It checks if the
`originalData` array's length is equal to 0. If it is, it renders a component called `SimulateData`.
If the `originalData` array has data, it renders a `div` element with the class name "Body". */
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
          <Button  content={"Show only higher rating"}/>
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