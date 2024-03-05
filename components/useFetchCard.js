
import { useState, useEffect } from "react";
import { API_URL } from "./StaticData";
const useFetchCard = async () => {

    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const data2 = await fetch(API_URL);
        const json = await data2.json();
        setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }


    useEffect(() => {
        fetchData()

    }, [])


    return data;
}

export default useFetchCard