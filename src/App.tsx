import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4 cover w-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
