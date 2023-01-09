import "./navbar.css";
import { DataCenter } from "../../DataFile";
import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { UserDate } from "../../DateUser";

const NavBar = () => {
  const { navigate } = useContext(UserDate);
  const {
    setSum,
    counter,
    setCounter,
    setSumOfChange,
    setSumOfPaid,
    setSumOfPrice,
  } = useContext(DataCenter);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const cashierName = counter[0];

  const cashierBox = counter[1];

  function handleLogOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("price");
    localStorage.removeItem("paid");
    localStorage.removeItem("change");

    setSumOfPrice(0);
    setSumOfPaid(0);
    setSumOfChange(0);

    setCounter(null);
  }
  return (
    <div className="navbar">
      {/* <NavLink to="/">
        <Button color="danger" onClick={() => setSum([])}>
          Shoping List
        </Button>
      </NavLink>

      <NavLink to="erned">
        <Button color="primary">How mach Erned</Button>
      </NavLink>

      <NavLink to="incoming">
        <Button color="success">How much Incoming</Button>
      </NavLink>

      <NavLink to="outcoming">
        <Button color="info">How much Outcoming</Button>
      </NavLink>

      <NavLink to="addproducts">
        <Button color="warning">Add new Products</Button>
      </NavLink>
      <NavLink to="totalcashbox">
        <Button color="danger">Delete product from System</Button>
      </NavLink> */}

      <Navbar
        expand={false}
        className="p-2 mb-1 bg-secondary bg-gradient text-white "
        style={{ width: "100%", margin:"0" }}
        variant="secondary"
      >
        <Container fluid>
          <div className="userinfo">
            <h6>
              Cashier Name: <span> {cashierName} </span>
            </h6>
            <h6>
              Cash Box Number: <span> {cashierBox} </span>
            </h6>
          </div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="menu">
                  <Button
                    variant="danger"
                    onClick={() => {
                      setSum([]);
                      navigate("/");
                    }}
                  >
                    Shoping List
                  </Button>

                  <Button variant="primary" onClick={() => navigate("erned")}>
                    How mach Erned
                  </Button>

                  <Button
                    variant="success"
                    onClick={() => navigate("incoming")}
                  >
                    How much Incoming
                  </Button>

                  <Button variant="info" onClick={() => navigate("outcoming")}>
                    How much Outcoming
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => navigate("addproducts")}
                  >
                    Add new Products
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => navigate("totalcashbox")}
                  >
                    Delete product from System
                  </Button>
                  <Button variant="secondary" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
