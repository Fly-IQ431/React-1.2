import React from "react";

class Delo extends React.Component {
  delo = this.props.delo;
  render() {
    return (
      <div className="delo">
        <h3>{this.delo.title} </h3>
        <p>{this.delo.description}</p>
      </div>
    );
  }
}

export default Delo;
