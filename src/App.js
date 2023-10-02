import Navbar from "./Allcomponents/Navbar";
import "./App.css";
import "./Allcomponents/Allcsapp.css";
import SEOSupport from "./Allcomponents/SEOSupport";
import Search1 from "../src/Allcomponents/Search1";
import Superiority from "./Allcomponents/Superiority";
import Partners from "./Allcomponents/Partners";
import Cardposition from "./Allcomponents/Cardposition";
import CaseStudies from "./Allcomponents/CaseStudies";
import Blog from "../src/Allcomponents/Blog";
import Blog1 from "./Allcomponents/Blog1";
import Footer from "./Allcomponents/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div >
        <SEOSupport />
        <Search1 />
        <Superiority />
        <Partners />
        <Cardposition />
        <CaseStudies />
        <Blog />
        <Blog1 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
