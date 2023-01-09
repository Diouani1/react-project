import "./login.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useContext, useRef } from "react";
import { DataCenter } from "../../../DataFile";
import { UserDate } from "../../../DateUser";

const LogIn = () => {
  const { setCounter } = useContext(DataCenter);
  const { error, setError } = useContext(UserDate);

  const userName = useRef();
  const password = useRef();
  const cashBox = useRef();
  function logInHandeler(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(userName.current.value));
    if (user.password === password.current.value) {
      setCounter([userName.current.value, cashBox.current.value]);
    } else {
      setError("Invalid Username or Password");
    }
  }

  return (
    <div className="logIn">
      <Form style={{ width: "60%", margin: "auto" }} onSubmit={logInHandeler}>
        <FormGroup>
          <Label for="exampleNumber">UserName</Label>
          <Input
            id="exampleNumber"
            name="number"
            type="text"
            placeholder="write your name"
            innerRef={userName}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            innerRef={password}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Cash Box</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            innerRef={cashBox}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Input>
        </FormGroup>
        <Button color="primary" tag="input" type="submit" value="Log In" />
        {error && <Label className="error">{error} </Label>}
      </Form>
    </div>
  );
};

export default LogIn;
