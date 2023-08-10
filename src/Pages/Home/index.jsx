import { useState, useEffect } from "react";
import Layout from "../../Components/layout";
import Card from "../../Components/card";

function Home() {
    // usamos el useState para traer los valores de la api y luego setearlos:
    const [items, setItems] = useState(null)
    // useEffect para consumir la api:
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data=> setItems(data))
    },[]) 
    return (
        <Layout>
            Home
            <div className="grid grid-rows-3 grid-flow-col gap-4 absolute top-20 left-10 pr-10">

            {
               items?.map(item=>(
                <Card key={item.id} data={item}/> 
               )) 

            }
            </div>
        </Layout>
     )
  }
  
  export default Home
  