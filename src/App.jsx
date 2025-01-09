import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Banner from "./pages/Banner";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/product" element={<Banner />} />
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
