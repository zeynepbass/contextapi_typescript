import Data from "./Data"
import {useState} from "react"
import {GlobalVeri} from "./GlobalState"
import Veri from "./Veri"
function App() {
  const [data,setData]=useState<number>(0)
 const arttir=()=>{

  setData(prevSayi => prevSayi + 1)
  if(data===10){
     alert("data")

  }

 }
  return ( 
    <div className="App" >
      <h1>{data} </h1>
      <button onClick={arttir}>tıkla</button>
      <Veri  userArray={["ali","ayse","fatma"]}/>
      <GlobalVeri>
      <Data/>
      </GlobalVeri>

    </div>
  );
}

export default App;
