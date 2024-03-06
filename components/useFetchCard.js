import { useState, useEffect } from "react";
import { API_URL } from "./StaticData";

const useFetchCard = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                // Check for specific HTTP error status
                if (response.status === 403) {
                    throw new Error("Access forbidden. You might not have the necessary permissions.");
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid content type. Expected JSON.");
            }

            const json = await response.json();
            setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error.message);
            // Handle the error as needed (e.g., set an error state)
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return data;
};

export default useFetchCard;
