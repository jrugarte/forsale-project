import { NavLink } from "react-router-dom"
import {useContext} from "react"
import {ShoppingCartContext} from "../../Context"


const Navbar = ()=> {
    const context = useContext(ShoppingCartContext)
    const textDecoration = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed w-full px-4 py-2 z-10 top-0 font-superlight font-sans text-sm">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                     <NavLink
                            to="/"
                
                            >
                        YARD Sale
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
                            to="/my-order"
                            >
                        🛒{context.count}
                    </NavLink>
                </li>
            </ul>
       
        </nav>
        
     )
  }
  
  export default Navbar
  