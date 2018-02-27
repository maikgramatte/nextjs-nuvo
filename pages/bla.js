import Head from 'next/head';
import React, { PureComponent } from 'react';
import pageTitle from '../src/Components/General/PageTitle';
import LoremIpsum from '../src/DummyData/LoremIpsum';

class Bla extends PureComponent {
  render() {
    return (
      <div className="container">
        <Head>
          {pageTitle('Bla')}
        </Head>
        <h1>Bla</h1>
        <LoremIpsum />
      </div>
    );
  }
}

export default Bla;
