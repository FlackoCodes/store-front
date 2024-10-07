/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice/cartSlice";
import { RootState } from "../store/store";
import { data } from "../data";

export default function Button({ className }) {

  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);
  console.log(total);

  const dispatch = useDispatch()

  const isInCart = cart.some((item) => item.id === data.id);


  const addProductToCart = () => {
    dispatch(addToCart()
    )
    console.log(total);
  }

  return (
    <button
      className={`bg-[#C3E3F1] capitalize border-none rounded-md text-[#3084A9] py-1 px-3 ${className}`}
      onClick={addProductToCart}
    >
      add to cart
    </button>
  );
}