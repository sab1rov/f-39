import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
