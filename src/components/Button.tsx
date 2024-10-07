import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice/cartSlice";
import { RootState } from "../store/store";
// import { data } from "../data";

interface ButtonProps {
  className?: string,
  product: {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
  };
}


export default function Button({ className, product }: ButtonProps) {
  console.log(product);
  
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);
  console.log(total);

  const dispatch = useDispatch()

  const isInCart = cart.some((item) => item.id === product.id);
  console.log(product);

  const addProductToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product))
      console.log('product', product);
      console.log(total);
      console.log('cart', cart);
    }
    console.log(product);
    console.log(isInCart);

  }

  return (
    <button
      className={`bg-[#C3E3F1] capitalize border-none rounded-md text-[#3084A9] py-1 px-3 ${className}`}
      onClick={addProductToCart}
    >
      {isInCart ? "In Cart" : "Add to Cart"}
    </button>
  );
}