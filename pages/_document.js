import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Router from 'next/router';
import flush from 'styled-jsx/server';

Router.onBeforeHistoryChange = () => {
  document.body.classList.add('loading');
};

Router.onRouteChangeComplete = () => {
  setTimeout(() => document.body.classList.remove('loading'), 1000);
};

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html,
      head,
      errorHtml,
      chunks,
    } = renderPage();
    const styles = flush();
    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
          <div className="loading-indicator" />
          {this.props.customValue}
          <Main />
          <NextScript />
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
        </body>
      </html>
    );
  }
}

export default MyDocument;
