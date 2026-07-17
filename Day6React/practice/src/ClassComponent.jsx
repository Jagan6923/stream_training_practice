import { Component } from "react";

class ClassComponent extends Component {
  // company = "Accenture";

  // getCompany() {
  //   return this.company;
  // }

  constructor() {
    super();
    this.state = {
      fname: "Ajay",
      role: "Analyst",
    };
  }

  nameHandler = () => {
    // this.state.name="Vikram"
    this.setState({
      fname: "Vikram",
    });
  };

  roleHandler = function () {
    this.setState({
      role: "Manager",
    });
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        {/* <h2>{this.company}</h2> */}
        {/* <h2>{this.getCompany()}</h2> */}

        <h3>{this.props.name}</h3>
        <h3>Experience: {this.props.experience} years</h3>

        <h4>Emp Nmae: {this.state.fname}</h4>
        <h4>Role: {this.state.role}</h4>

        <button className="btn btn-warning" onClick={this.nameHandler}>
          Update Name
        </button>
        <button
          className="btn btn-secondary"
          onClick={this.roleHandler.bind(this)}
        >
          Update Role
        </button>
      </div>
    );
  }
}

export default ClassComponent;
 