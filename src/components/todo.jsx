
import './App.css';
import {useState,useEffect} from "react";

function Todo() {
  
const [data,setData]= useState([]);

useEffect(()=>{

//USING .then

// fetch("http://localhost:3001/todos").then((d)=>d.json()).then((res)=>{
//   setData(res);
// })


//USING ASYNC
async function getdata()
{const info=await fetch("http://localhost:3001/todos");
const temp= await info.json();
setData(temp)}

getdata();

},[])



  
  
  
  return (
    <div className="App">
      <h1>hello useeffect</h1>
      <div>{data.map((e)=>(
        <div key={e.id}>{e.title}</div>
      ))}</div>


    </div>
  );
}

export  {Todo};
