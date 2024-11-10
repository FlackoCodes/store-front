import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Link } from "react-router-dom"
import { clearCart, deleteItem } from "../../store/cartSlice/cartSlice"
export default function ShoppingCart() {

    const cart = useSelector((state: RootState) => state.cart.cart)
    const dispatch = useDispatch()

    const handleDelete = (item: any) => {
        dispatch(deleteItem(item))
    }

    return (
        <>
            <div className="w-[98%] my-0 mx-auto">
                <div className="bg-white  m-2 grid grid-cols-[80%_20%] gap-4">
                    <div>
                        <div className="shadow-md  p-2 border-b">
                            <div className="flex justify-between items-center my-2 border-b py-2 px-4">
                                <h3 className="font-bold text-lg text-black">ShoppingCart</h3>
                                <span className="font-bold text-lg text-[#1F252C]">Price (GHS)</span>
                            </div>
                            <div>
                                {
                                    cart.map((item, index) => <div key={index}>
                                        <div className="flex justify-between items-center border-b py-2 px-4">
                                            <div className="flex items-center gap-2">
                                                <img src={item.image} alt="" className="w-10" />
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[#3084A9]">{item.name}</p>
                                                    {item.description && <p>{item.description}</p>}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <span className="text-[#1F252C]">{item.price}</span>
                                                <button type="button" className="bg-red-500 rounded-md py-1 px-2 text-yellow-300 text-base" onClick={() => handleDelete(item)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md p-2">
                        <div className="flex flex-col gap-4">
                            <h3>Subtotal  ({cart.length} items): </h3>
                            <Link to={"/checkout"} className="bg-yellow-400 rounded-full text-center py-1.5 px-0.5">
                                Proceed to payment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
