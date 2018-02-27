/* eslint-disable react/prop-types, jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import HeaderLink from './HeaderLink';

function UserIcon(props) {
  if (props.auth.loggedIn) {
    return <HeaderLink toLink="/user" icon="fa-user-circle" label="Account" />;
  }

  return <HeaderLink toLink="/login" icon="fa-user" label="Login" />;
}

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

export default connect(
  mapStateToProps,
  null,
)(UserIcon);
