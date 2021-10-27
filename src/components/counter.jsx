import {useState,useEffect} from "react";

function Counter()
{
    const [count,setCount]= useState(10);


    useEffect(()=>{
        const id=setInterval(()=>{
            setCount((prev)=>{
                if(prev=== 0)
                {
                    clearInterval(id)
                    return 0;
                }
                return (prev-1)
            })
        },1000)


        return (()=>
        clearInterval(id))
    },[])



    return (
        <div>{count}</div>
    )
}


export {Counter}