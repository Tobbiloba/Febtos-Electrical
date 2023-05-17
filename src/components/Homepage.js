import Menu from "./Menu";
const HomePage = () => {
    return (
        <div className="max-w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center">
            <Menu />
            <div className="absolute w-[100vw] top-0 h-[100vh] z-[-1]" >
                <img src="https://www.energy.gov/sites/default/files/2017/04/f34/blur-1846617_1920.jpg.png" className="h-[100vh] absolute w-[900px]" />
            </div>
            <div className="container text-white ">
                <h1 className="text-[17px]">We are master of services</h1>
                <h1 className="text-[40px] mt-2 font-bold">Fast <span className="text-orange-500">Electrical</span> <br /> Services Provider </h1>
                <button className="border-4 mt-12 border-t-orange-500 border-l-orange-500 border-b-white border-r-white bg-orange-500 text-xl font-bold">BOOK A SERVICES</button>
            </div>
        </div>
    )
}
export default HomePage;