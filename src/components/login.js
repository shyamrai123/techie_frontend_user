import { FormGroup, Label, Input, Button } from "reactstrap";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css";
import { LoginUser } from "../redux/slices/dataSlice";
import { useEffect, useState } from "react";
export default function Login() {
  const [formData001, setFormData001] = useState({});
  const loginUser = useSelector((state) => state.User.value.login);
  const {token} = loginUser;

  // const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick001 = (e) => {
    e.preventDefault();
    dispatch(LoginUser(formData001));
  };
  useEffect(() => {
    
    if(token){
      
        navigate("/home");
    }
  },[token])
  return (
    <div className="register-container">
      <div className="imagediv">
        <img src="https://codezo.s3.amazonaws.com/static/img/login-page1.jpg" />
      </div>
      <div className="formDiv">
        <Form className=" border border-2 p-3" onSubmit={handleClick001}>
          <FormGroup>
            <Label for="exampleEmail" className="h4">
              Login Form
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
                setFormData001({ ...formData001, email: e.target.value })
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
                setFormData001({ ...formData001, password: e.target.value })
              }
            />
          </FormGroup>


          
          <FormGroup className="text-center">
            <Button className="bg-success" onClick={handleClick001}>
             Login
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
