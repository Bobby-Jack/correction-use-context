import { createContext, useState } from "react";

//mon context
const myContext = createContext({
    theme: '',
    username: '',
    email: '',
    tasks: [],
    current_page : 1,
    nbr_product_by_page: 10,
    changerPage: ()=>{},
    changerTheme: ()=>{},
    changerUsername: ()=>{},
    changerEmail: ()=>{},
    changerTask: ()=>{},
    connected: false,
    changeConnected: ()=>{}
})




export default myContext

//mon component Provider
function MyContextProvider({children}) {
    const [themeState, setThemeState] = useState("dark")
    const [userNameState, setUserNameState] = useState("")
    const [emailState, setEmailState] = useState("")
    const [currentPageState, setcurrentPageState] = useState(1)
    const [tasksState, setTasksState] = useState([
        { value: "manger des frites", finished: false},
        { value: "coder", finished: false},
        { value: "dormir debout", finished: true},
    ])
    const [connectedState, setConnectedState] = useState(false)

    const handleTheme = ()=>{
        if (themeState == 'dark') {
            setThemeState('light')
        }else{
            setThemeState('dark')
        }
    }

    const handleConnexion = ()=>{
        if (emailState == "" || userNameState == "") {
            alert("champs invalides")
        }else{
            setConnectedState(true)
        }
    }

    const handleTask = (index)=>{
        setTasksState((previousState)=>{
            return previousState.map((task, id)=>{
                if (index === id) {
                    return {...task, finished: !task.finished}
                }else{
                   return {...task}
                }
            })
        })
    }

    return (
        <myContext.Provider value={
            {theme: themeState,
            changerTheme:handleTheme,
            username:userNameState,
            changerUsername: setUserNameState,
            email: emailState,
            changerEmail: setEmailState,
            tasks: tasksState,
            changerTask: handleTask,
            current_page: currentPageState,
            nbr_product_by_page: 10,
            changerPage: setcurrentPageState,
            connected: connectedState,
            changeConnected: handleConnexion
            }}>
            {children}
        </myContext.Provider>
    )
}

export {MyContextProvider}

