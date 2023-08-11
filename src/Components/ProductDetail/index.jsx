import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"


const ProductDetail = ()=> {
    const context = useContext(ShoppingCartContext)
        return (
          <aside className={` ${context.isPDOpen ? 'flex' : 'hidden'} fixed right-0 z-40 w-1/3 p-1 text-white shadow-md h-[calc(100vh-80px)] rounded-l-3xl bg-black/90 top-20`}>
             <span  className="absolute pl-1.5 pr-1.5 m-4 rounded-full bg-white/30"> X </span>
            <img src="https://picsum.photos/640/640?r=3786"  className="object-cover p-2 mb-4 rounded-3xl" alt=""/>
            <div className="flex flex-row justify-around gap-2 mb-8">
            <p>adsas</p> <p>ssdf</p>
            </div>
            <div className="flex flex-col items-center gap-4 pl-2 pr-2">
              <p className="mb-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, ipsa
                asperiores ipsum nobis consectetur cum pariatur ad, quas ut
                recusandae, blanditiis nihil esse repellat impedit. Animi ratione
                fugiat laboriosam aspernatur.  
              </p>
              <button onClick={()=> context.setCount(context.count +1)} className="absolute w-3/4 bg-blue-500 rounded-lg h-14 bottom-10">
               Add to cart
              </button>
            </div>
          </aside>
        )}
    
    export default ProductDetail