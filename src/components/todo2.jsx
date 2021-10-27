import { useEffect, useState } from "react";

function Todo2(){


    const [data,setData]= useState([])
    const [text,setText]= useState("")
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(true);

    useEffect(()=>{getTodo()},[page])

    const getTodo =()=>{

         fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`).then((d)=>d.json()).then ((res)=>setData(res)).then(()=>setLoading(false));
    }

    const handleChange =(e)=>{

       setText(e.target.value)

    }

    const  addTodo =()=>{

        fetch("http://localhost:3001/todos",{
            method:"POST",
            body:JSON.stringify({
                title:text,
                status:false
            }),
            headers:{
                "Content-Type":"application/json",
            }
        }).then(getTodo)
    }

    return loading ?(<h1>loading</h1>): (
        <div>
            <input placeholder="ENTER YOUR TODO" onChange={handleChange}></input>
            
            <button onClick={addTodo}>ADD TODO</button>

            {data.map((e)=><div>{e.title}</div>)}

            <div>
                <button onClick={()=>{
                    setPage(page-1)
                }}>Prev</button>
                <button onClick={()=>{
                    console.log("clicked")
                    setPage(page+1)
                }}>Next</button>
            </div>
        </div>
    )


}


export {Todo2}