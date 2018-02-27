/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import React, { Component } from 'react';
import pageTitle from '../../src/Components/General/PageTitle';
import appLayout from '../../layouts/GeneralLayout';

class Contact extends Component {
  static async getInitialProps({
    isServer,
  }) {
    return {
      isServer,
    };
  }

  handleLoginClick() {
    this.props.loginUserFE('Haha');
  }

  handleLogout() {
    this.props.logoutUserFE('Haha');
  }

  showLoggedStats() {
    return (
      <div>
        <hr />
        UserName: {this.props.user.userName}<br />
        Login: {this.props.user.lastLogin}<br />
        Last-Server-Access: {this.props.user.access}<br />
        <button onClick={() => this.handleLogout()}>Logout</button>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <Head>
          {pageTitle('Login')}
        </Head>
        <h1>Login</h1>
        <div>
          {this.props.user.logged === false &&
            <button onClick={() => this.handleLoginClick()}>Login as User ASP</button>
          }

          {this.props.user.logged &&
            this.showLoggedStats()
          }
        </div>
      </div>
    );
  }
}

export default appLayout(Contact);
