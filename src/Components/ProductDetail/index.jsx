import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  const product = context.productToShow;

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  };

  const renderButton = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (!isInCart) {
      return (
        <button
          onClick={(event) => addProductsToCart(event, product)}
          className="absolute w-3/4 bg-[#1BF5AF]/70 text-black rounded-lg h-14 bottom-10 hover:bg-black border border-[#1BF5AF] hover:text-[#1BF5AF]"
        >
          Add to cart
        </button>
      );
    } else {
      return (
        <button className="absolute w-3/4 bg-gray-500 text-[#1BF5AF] rounded-lg cursor-default disabled h-14 bottom-10">
          Added
        </button>
      );
    }
  };

  return (
    <aside
      className={`${
        context.isPDOpen ? "flex flex-col" : "hidden"
      } fixed right-0 z-20 w-[400px] p-1 text-white shadow-md h-[752px] rounded-l-3xl bg-black/90 top-20`}
    >
      <p className="px-4 py-2 text-xl font-medium text-[#BEF2FF]">Detalles:</p>
      <span
        onClick={() => context.closePD()}
        className="absolute m-4 rounded-full cursor-pointer mt-14 border-[#1BF5AF]/70 bg-black text-[#1BF5AF]/70 hover:text-black hover:bg-[#1BF5AF]/70"
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
      <img
        // aca
        src={context.productToShow.image}
        className="object-cover w-full p-2 mb-4 h-3/5 rounded-3xl"
        alt={context.productToShow.title}
      />
      <div className="flex flex-row justify-around gap-2 m-2">
        <span className="flex justify-center w-4/5 px-2 rounded-lg bg-white/20">
          {context.productToShow.title}{" "}
        </span>
        <span className="flex items-center justify-center w-1/5 px-2 rounded-lg bg-white/20">
          ${context.productToShow.price}
        </span>
      </div>
      <div className="flex flex-col items-center gap-4 m-2 mb-8">
        <p className="h-40 p-1 mb-20 overflow-scroll border rounded-lg border-white/50">
          <span>${context.productToShow.description}</span>
        </p>

        {renderButton(product.id)}
      </div>
    </aside>
  );
};

export default ProductDetail;
