import { useState, useEffect } from "react";
import Layout from "../../Components/layout";
import Card from "../../Components/card";
import ProductDetail from "../../Components/ProductDetail";

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
            <div className="absolute grid grid-flow-col grid-rows-3 gap-4 pr-10 top-20 left-10">
            {
                items?.map(item=>(
                <Card key={item.id} data={item}/> 
               )) 
            }
            </div>
            <ProductDetail />
        </Layout>
     )
  }
  
  export default Home
  