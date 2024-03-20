import  { useEffect, useState } from 'react'
import { API_URL } from './StaticData'
import { useParams } from "react-router-dom";

const useFetchResturantDetails = () => {
    const { resId } = useParams();
    

    const [restData, setRestData] = useState([]);

    const API = API_URL + resId;


    const fetchResData = async () => {

        try {
            
            const data = await fetch(API);
            

            if (!data.ok) {
                throw new Error(`HTTP error! Status: ${data.status}`);
            }

            const json = await data.json();

            setRestData(json)

        } catch (error) {
            console.log("error ", error.message);

        }
    }

    useEffect(() => {
        fetchResData()
    }, [])

    return restData;
}

export default useFetchResturantDetails