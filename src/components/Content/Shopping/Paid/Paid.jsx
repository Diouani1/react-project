import "./paid.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import giveChange from "../../../../changeFile";
import { DataCenter } from "../../../../DataFile";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserDate } from "../../../../DateUser";

const Paid = () => {
  const {
    sum,
    sumOfPrice,
    setSumOfPrice,
    sumOfPaid,
    setSumOfPaid,
    sumOfChange,
    setSumOfChange,
    setOutput,
    paid,
    setPaid,
    setChange,
    setGoBack
  } = useContext(DataCenter);
  const {navigate}=useContext(UserDate)
  const price = sum.reduce((prev, curr) => prev + +curr.price, 0).toFixed(2);

  function cashCounter(price, paid) {
    let change = parseFloat((paid - price).toFixed(2));
    if (change < 0) {
      setChange("not enough")
      setOutput(`Customer should pay ${(change * Math.sign(change))} Euro more`);
      setGoBack(true)
    } else {
      setChange(change);
      setSumOfPrice(sumOfPrice + +price);
      setSumOfPaid(sumOfPaid + +paid);
      setSumOfChange(sumOfChange + change);
      if (change === 0) {
        setOutput(`Thank you`);
      } else {
        setOutput(giveChange(change));
      }
    }
  }
  function handelerChange(e) {
    e.preventDefault();
    cashCounter(price, paid);
  }
  const handleChange = (event) => {
    setPaid(event.target.value);
  };

  return (
    <div className="paid">
      <Form style={{ width: "60%", margin: "auto" }}>
        <FormGroup>
          <Label for="exampleNumber">Paid</Label>
          <Input
            id="exampleNumber"
            step={0.01}
            type="number"
            placeholder="whrite the Payment"
            // innerRef={paid}
            required
            // value={paid}
            onChange={handleChange}
          />
        </FormGroup>
        {paid && (
          <Button color="primary" onClick={handelerChange}>
            <NavLink to="change">Submit The Payement</NavLink>
          </Button> 
        )}
          <Button style={{padding:"5px"}} color="secondary" onClick={()=> navigate("/")}>Go Back</Button>

      </Form>
    </div>
  );
};

export default Paid;
