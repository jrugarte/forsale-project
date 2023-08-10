import { NavLink } from "react-router-dom"
import {useContext} from "react"
import {ShoppingCartContext} from "../../Context"


const Navbar = ()=> {
    const context = useContext(ShoppingCartContext)
    const textDecoration = 'underline underline-offset-4'
    return (
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 font-sans text-sm font-superlight">
            <ul className="flex items-center gap-3">
                <li className="text-lg font-semibold text-yellow-700">
                     <NavLink
                            to="/"
                
                            >
                        FOR Sale
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        All
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/clothes"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        Clothes
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/electronics"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        Electronics
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/furniture"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        Furniture
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/toys"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        Toys
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/others"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex justify-between gap-3">
                <li>
                     <NavLink  className={'text-black/50'}>
                        jotarider@gmail.com
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/orders"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        My orders
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/my-account"
                            className={({ isActive }) =>
                            isActive ? textDecoration : ""
                         }
                            >
                        My account
                    </NavLink>
                </li>
                <li>
                     <NavLink
                            to="/sign-in"
                            >
                        Sign In
                    </NavLink>
                </li>
                <li>
                     <NavLink
                      className="flex flex-row"
                            to="/my-order"
                            >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg> {context.count}
                    </NavLink>
                </li>
            </ul>
       
        </nav>
        
     )
  }
  
  export default Navbar
  