import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Navbar = (data) => {
  const context = useContext(ShoppingCartContext);
  const textDecoration = "underline underline-offset-4";

  const showProduct = (productDetail) => {
    !context.isMyCartOpen
      ? context.openMyCart(productDetail)
      : context.closeMyCart(productDetail);
  };
  const hideAndFilter = (productDetail) => {
    if (context.isMyCartOpen || context.isPDOpen) {
      context.closeMyCart(productDetail);
      context.closePD(productDetail);
    }
  };
  const currentPath = window.location.pathname;
  const hideSearchBar = () => {
    if (
      currentPath === "/orders" ||
      currentPath === "/my-account" ||
      currentPath === "/sign-in"
    ) {
      return "";
    } else {
      return (
        <div className="w-80">
          <input
            placeholder="Search products..."
            className="border border-[#4F7097] bg-transparent rounded-lg w-full p-1 placeholder-black/70 focus:outline-none"
            onChange={(event) => {
              context.setSearchByTitle(event.target.value);
            }}
          />{" "}
        </div>
      );
    }
  };

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 font-sans text-sm bg-[#93A7D1] font-superlight">
      <ul className="flex items-center gap-3">
        <li
          onClick={() => context.setSearchByCategory("")}
          className="text-lg font-semibold text-[#1BF5AF]"
        >
          <NavLink
            to="/"
            onClick={() => {
              hideAndFilter();
            }}
          >
            FOR Sale
          </NavLink>
        </li>
        <li onClick={() => context.setSearchByCategory("")}>
          <NavLink
            to="/"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            All
          </NavLink>
        </li>
        <li onClick={() => context.setSearchByCategory("clothes")}>
          <NavLink
            to="/clothes"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            Clothes
          </NavLink>
        </li>
        <li onClick={() => context.setSearchByCategory("electronics")}>
          <NavLink
            to="/electronics"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            Electronics
          </NavLink>
        </li>
        <li onClick={() => context.setSearchByCategory("furniture")}>
          <NavLink
            to="/furniture"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            Furniture
          </NavLink>
        </li>
        <li onClick={() => context.setSearchByCategory("toys")}>
          <NavLink
            to="/toys"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            Toys
          </NavLink>
        </li>
        <li onClick={() => context.setSearchByCategory("others")}>
          <NavLink
            to="/others"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <div>{hideSearchBar()}</div>

      <ul className="flex justify-between gap-3">
        <li>
          <NavLink className={"text-black/50"}>jotarider@gmail.com</NavLink>
        </li>
        <li className="flex gap-1 w-30">
          <NavLink
            to="/orders"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            My orders
          </NavLink>
          <div className="text-[#1BF5AF] w-1 h-1 flex justify-center text-xs align-center">
            {context.orderCount == 0 ? "" : context.orderCount}
          </div>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={`${({ isActive }) =>
              isActive ? textDecoration : ""} hover:${textDecoration}`}
            onClick={() => hideAndFilter()}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={`hover:text-[#1BF5AF]`}>
            Sign In
          </NavLink>
        </li>
        <li>
          <span
            onClick={() => showProduct(data.data)}
            className="flex flex-row w-10 gap-1 transition-all cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#1BF5AF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>{" "}
            {context.count == 0 ? "" : context.count}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
