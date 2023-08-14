import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"


const ProductDetail = ()=> {
    const context = useContext(ShoppingCartContext)
    
    const addProductsToCart = (productData) =>{
      context.setCount(context.count +1)
      context.setCartProducts([...context.cartProducts, productData])
      console.log('CART:', context.cartProducts);
  }
  console.log(context.productToShow);
        return (
          <aside className={`${context.isPDOpen? 'flex flex-col' : 'hidden'} fixed right-0 z-40 w-1/3 p-1 text-white shadow-md h-[calc(100vh-80px)] rounded-l-3xl bg-black/90 top-20`}>
             <span  
             onClick={()=> context.closePD()}
             className="absolute m-4 rounded-full cursor-pointer text-black/60 bg-white/30"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </span>
            <img 
            src={context.productToShow.images[0]}  
            className="object-cover w-full p-2 mb-4 h-3/5 rounded-3xl" 
            alt={context.productToShow.title}
            />
            <div className="flex flex-row justify-around gap-2 m-2">
            
              <span className="flex justify-center w-4/5 px-2 rounded-lg bg-white/20">{context.productToShow.title} </span>
              <span className="flex items-center justify-center w-1/5 px-2 rounded-lg bg-white/20">${context.productToShow.price}</span>
          
            </div>
            <div className="flex flex-col items-center gap-4 pl-2 pr-2 mx-6 my-8">
              <p className="mb-20">
              <span>${context.productToShow.description} </span>
              </p>
              <button onClick={()=> addProductsToCart()} className="absolute w-3/4 bg-blue-500 rounded-lg h-14 bottom-10 ">
               Add to cart
              </button>
            </div>
          </aside>
        )}
    
    export default ProductDetail