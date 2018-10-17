import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';

@connect(null, authActions)
class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.logout();
  }

  render() {
    return (
      <div className="container">
        <h1>Bye!</h1>
        <div>
          <p>You're now logged out!</p>
        </div>
      </div>
    );
  }
}

export default Logout;
