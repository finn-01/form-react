import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    console.log("Hello " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NameForm />, rootElement);
