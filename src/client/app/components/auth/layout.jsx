import React, { Component } from 'react';

class FormLayout extends Component {
  render() {
    return (
      <div className="col-xs-12">
        {this.props.children}
      </div>
    );
  }
}

export default FormLayout;