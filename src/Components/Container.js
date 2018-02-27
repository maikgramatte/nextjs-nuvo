import React from 'react';
import PropTypes from 'prop-types';
import { PageTitle } from '../../Utils';

const Container = ({ title, children }) => (
  <div className="container-fluid">
    <PageTitle title={title} />
    {children}
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
