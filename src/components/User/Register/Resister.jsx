import "./register.css";
import { Label, Form, FormGroup, Input, Button } from "reactstrap";
import { UserDate } from "../../../DateUser";
import { useContext } from "react";
import bcrypt from 'bcryptjs';
const Register = () => {
  const { userName, email, password,  dispatch, error, setHash, hash} =
    useContext(UserDate);

 async function handelSubmit(e) {
    e.preventDefault();

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password.current.value, salt);
    setHash(hashedPassword);








    dispatch({ type: "register" });
  }

  return (
    <div className="register">
      <Form style={{ width: "60%", margin: "auto" }} onSubmit={handelSubmit}>
        <FormGroup>
          <Label for="exampleNumber">UserName</Label>
          <Input
            innerRef={userName}
            id="exampleNumber"
            name="number"
            type="text"
            placeholder="write your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            innerRef={email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            innerRef={password}
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            required
          />
        </FormGroup>
        <Button color="primary" tag="input" type="submit" value="Register" />
        {error && <Label className="error">{error} </Label>}
      </Form>
    </div>
  );
};

export default Register;
