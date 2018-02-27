import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function HeaderLink(props) {
  const {
    icon,
    label,
    toLink,
    activeClassName,
    className,
  } = props;

  return (
    <Link href={toLink}>
      <a href={toLink} className={className} data-active-classname={activeClassName}>
        <i className={`fas ${icon}`} />
        <span className="d-block d-sm-inline-block">{label}</span>
      </a>
    </Link>
  );
}

HeaderLink.propTypes = {
  icon: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};

HeaderLink.defaultProps = {
  activeClassName: 'active',
  className: 'btn btn-link',
};

export default HeaderLink;
