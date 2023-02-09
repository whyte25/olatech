import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./assets/Spinner.gif";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="h-full w-full bg- backdrop-blur-xl flex flex-col  space-y-2 justify-center items-center">
              <img className=" mt-32 object-contain" src={Loading} alt="" />
              <h3 className="text-2xl text-orange">Loading...</h3>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
