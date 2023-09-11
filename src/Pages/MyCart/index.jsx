import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import MyCartLayout from "../../Components/cart/mycart-layout";
import { totalPrice } from "../../utils";

const MyCart = (data) => {
  const context = useContext(ShoppingCartContext);
  const showProduct = (productDetail) => {
    !context.isMyCartOpen
      ? context.openMyCart(productDetail)
      : context.closeMyCart(productDetail);
  };

  // const handleMessage = () => {
  //   if (context.isMessageOpen) {
  //     return (
  //       <div>
  //         <MessageCard />;
  //       </div>
  //     );
  //     // context.openMessage(message);
  //   }
  const isInCart = context.cartProducts.length == 0;
  // Lo que hace la siguiente funcion es agregar los productos que tenia en el carrito a una compra:
  // Por ende le da valores a esa compra como la fecha en la que se hace, los productos que tiene, la cantidad de productos y el precio final de la compra:
  const handleCheckout = () => {
    const date = new Date();
    if (isInCart) {
      alert("Por favor agregue items al carrito antes de hacer el checkout.");
    } else {
      const orderToAdd = {
        date: "📆" + date.toLocaleDateString(),
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts),
        id: context.orderNumber,
      };
      // aca seteamos el order, diciendole que ahora va a ser lo que tenia en la order anteriormente y agregandole lo que esté en orderToAdd:
      context.setOrder([...context.order, orderToAdd]);
      // aca volvemos a vaciar el carrito, vaciar el buscador y poner el contador en cero:
      context.setSearchByTitle(null);
      context.setCartProducts([]);
      context.setCount(0);
      context.setOrderNumber((context.orderNumber += 1));
      context.setOrderCount((context.orderCount += 1));
      context.showMessage();
    }
  };

  return (
    <aside
      className={`${
        context.isMyCartOpen ? "flex flex-col" : "hidden"
      }  transition-all fixed right-0 z-30 w-96 p-1 text-black shadow-md h-[calc(80vh-80px)] rounded-bl-3xl bg-[#93A7D1] top-11`}
    >
      <div className="border border-t-0 border-l-0 border-r-0 border-black border-b-1">
        <p className="px-4 py-2 text-xl font-medium text-black ">My Cart:</p>
        <span
          onClick={() => showProduct(data.data)}
          className="absolute rounded-full cursor-pointer right-3 top-3 border-[#1BF5AF]/70 text-[#1BF5AF]/70 hover:text-black hover:bg-[#1BF5AF]/70"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>

      <div className="flex flex-col justify-between overflow-y-scroll h-4/5">
        <div className="flex flex-col">
          {isInCart ? (
            <span className="px-4 py-2 text-lg text-[#1BF5AF]">
              No items added.{" "}
            </span>
          ) : (
            context.cartProducts.map((product) => (
              <MyCartLayout
                className="h-full-[]"
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            ))
          )}
        </div>
        <div className="absolute bottom-0 flex flex-col w-full px-4 py-3 text-xl font-medium border border-t-2 border-b-0 border-l-0 border-r-0 border-black text-black/70">
          <p className="flex justify-between w-full">
            <span>Total price:</span>
            <span>${totalPrice(context.cartProducts)}</span>
          </p>
          <div className="flex justify-center align-middle">
            <button
              onClick={() => handleCheckout()}
              className="w-1/3 text-base font-light rounded-lg h-10 text-[#1BF5AF]/70 bg-black/90 hover:border border-[#1BF5AF]/70"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MyCart;

// para usar al hacer click fuera de algo y que se cierre:
// const clickOutsideHandler = event => {
//   if (dropdownListRef.current) {
//     if (
//       dropdownListRef.current.contains(event.target) ||
//       activatorRef.current.contains(event.target)
//     ) {
//       return;
//     }

//     setIsOpen(false);
//   }
// };
