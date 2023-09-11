import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const MessageCard = () => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    !context.isMyCartOpen
      ? context.openMyCart(productDetail)
      : context.closeMyCart(productDetail);
    context.hideMessage();
    context.setSearchByTitle(null);
  };

  return (
    <div className="absolute z-20 flex items-center justify-center flex-1 h-40 align-middle rounded-lg right-1/3 top-1/3 w-100 bg-[#4F7097]">
      <div className="z-30 flex flex-col items-center justify-center h-40 p-2 rounded-lg w-100 align-center">
        <div className="flex justify-center mb-4 text-black">
          <p>¡Orden creada satisfactoriamente!</p>
        </div>
        <div>
          <Link to="/orders">
            <button
              className="w-40 p-1 m-1 border text-[#1BF5AF] border-[#1BF5AF]/70 rounded-md hover:text-black hover:bg-[#1BF5AF]/70"
              onClick={() => showProduct()}
            >
              Ir a Mis Ordenes
            </button>
          </Link>
          <Link to="/">
            <button
              className="w-40 p-1 m-1 text-[#1BF5AF]/70 bg-black/90  rounded-md hover:border border-[#1BF5AF]/70"
              onClick={() => showProduct()}
            >
              Seguir Comprando
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
