import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <NavbarBs>
      <Container className="bg-white shadow-sm mb-3 ">
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/stores" as={NavLink}>
            Stores
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <FiShoppingCart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(30%,-30%)",
            }}
          >
            4
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
