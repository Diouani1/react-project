import "./change.css";
import { useContext } from "react";
import { DataCenter } from "../../../../DataFile";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { UserDate } from "../../../../DateUser";
const Change = () => {
  const { navigate } = useContext(UserDate);
  const { outPut, change, setSum, setPaid, goBack, setGoBack } =
    useContext(DataCenter);
  function handlGoBack() {
    navigate("paid");
    setGoBack(false);
  }
  return (
    <div className="change">
      <h2>The amount of the change is {change} </h2>
      <span>{outPut}</span>
      {goBack ? (
        <Button color="primary" outline onClick={handlGoBack}>
          Go Back
        </Button>
      ) : (
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
      )}
    </div>
  );
};

export default Change;
