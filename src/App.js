
import './App.css';
import {useState,useEffect} from "react";
import {Todo2} from "./components/todo2"


// import {Counter} from "./components/counter"

function App() {
  


const [show,setShow]= useState(true);
  
  
  
  return (
    <div className="App">
  {/* <h1>Hello app</h1>

  {show ?(
    <div><Counter/> <button onClick={()=>{
      setShow(false)
    }}>Hide</button></div>
  ):(
    <button onClick={()=>{
      setShow(true)
    }}>Show</button>
  )} */}

  <h1>Hello Todo2</h1>
    <Todo2/>
    </div>
  );
}

export default App;
