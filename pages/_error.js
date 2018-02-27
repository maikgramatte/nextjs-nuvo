/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import appLayout from '../layouts/GeneralLayout';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
      </div>
    );
  }
}

export default appLayout(Error);
