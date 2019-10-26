import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.image} alt="avatarphoto" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <span
              className={this.state.online ? "status-online" : "status-offline"}
              onClick={event => {
                const newOnlinePersone = !this.state.online;
                this.setState({ online: newOnlinePersone });
              }}
            ></span>
            <span className="status-text">
              {this.props.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
