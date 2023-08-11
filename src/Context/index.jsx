import { createContext, useState } from "react"
import PropTypes from 'prop-types';


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{
    // Shopping Cart ~ Add items
    const [count, setCount] = useState(0)

    // Product Detail ~ Open/Close
    const [isPDOpen, setIsPDOpen] = useState(false)
    const openPD = () => setIsPDOpen(true)
    const closePD = () => setIsPDOpen(false)

    // Product Detail ~ Show Product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openPD,
            closePD,
            isPDOpen,
            productToShow, 
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };