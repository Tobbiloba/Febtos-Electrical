import Menu from "./Menu";
const HomePage = () => {
    return (
        <div className="max-w-[100vw] ">
            <Menu />
            <div className="absolute w-[100vw] top-0 h-[100vh] z-[-1]" >
                <img src="https://www.energy.gov/sites/default/files/2017/04/f34/blur-1846617_1920.jpg.png" className="h-[100vh] absolute w-[900px]" />
            </div>
        </div>
    )
}
export default HomePage;