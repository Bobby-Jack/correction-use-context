import { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import myContext from "../contexts/MyContext";

function Exo4(){
    const [data, setData] = useState(null)
    const {current_page, changerPage, nbr_product_by_page} = useContext(myContext)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res)=>{setData(res)});
    }, [])
    
  return(
    <div>
        <NavBar/>
        <h1>Product List</h1>
        <div>
            {
                data == null ?
                <h2>Loading...</h2>
                :
                data.products.map((element, index)=>{
                    if(index>=(current_page-1)*nbr_product_by_page && index < nbr_product_by_page*current_page){
                        return <img src={element.images[0]}/>
                    }
                })
            }
        </div>
        {
            current_page == 1 ?
            ""
            :
            <button onClick={()=>{changerPage(current_page-1)}}>previous page</button>
        }
        <button>{current_page}</button>
        {
            data == null ? "" :
            data.products[nbr_product_by_page*current_page] ? 
            <button onClick={()=>{changerPage(current_page+1)}}>next page</button>
            :
            ""
        }
       
    </div>
  )
}

export default Exo4