import './list.css'
import { Link } from 'react-router-dom'

const List = () => {

    return (

        <div className= "navigaiton-continor" >
            <ul>
                <Link to={"/"}><li>Home </li></Link>
                <Link to={"/about"}><li>About </li></Link>
                <Link to ={"/contact" }><li>Contact</li> </Link>
                <Link to={"/"} ><li>Cart</li></Link>
            </ul>
        </div>
    )
}

export default List