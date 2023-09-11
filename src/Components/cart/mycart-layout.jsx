import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const MyCartLayout = (props) => {
  const { title, imageUrl, price } = props;
  const context = useContext(ShoppingCartContext);

  const deleteItem = (index) => {
    context.setCount(context.count - 1);

    const updatedItems = [...context.cartProducts];
    updatedItems.splice(index, 1);
    context.setCartProducts(updatedItems);
  };

  return (
    <div className="flex justify-around h-full gap-2 p-2 border border-t-0 border-l-0 border-r-0 border-white/30 border-b-1">
      <figure className="w-16 h-16">
        <img
          src={imageUrl}
          className="object-cover w-full h-full rounded-xl"
          alt={title}
        />
      </figure>
      <span className="flex items-center justify-start w-4/5 h-16 px-2 truncate rounded-lg">
        {title}
      </span>
      <span className="flex items-center justify-center w-1/5 h-16 px-2 rounded-lg">
        ${price}
      </span>
      <span>
        <span
          onClick={() => deleteItem()}
          className="static flex items-center justify-center w-5 h-5 rounded-full cursor-pointer top-3 text-[#1BF5AF]/70  border border-[#1BF5AF]/70 
          hover:text-black hover:bg-[#1BF5AF]/70"
        >
          <MdDeleteOutline className="w-4 h-4 cursor-pointer font-extralight" />
        </span>
      </span>
    </div>
  );
};
export default MyCartLayout;
