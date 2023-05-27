import Aos from "aos";
const Orders = () => {
    return (
        <div className="px-[1rem] lg:px-[17.5vw] bg-slate-200 md:px-[2.2rem] flex flex-col py-10 lg:flex-row md:flex-col lg:items-center lg:justify-between md:justify-between" data-aos="fade-up">
            <h1 className="text-2xl lg:mr-3 md:mr-2 md:text-xl font-bold font-mono">REQUEST <br /><span className="text-orange-500">SERVICE </span>NOW</h1>
            <input placeholder="Enter Your Name" className="mt-6 lg:mt-0  lg:mb-0 lg:h-[35px] mb-4 md:w-[240px] px-2 py-1 rounded-[.4rem] font-mono"></input>
            <input placeholder="Enter Your Email" className=" mb-4 lg:mt-0  lg:mb-0  lg:h-[35px] px-2 py-1 rounded-[.4rem] lg:w-[270px] md:w-[240px] font-mono"></input>
            <input placeholder="Phone Number" className="mb-4 px-2 py-1 lg:mt-0 md:mt-0 lg:mb-0 lg:h-[35px] rounded-[.4rem] font-mono md:w-[240px]"></input>
            <button className="bg-orange-500 border-4 w-fit border-orange-500 text-white font-bold px-2 py-1 mt-3 border-r-slate-800 border-b-slate-800">Our Services</button>
        </div>
    )
}
export default Orders;