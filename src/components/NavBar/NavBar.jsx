import "./navbar.css";
import { DataCenter } from "../../DataFile";
import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { UserDate } from "../../DateUser";

const NavBar = () => {
  const [onOff, setOnOff] = useState(false);
  const { navigate } = useContext(UserDate);
  const {
    setSum,
    counter,
    setCounter,
    setSumOfChange,
    setSumOfPaid,
    setSumOfPrice,
  } = useContext(DataCenter);
  const cashierName = counter[0];
  const cashierBox = counter[1];
  function toggleOffOn() {
    setOnOff(!onOff);
  }
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
      <Navbar
        expand={false}
        className="p-2 mb-1 bg-secondary bg-info  "
        style={{ width: "100%", margin: "0" }}
      >
        <Container fluid>
          <div className="userinfo">
            <h6>
              Cashier Name: <span> {cashierName} </span>
            </h6>
            <h6>
              Cash Box: <span> {cashierBox} </span>
            </h6>
          </div>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-false`}
            onClick={toggleOffOn}
            style={{color:"black", backgroundColor:"white"}}
          />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
            show={onOff}
            onHide={toggleOffOn}
            style={{backgroundColor:"black", color:"white"}}
          >
            <Offcanvas.Header  closeButton closeVariant="white">
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
                      toggleOffOn();
                    }}
                  >
                    Shoping List
                  </Button>

                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate("erned");
                      toggleOffOn();
                    }}
                  >
                    How mach Erned
                  </Button>

                  <Button
                    variant="success"
                    onClick={() => {
                      navigate("incoming");
                      toggleOffOn();
                    }}
                  >
                    How much Incoming
                  </Button>

                  <Button
                    variant="info"
                    onClick={() => {
                      navigate("outcoming");
                      toggleOffOn();
                    }}
                  >
                    How much Outcoming
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => {
                      navigate("addproducts");
                      toggleOffOn();
                    }}
                  >
                    Add new Products
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      navigate("totalcashbox");
                      toggleOffOn();
                    }}
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
