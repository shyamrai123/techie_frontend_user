import { Form } from "react-router-dom";
import { FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../redux/slices/dataSlice";
export default function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const date = new Date();
  console.log(date);
  const handleClick = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmpassword) {
    window.alert("Password and Confirm Password are not same");
    }else{
      dispatch(RegisterUser({...formData,timedate : date}));
      window.alert("Successfully Registered");
    }
    
  };
  return (
    <div className="register-container">
      <div className="imagediv">
        <img src="https://codezo.s3.amazonaws.com/static/img/login-page1.jpg" />
      </div>
      <div className="formDiv">
        <Form onSubmit={handleClick}>
          <FormGroup>
            <Label for="exampleEmail" className="h4">
              Register Form
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email Address"
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleNumber">Mobile Number</Label>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="Mobile Number"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, mobilenumber: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDatetime">Username</Label>
            <Input
              id="exampleDatetime"
              name="username"
              placeholder="UserName"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Confirm Password</Label>
            <Input
              id="examplePassword"
              name="confirmpassword"
              placeholder="Confirm password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, confirmpassword: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" />
            <Label check>I here by agree to terms and conditions</Label>
          </FormGroup>
          <FormGroup className="text-center">
            <Button className="bg-success" onClick={handleClick}>
              Register
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
