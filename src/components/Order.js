const Orders = () => {
    return (
        <div className="container bg-slate-200 flex flex-col py-10">
            <h1 className="text-2xl font-bold font-mono">REQUEST <br /><span className="text-orange-500">SERVICE </span>NOW</h1>
            <input placeholder="Enter Your Name" className="mt-6 mb-4 px-2 py-1 rounded-[.4rem] font-mono"></input>
            <input placeholder="Enter Your Email" className=" mb-4 px-2 py-1 rounded-[.4rem] font-mono"></input>
            <input placeholder="Phone Number" className="mb-4 px-2 py-1 rounded-[.4rem] font-mono"></input>
            <button className="bg-orange-500 border-4 w-fit border-orange-500 text-white font-bold px-2 py-1 mt-3 border-r-slate-800 border-b-slate-800">Our Services</button>
        </div>
    )
}
export default Orders;