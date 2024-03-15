import { useContext } from "react";
import NavBar from "./NavBar";
import myContext from "../contexts/MyContext";

function Exo3(){
    const {tasks, changerTask} = useContext(myContext)
  return(
    <div>
        <NavBar/>
        <h1>TODO LIST</h1>
        <ul>
            {tasks.map((element, index)=>{
               return <li>
                        <span >{element.value}</span>
                        <input onClick={()=>{changerTask(index)}} type="checkbox" checked={element.finished} />
               </li>
            })}
        </ul>
    </div>
  )
}

export default Exo3