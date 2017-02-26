import React, { Component } from 'react';

class ResumeLayout extends Component {
  render() {
    return (
      <div className="col-xs-12">
        {this.props.children}
      </div>
    );
  }
}

export default ResumeLayout;