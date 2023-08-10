import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"

const ProductDetail = ()=> {
    const context = useContext(ShoppingCartContext)
    
        return (
          <aside className="absolute right-0 z-10 h-full p-1 w-80 top-20">
            {/* <div>
             <span></span>
            </div> */}
             <span  className="absolute pl-1.5 pr-1.5 m-1 rounded-full bg-stone-500"> X </span>
            <img src="https://images.pexels.com/photos/6106880/pexels-photo-6106880.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
            <div className="flex flex-row justify-around gap-2">
            <p>$25000</p> <p>ssdf</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, ipsa
                asperiores ipsum nobis consectetur cum pariatur ad, quas ut
                recusandae, blanditiis nihil esse repellat impedit. Animi ratione
                fugiat laboriosam aspernatur.     Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, ipsa
                asperiores ipsum nobis consectetur cum pariatur ad, quas ut
                recusandae, blanditiis nihil esse repellat impedit. Animi ratione
                fugiat laboriosam aspernatur.     
              </p>
              <button onClick={()=> context.setCount(context.count +1)} className="w-3/4 h-10 bg-blue-500 rounded-md">
               Add to cart
              </button>
            </div>
          </aside>
        )}
    
    export default ProductDetail