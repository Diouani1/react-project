import "./change.css";
import { useContext } from "react";
import { DataCenter } from "../../../../DataFile";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const Change = () => {
  const { outPut, change, setSum, setPaid } = useContext(DataCenter);

  return (
    <div className="change">
      <h2>The amount of the change is : {change} Euros</h2>
      <span>{outPut}</span>
      <NavLink to="/">
        <Button
          color="warning"
          outline
          onClick={() => {
            setSum([]);
            setPaid();
          }}
        >
          To The Next Customer
        </Button>
      </NavLink>
    </div>
  );
};

export default Change;
