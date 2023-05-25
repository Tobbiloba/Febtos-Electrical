import HomePage from "./components/Homepage";
import Orders from "./components/Order";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      {/* <Menu /> */}
      <HomePage />
      <Orders />
      <AboutUs />
      <Services />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
