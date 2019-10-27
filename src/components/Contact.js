import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }
  render() {
    const statusAlternation = e => {
      const status = !this.state.online;
      this.setState({ online: status });
    };
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.image} alt={this.props.name} />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status" onClick={statusAlternation}>
            <span
              className={this.state.online ? "status-online" : "status-offline"}
            ></span>
            <span className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
