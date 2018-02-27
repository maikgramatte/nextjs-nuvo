/* eslint-disable react/prefer-stateless-function */
import Head from 'next/head';
import React, { Component } from 'react';
import pageTitle from '../../src/Components/General/PageTitle';
import LoremIpsum from '../../src/DummyData/LoremIpsum';
import appLayout from '../../layouts/GeneralLayout';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          {pageTitle('Contact')}
        </Head>
        <h1>About</h1>
        <LoremIpsum />
      </div>
    );
  }
}

export default appLayout(Contact);
