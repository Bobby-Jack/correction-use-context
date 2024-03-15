import { useContext } from "react"
import NavBar from "./NavBar"
import myContext from "../contexts/MyContext"
import { Link } from "react-router-dom"

function Exo2(){
    const {username, email, connected} = useContext(myContext)
  return (
    <div>
        {
            connected ?
           <>
            <NavBar/>
            <h1>Bienvenu {username}</h1>
            <h2>ton email est {email}</h2>
           </>
           :
           <div>
            <h1>Tu n'es pas connecter</h1>
            <Link to={'/'}>go to home</Link>
           </div>
        }
        
    </div>
  )
}

export default Exo2
