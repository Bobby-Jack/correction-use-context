import { useContext } from "react"
import NavBar from "./NavBar"
import myContext from "../contexts/MyContext"
import { Link, useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()
    const {changerUsername, changerEmail, connected, changeConnected} = useContext(myContext)
    function tryConnection(){
      changeConnected()
      
    }
    
  return(
    <div>
       
        <h1>HOME PAGE</h1>
        <h1>LOGIN</h1>
        <h2>connected : {connected ? 'yes':'no'}</h2>
        {
            connected ? "" : 
            <>
                <label >username</label>
                <input type="text" onChange={(e)=>{changerUsername(e.target.value)}}/>
                <label >email</label>
                <input type="email"  onChange={(e)=>{changerEmail(e.target.value)}}/>
            </>
        }
        
        
        {
           connected ? <button> <Link to={'/exo2'}>go to Exo2</Link></button> : <button onClick={()=>{tryConnection()}}>login</button>
        }
    </div>
  )
}

export default Home