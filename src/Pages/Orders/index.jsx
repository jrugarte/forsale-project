import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
// import { useEffect, useState } from "react";
import OrderCard from "../../Components/OrderCard/ordercard";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function Orders() {
  const context = useContext(ShoppingCartContext);
  const isAnOrder = context.order.length == 0;

  const closeProduct = (productDetail) => {
    if (context.isMyCartOpen || context.isPDOpen) {
      context.closeMyCart(productDetail);
      context.closePD(productDetail);
    }
  };
  if (isAnOrder) {
    return (
      <div className="absolute flex flex-col items-center justify-center w-full gap-8 top-40">
        <h1 className="text-xl">No hay ordenes creadas por el momento.</h1>
        <div className="flex items-center h-full ">
          <Link to="/">
            <button
              onClick={() => closeProduct()}
              className="w-40 h-10 text-base font-sm rounded-lg text-black border-2 border-[#1BF5AF]/70 hover:bg-[#1BF5AF]/70"
            >
              Ir al inicio
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="fixed left-10 top-20" onClick={() => closeProduct()}>
          <Link to="/" className="flex items-center">
            <MdOutlineArrowBackIosNew />
            <HiHome className="w-10 h-8" />
          </Link>
        </div>
        <div className="absolute grid grid-flow-col grid-rows-2 gap-4 pr-10 top-40 left-10">
          {context.order.map((order, index) => (
            <OrderCard
              key={index}
              order={order}
              index={context.order.index}
              id={context.order.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Orders;
