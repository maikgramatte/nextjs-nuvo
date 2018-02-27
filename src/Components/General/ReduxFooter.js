/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const styles = {
  position: 'fixed',
  background: 'White',
  bottom: 0,
  right: 0,
  zIndex: 2000,
};

class ReduxFooter extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="test" style={styles}>
        A
        {this.props.userType}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(ReduxFooter);
