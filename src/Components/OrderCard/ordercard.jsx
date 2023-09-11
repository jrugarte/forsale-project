import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const OrderCard = ({ order }) => {
  const context = useContext(ShoppingCartContext);
  const { id, date, products, totalPrice, totalProducts } = order;

  const deleteOrderItem = (id) => {
    context.setOrderCount(context.orderCount - 1);
    const updatedOrder = [...context.order];
    const orderIndex = updatedOrder.findIndex((order) => order.id === id);
    updatedOrder.splice(orderIndex, 1);
    context.setOrder(updatedOrder);
    console.log("updatedOrder:", updatedOrder, "orderIndex", orderIndex);
  };

  const isAnOrder = context.order.length != 0;

  if (!isAnOrder) {
    return (
      <div className="fixed flex flex-col items-center justify-center w-full gap-8 top-40 hover:w-">
        <h1 className="text-xl font-semibold">
          ¡No hay ordenes creadas por el momento!
        </h1>
        <div className="flex items-center h-full ">
          <NavLink to="/">
            <button className="w-40 h-10 text-base font-sm rounded-lg text-black bg-[#1BF5AF]/70">
              Ir al inicio
            </button>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-between p-4 text-white rounded-lg bg-[#4F7097] h-80 w-80">
        <div className="flex items-center justify-between">
          <p className="text-black/70">{date}</p>
          <div
            className="relative top-0 left-0 flex items-center text-lg font-extralight justify-center w-5 h-5 rounded-full cursor-pointer border border-[#1BF5AF] text-[#1BF5AF]/70 hover:text-black hover:bg-[#1BF5AF]/70"
            onClick={() => deleteOrderItem(order.id)}
          >
            <MdDeleteOutline className="w-4 h-4 cursor-pointer font-extralight" />
          </div>
        </div>

        <div className="flex flex-col justify-between overflow-y-scroll text-[#BEF2FF] rounded-lg">
          <div className="flex flex-col">
            <div key={order.id}>
              <h2 className="font-semibold text-black">Order #{order.id}</h2>
              <div className="font-light">
                {products.map((product) => (
                  <div
                    className="flex justify-between w-full gap-2 p-2"
                    key={product.id}
                  >
                    <img
                      className="object-cover w-12 h-12 rounded-lg"
                      src={product.image}
                      alt="imagen"
                    />
                    <div className="w-40 truncate">
                      <p>{product.title}</p>
                    </div>
                    <div className="flex justify-end w-14">
                      <p>${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between w-full mt-4 mb-2 border border-[#BEF2FF] border-b-0 border-l-0 border-r-0 border-t-1">
            <p className="font-light text-black">Total products:</p>
            <p className="font-semibold text-[#1BF5AF]/70">{totalProducts}</p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <p className="flex w-full font-light text-black">Total: </p>
          <div className="font-semibold text-[#1BF5AF]/70">
            <p>${totalPrice}</p>
          </div>
        </div>
        <span className="flex items-center justify-around">
          <button className="w-1/3 border border-[#1BF5AF]/70 text-[#1BF5AF]/70 rounded-lg font-light hover:text-black hover:bg-[#1BF5AF]/70">
            Edit order
          </button>
          <button className="w-1/3 text-[#1BF5AF]/70 bg-black/90 rounded-lg font-light hover:border border-[#1BF5AF]/70">
            Pay
          </button>
        </span>
      </div>
    );
  }
};

export default OrderCard;
