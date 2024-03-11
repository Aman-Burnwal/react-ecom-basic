

import {useFetchResturantDetails} from "./index"



const Resturants = () => {


    const data = useFetchResturantDetails();
    console.log(data)


    return (
      
    <div>Resturants</div>
  )
}

export default Resturants