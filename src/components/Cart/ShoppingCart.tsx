import { useSelector } from "react-redux"
import { RootState } from "../../store/store"



export default function ShoppingCart() {

    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <>
            <div className="bg-white shadow-md p-1.5">
                <div className="border- border-b-gray-400 py-2">
                    <h3>ShoppingCart</h3>
                </div>
            </div>
        </>
    )
}
