import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <MuiThemeProvider>
        <div className="page-wrapper">
          <AppBar
            title="Resume Api"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;