import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){ 
const [bardata,setBardata] = useState([]);
    async function fetchbardata (){
       try {
        const result = await fetch('http://localhost:4000/api/v1/allbardata');
        const response  = await result.json();
        setBardata(response);
       } catch (error) {
        console.log("Error in fetching data");
        setBardata([]);
       }
   }
   const value = {bardata,setBardata,fetchbardata};

   return <AppContext.Provider value={value} >
    {children}
   </AppContext.Provider>
}
