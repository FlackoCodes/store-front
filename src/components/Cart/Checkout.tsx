import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { useState } from "react";
import { PAYSTACK_API } from "../../constants";
import { PaystackButton } from "react-paystack";



function Checkout() {

    const cart = useSelector((state: RootState) => state.cart.cart)
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, SetAddress] = useState("")



    const totalPrice = cart.reduce(function (prev, next) {
        return prev + next.price;
    }, 0);

    const shipping: number = 50;
    const grandTotal = totalPrice + shipping;
    const amount = grandTotal * 100;


    const componentProps = {
        email,
        amount,
        metaData: {
            name,
            phone
        },
        currency: "GHS",
        publicKey: PAYSTACK_API,
        text: "Continue and Pay",
        onSuccess: () => alert("Thanks, see you again"),
        className: "bg-amber-800 text-white uppercase font-mediumtext- sm py-2 px - 6 roundeds shadow - md transition - all duration - 300ease -in -out hover: bg - amber - 700 hover: shadow - lg focus: outline - nonfocus: ring - 2 focus: ring - amber - 500"
    }


    return (
        <div className="w-[75%] my-0 mx-auto bg-white">
            <div className="grid grid-cols-[65%_35%] gap-2 my-6">
                <div className="py-2 px-4 shadow-lg rounded">
                    <header className="my-8">
                        <h1 className="uppercase text-black font-bold text-lg tracking-tight">checkout</h1>
                    </header>
                    <div>
                        <span className="uppercase tracking-wide font-bold text-base text-orange-300 my-4">billing details</span>
                    </div>
                    <form action="/" className="mt-2">
                        <div className="grid grid-cols-[1fr_1fr] gap-y-4 items-center">
                            <div>
                                <label htmlFor="name" className="block capitalize font-bold my-1">name</label>
                                <input
                                    value={name}
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-[300px]"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block capitalize font-bold my-1">email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 border w-[300px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block capitalize font-bold my-1">name</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone"
                                    className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-[300px]"
                                />
                            </div>
                        </div>
                        <div className="mt-8">
                            <header>
                                <h2 className="uppercase tracking-wide font-bold text-base text-orange-300 my-4">shipping info</h2>
                            </header>
                        </div>
                        <div>
                            <label htmlFor="address" className="block capitalize font-bold my-1">address</label>
                            <input value={address} onChange={(e) => SetAddress(e.target.value)} type="text" placeholder="your adress..." className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-full" />
                        </div>
                        <div className="grid grid-cols-[1fr_1fr] gap-y-4 items-center mt-4">
                            <div>
                                <label htmlFor="zip" className="block capitalize font-bold my-1">zip code</label>
                                <input
                                    type="text"
                                    id="zip"
                                    placeholder="zip code"
                                    className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-[300px]"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block capitalize font-bold my-1">city</label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="Enter your city"
                                    className="px-4 py-2 border w-[300px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block capitalize font-bold my-1">country</label>
                                <input
                                    type="text"
                                    id="country"
                                    placeholder="Enter your country"
                                    className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-[300px]"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="p-2 shadow-lg rounded h-fit">
                    <header className="my-8">
                        <h1 className="uppercase text-black font-bold text-lg tracking-tight">summary</h1>
                    </header>
                    <div className="w-[90%] my-0 mx-auto">
                        {cart.map((item, index) => <div key={index}>
                            <div className="flex gap-2">
                                <div className="my-2">
                                    <img src={item.image} className="w-[60px] h-[60px] rounded-sm" alt="image" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3>{item.name}</h3>
                                    <p>GHS{item.price}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    {
                        cart.length ? <div className="w-[90%] my-0 mx-auto ">
                            <div className="flex items-center justify-between gap-2 my-1">
                                <h3 className="font-medium text-sm">Total</h3>
                                <span>GHS {totalPrice}</span>
                            </div>
                            <div className="flex items-center justify-between gap-2 my-1">
                                <h3 className="font-medium text-sm">Shipping</h3>
                                <span>GHS 50</span>
                            </div>
                            <div className="flex items-center justify-between gap-2 my-1">
                                <h3 className="font-medium text-sm">grand total</h3>
                                <span>GHS {grandTotal}</span>
                            </div>
                            <div className="my-4">
                                <PaystackButton  {...componentProps} />
                            </div>
                        </div>
                            : <span className="text-center text-lg font-bold">cart is empty</span>}
                </div>

            </div>
        </div >
    )
}

export default Checkout