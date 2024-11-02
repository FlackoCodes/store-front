import { useSelector } from "react-redux"
import { RootState } from "../store/store";
import ShoppingCart from "../components/Cart/ShoppingCart";


export default function Cart() {

    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <div>
            {cart.length ? <ShoppingCart /> :
                <div>Your Cart is empty</div>
            }
        </div>)
};
