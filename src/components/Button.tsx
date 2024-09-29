/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice/cartSlice";
import { RootState } from "../store/store";


export default function Button({ className }) {

  // const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart);
  console.log(total);

  const dispatch = useDispatch()

  const addProductToCart = () => {
    // dispatch(addToCart()
    // )
    console.log(total);
    console.log('trying cart 1, 2 , 3');
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