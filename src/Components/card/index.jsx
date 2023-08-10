import {useContext} from "react"
import {ShoppingCartContext} from "../../Context"

const Card = (data)=> {
const context = useContext(ShoppingCartContext)

    return (
    <div className="w-56 bg-white cursor-pointer h-60">
        <figure className="relative w-full mb-2 h-4/5">
            <span className="absolute bottom-0 left-0 pl-1 pr-1 mb-2 ml-2 rounded-md text-black/60 bg-white/30">{data.data.category.name}</span>
            <img src={data.data.images[0]} alt="" className="object-cover w-full h-full rounded-lg"/>
            <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 mt-2 mr-2 rounded-full text-black/40" 
            onClick={() => context.setCount(context.count +1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </figure>
        <p className="flex justify-between m-2">
            <span className="text-sm font-light">{data.data.title}</span>
            <span className="text-lg font-semibold">${data.data.price}</span>
        </p>
      </div>
    )}

export default Card