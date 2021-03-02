import React from "react";
import LoginForm from "./components/LoginForm";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        johnmanack: {
          password: "s3kr3t"
        }
      }
    };
  }

  _checkCredentials = (username, password) => {
    console.log("Checking credentials");
    const userObj = this.state.credentials[username];
    if (userObj && userObj.password === password) {
      return {
        isValid: true,
        message: "Login successful"
      };
    } else {
      return {
        isValid: false,
        message: "Bad username or password"
      };
    }
  };

  render() {
    return (
      <div className="App">
        <LoginForm handleSubmit={this._checkCredentials} />
      </div>
    );
  }
}

export default App;
