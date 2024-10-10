import { useSelector } from "react-redux"
import { RootState } from "../store/store";




export default function Cart() {

    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
