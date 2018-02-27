/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import Head from 'next/head';
import React, { Component } from 'react';
import Router from 'next/router';
import styles from '../../Scss/App.scss';
import Header from './General/Header';
import Footer from './General/Footer';

const cssFile = '/static/css/app.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <link href={cssFile} media="all" rel="stylesheet" />
        </Head>
        <Header headerClassName="a" />

        <main>
          {children}
        </main>

        <Footer />
      </div>
    );
  }
}

export default Layout;
