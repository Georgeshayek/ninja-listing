"use client"
import { useState, useEffect } from 'react';
import styles from "../NInja.module.css"
import Link from 'next/link';
export default function Ninjas(){

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const ninjas = await response.json();
      setData(ninjas);
    };

    fetchData();
  }, []);
    return(
    <div>
    <h1>ninjas</h1>
    {data.map(ninja=>(
        <Link href={`/ninjas/${ninja.id}`} className={styles.single} key={ninja.id}>
            <h3>{ninja.name}</h3>
        </Link>
    ))}
    </div>)
}