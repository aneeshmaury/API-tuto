"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const YourComponent = () => {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        
        setData(response.data);
    })
}, []); 

  return (
    <div>
        {userData.map((data)=>(<>
            <div key={data.title}>{data.title}</div>
                <div key={data.id}>{data.id}</div>
        </>
                
            ))}
    
    </div>
  );
};

export default YourComponent;
