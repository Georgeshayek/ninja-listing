"use client"
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const NotFoundPage=()=>{
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])
    return(
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2> That page cannot be found</h2>
           <p> go back to <Link className="notfoundlink"href="/">HomePage</Link></p> 
        </div>
    );
}
export default NotFoundPage;