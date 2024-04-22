import {useState,useEffect,createContext} from 'react';
import {TodoType} from "./types/Plus"
import axios from "axios"

type ContextType = {
  data: TodoType[];
};
export const General = createContext<ContextType | undefined>(undefined);
export const GlobalVeri=(props: { children: React.ReactNode })=>{
    const [data,setData]=useState<TodoType[]>([]);
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  
          setData(response.data.slice(0,5));
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    return(
      <General.Provider value={{data}}>
       {props.children}
      </General.Provider>
    )
}