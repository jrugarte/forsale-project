import { createContext, useState } from "react"
import PropTypes from 'prop-types';


export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children})=>{
    const [count, setCount] = useState(0)
    const [isPDOpen, setIsPDOpen] = useState(false)
    const openPD = () => setIsPDOpen(true)
    const closePD = () => setIsPDOpen(false)
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      });
    const [cartProducts, setCartProducts] = useState({})


    return (
        
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openPD,
            closePD,
            isPDOpen,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };