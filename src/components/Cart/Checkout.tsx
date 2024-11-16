function Checkout() {
    return (
        <div className="w-[94%] my-0 mx-auto">
            <div className="grid grid-cols-[70%_30%] gap-4 my-6">
                <div className="py-2 px-4 shadow-md rounded">
                    <header className="my-8">
                        <h1 className="uppercase text-black font-bold text-lg tracking-tight">checkout</h1>
                    </header>
                    <div>
                        <span className="uppercase tracking-wide font-bold text-base text-orange-300 my-4">billing details</span>
                    </div>
                    <form action="/" className="mt-2">
                        <div className="grid grid-cols-[1fr_1fr] gap-y-4 items-center">
                            <div>
                                <label htmlFor="name" className="block capitalize font-bold">name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-[400px]"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block capitalize font-bold">email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 border w-[400px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block capitalize font-bold">name</label>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Enter your phone"
                                    className="px-4 py-2 border border-gray-300 rounded-md 
                                    focus:outline-none focus:border-blue-500 w-[400px]"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="p-2 shadow-md rounded"></div>
            </div>
        </div >
    )
}

export default Checkout