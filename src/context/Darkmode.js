import { createContext,useContext, useState } from "react";

const Context=createContext();

const ContextProvider=({children})=>{
    const [dark,setdark]=useState(false);
    return(
        <Context.Provider value={{dark,setdark}}>
            {children}
        </Context.Provider>
    )
}
const useDark=()=>useContext(Context)
export {useDark,ContextProvider}