"use client"
import { Noto_Sans_Sinhala } from 'next/font/google';
import { useParams  } from 'next/navigation'
import { useState, useEffect } from 'react';
export const getStaticPaths=async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const paths=data.map(ninja=>{
        return{
            params:{id:ninja.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

  

const Details=()=>{
    const params = useParams ()
    
    const {id}=params
    const [data, setData] = useState();
    

  useEffect(() => {

    if(!id){return}
    const fetchData = async () => {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user=await res.json();
    setData(user);
};

fetchData();
}, [id]);
console.log(data)
    return (
        <div>
            {data&&<><h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.website}</p>
            <p>{data.address.city}</p></> }
            
            {!data&& <p>Loading...</p>}
        </div>
    )
}
export default Details;