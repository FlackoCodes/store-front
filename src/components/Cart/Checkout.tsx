function Checkout() {
    return (
        <div className="w-[85%] my-0 mx-auto">
            <div className="grid grid-cols-[80%_20%] shadow-md">
                <div className="p-2 shadow-md rounded">
                    <header className="my-2">
                        <h1 className="uppercase text-black font-bold text-lg tracking-tight">checkout</h1>
                    </header>
                    <div>
                        <span className="uppercase tracking-wide font-bold text-base text-orange-300">billing details</span>
                    </div>
                    <form action="" className="flex flex-col space-y-4 w-80 mx-auto">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="font-semibold">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </form>
                </div>
                <div className="p-2 shadow-md rounded"></div>
            </div>
        </div >
    )
}

export default Checkout