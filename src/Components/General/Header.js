/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { throttle } from 'throttle-debounce';
import HeaderLink from './HeaderLink';

Router.onRouteChangeStart = () => {
  document.body.classList.add('loading');
};

Router.onRouteChangeComplete = () => {
  setTimeout(() => document.body.classList.remove('loading'), 1000);
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerClassName: '',
    };
  }

  // Getting called on the client.
  componentDidMount() {
    window.addEventListener('scroll', throttle(50, () => this.handleScroll()));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(50, () => this.handleScroll()));
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 120 && this.state.headerClassName !== 'scrolled') {
      this.setState({
        headerClassName: 'scrolled',
      });
    } else if (scrollTop < 50 && this.state.headerClassName !== '') {
      this.setState({
        headerClassName: '',
      });
    }
  }

  renderAccountLink() {
    // this.props.auth.loggedIn
    if (this) {
      return <HeaderLink toLink="/user" icon="fa-user-circle" label="Account" />;
    }
    return <HeaderLink toLink="/login" icon="fa-user" label="Login" />;
  }

  render() {
    // const extraClassNames = this.props.app.headerClassName.join(' ');
    const extraClassNames = '';
    return (
      <header id="header" className={`${this.state.headerClassName} ${extraClassNames}`}>
        <div>
          <div className="row">
            <div className="col col-3 col-image">
              <Link href="/">
                <a href="/">
                  <img className="img-fluid d-none d-sm-inline logo" src="https://dywyzs4z4lwvw.cloudfront.net/sites/all/themes/custom/alexanderstreet_foundation/images/white_logo.png" alt="Logo" />
                  <img className="img-fluid d-sm-none" src="/static/images/logo-mobile.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <div className="col text-right text-md-left">
              <HeaderLink toLink="/test" icon="fa-cube" label="TEST" />
              <HeaderLink toLink="/channels" icon="fa-film" label="Channels" />
              <span className="float-md-right">
                <HeaderLink toLink="/search" icon="fa-search" label="Search" />
                {this.renderAccountLink()}
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
