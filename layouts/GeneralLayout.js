/* eslint-disable arrow-body-style */
import React from 'react';
import Cookies from 'universal-cookie';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import makeStore from '../store';
import { initUserBE, loginUserFE, logoutUserFE } from '../src/Actions/userActions';
import Header from '../src/Components/General/Header';
import Footer from '../src/Components/General/Footer';
import '../Scss/App.scss';
// import store from '../store';
const cssFile = '/static/css/app.css';

const mapDispatchToProps = (dispatch) => {
  return {
    initUser: bindActionCreators(initUserBE, dispatch),
    loginUserFE: bindActionCreators(loginUserFE, dispatch),
    logoutUserFE: bindActionCreators(logoutUserFE, dispatch),
  };
};

function mapStateToProps(state) {
  return {
    user: state,
  };
}

function appLayout(PageComponent) {
  return withRedux(
    makeStore,
    mapStateToProps,
    mapDispatchToProps,
  )(class AppLayout extends PageComponent {
    static async getInitialProps(initProps) {
      const {
        isServer,
        store,
        req,
      } = initProps;

      if (isServer) {
        const cookies = new Cookies(req.headers.cookie);
        const cookieValues = cookies.get('u');
        if (cookieValues) {
          store.dispatch(initUserBE(cookieValues));
        }
      }

      let pageProps = {};
      if (typeof PageComponent.getInitialProps === 'function') {
        pageProps = await PageComponent.getInitialProps(initProps);
      }

      return {
        isServer,
        // store,
        ...pageProps,
      };
    }

    render() {
      const { isServer } = this.props;

      return (
        <div>
          <Head>
            <link href={cssFile} media="all" rel="stylesheet" />
          </Head>
          <Header headerClassName="a" />
          <main>
            {super.render(this.pageProps)}
          </main>
          <Footer isServer={isServer} />
        </div>
      );
    }
  });
}

export default appLayout;
