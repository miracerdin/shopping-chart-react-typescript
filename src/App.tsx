import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Stores from "./pages/Stores";
import About from "./pages/About";
import Home from "./pages/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
