import { useSelector } from "react-redux"
import { RootState } from "../store/store";
import ShoppingCart from "../components/Cart/ShoppingCart";
import SubSellers from "../components/SubSellers";

export default function Cart() {

    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <div>
            {cart.length ? <ShoppingCart /> :
                <div className="">
                    <div>
                        <h1 className="text-3xl font-semibold text-center text-gray-800 my-6">
                            Your cart is empty. <em>what you may like</em>
                        </h1>
                    </div>
                    <div className="w-[85%] my-0 mx-auto">
                        <SubSellers />
                        <SubSellers />
                        <SubSellers />
                        <SubSellers />
                    </div>
                </div>

            }
        </div>)
};
