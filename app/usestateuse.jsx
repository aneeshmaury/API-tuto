"use client"
import React, { useState } from 'react';

function UseStatefun(){
const [count, setcount] = useState(0)

function increament(){
    setcount(count+1)
     
    
}
function decreament(){
   setcount(count-1)
   
}


    return(
    <section>

 <h1>{count}</h1>
        <button className="bg-black text-white py-2 px-9 rounded-sm " onClick={increament}>increament</button>
    <button className="bg-black text-white py-2 px-9 rounded-sm " onClick={decreament}>Decreament</button>
    </section>

       
     
    )


}
export default UseStatefun;