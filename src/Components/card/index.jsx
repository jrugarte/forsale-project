import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openPD();
    context.setProductToShow(productDetail);
    context.isMyCartOpen ? context.closeMyCart(productDetail) : "";
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    console.log("show:", context.cartProducts);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product && product?.id === id)
        .length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 mt-2 mr-2 rounded-full cursor-default bg-black/50 text-white/40">
          <AiOutlineCheckCircle className="w-full h-full" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 mt-2 mr-2 rounded-full bg-white/50 text-black/40 hover:bg-black hover:text-[#1BF5AF]/70"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
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
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <div
      className="w-60 rounded-lg cursor-pointer h-[300px] bg-[#4F7097] hover:bg-[#1BF5AF]/50"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative w-full mb-2 h-[250px]">
        <span className="absolute pl-1 pr-1 mb-2 ml-2 rounded-md bg-white/80 bottom-2 left-2 text-black/60">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt=""
          className="object-cover w-full h-full p-2 rounded-2xl"
        />

        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between m-2">
        <span className="text-sm font-light truncate w-36">
          {data.data.title}
        </span>
        <span className="text-lg font-semibold">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
