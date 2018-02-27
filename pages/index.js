import Head from 'next/head';
import React, { PureComponent } from 'react';
import appLayout from '../layouts/GeneralLayout';
import pageTitle from '../src/Components/General/PageTitle';
import LoremIpsum from '../src/DummyData/LoremIpsum';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="container">
        <Head>
          {pageTitle('Homepage')}
        </Head>
        <h1>Homepage</h1>
        <LoremIpsum />
      </div>
    );
  }
}

export default appLayout(Homepage);
