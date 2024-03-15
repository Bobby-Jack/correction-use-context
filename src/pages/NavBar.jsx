import { useContext } from "react"
import myContext from "../contexts/MyContext"
import { Link } from "react-router-dom"

function NavBar(){
    const { theme, username} = useContext(myContext)
  return (
    <div className="navbar">
        <span>{username}</span>
        <Link to='/'>go to Home</Link>
        <Link to='/exo2'>go to Exo2</Link>
        <Link to='/exo3'>go to Exo3</Link>
        <Link to='/exo4'>go to Exo4</Link>
        <span>{theme}</span>
    </div>
  )
}

export default NavBar
