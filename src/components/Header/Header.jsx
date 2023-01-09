import "./header.css";
import { DataCenter } from "../../DataFile";
import { useContext } from "react";
import { Button } from "reactstrap";

const Header = () => {
  const { counter, setCounter, setSumOfPrice, setSumOfPaid, setSumOfChange } =
    useContext(DataCenter);
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
    <div>
      <div className="header">
        <Button className="logout" onClick={handleLogOut}>
          Log Out
        </Button>
        <h2>
          {" "}
          Cashier Name: <span> {cashierName} </span>
        </h2>
        <h2>
          Cash Box Number: <span> {cashierBox} </span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Header;
