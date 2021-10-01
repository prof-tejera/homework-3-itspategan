import { Component } from "react";
import "./LoginForm.css";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

class LoginForm extends Component {
  render() {
    return (
      <div id="form-container">
        <h1 id="login-header">Login</h1>
        <form id="login-form">
          <Input className="form-field" />
          <Input className="form-field" />
          <Button text="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
