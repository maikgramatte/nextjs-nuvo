/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterNavigation from './FooterNavigation';

const API_URL = process.env.BACKEND_URL;
const FooterLogo = '/static/images/react-js-icon.png';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.parseMode = 'Client';
    if (props.isServer === true) {
      this.parseMode = 'Server';
    }
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-md-1">
              <img src={FooterLogo} alt="FooterLogo" className="img-fluid" />
            </div>
            <div className="col-8 col-md-5">
              <strong>Made with React.JS/NextJs</strong><br />
              API: {API_URL}<br />
              React-Parse-Mode: {this.parseMode}<br />
              Logged in since: {this.props.lastLogin}
            </div>
            <div className="col-12 col-md-6 text-sm-center text-md-right">
              <FooterNavigation />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    lastLogin: state.lastLogin,
  };
}

export default connect(mapStateToProps, null)(Footer);
