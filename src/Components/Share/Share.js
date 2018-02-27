import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '../../../Utils/Ux-Tools';

function ShareBar({ show }) {
  return (
    <Fade in={show} className="share">
      {show &&
        <div className="card card-body">
          <h2 className="display-6">Share this Page</h2>
          <hr />
          <p>
            <i className="fab fa-facebook-square fa-2x" />&nbsp;
            <i className="fab fa-facebook-square fa-2x" />&nbsp;
            <i className="fab fa-facebook-square fa-2x" />&nbsp;
            <i className="fab fa-facebook-square fa-2x" />&nbsp;
            <i className="fab fa-facebook-square fa-2x" />
          </p>
        </div>
      }
    </Fade>
  );
}

ShareBar.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShareBar;
