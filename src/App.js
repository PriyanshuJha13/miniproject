import "./App.css";
import ProductRight from "./components/ProductRight";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductLeft from "./components/ProductLeft";
import {StaticRouter} from "react-router-dom/server"

function App() {
  return (
    <>
      <div className="GeeksForGeeks">
        <Navbar />
        <ProductRight />
        <ProductLeft />
        <Footer />
      </div>
    </>
  );
}

export default App;
