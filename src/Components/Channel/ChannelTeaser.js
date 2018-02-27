/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ChannelTeaserPropType = {
  slug: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
};

export default function ChannelTeaser(props) {
  const {
    slug,
    cover,
    title,
    items,
  } = props;

  return (
    <a className="row align-items-center" href={`/channel/${slug}`}>
      <div className="col-4">
        <img className="img-fluid img-thumbnail rounded-circle" src={`${cover}`} alt={title} />
      </div>
      <div className="col">
        <h4 className="card-title">{title}</h4>
        <p className="small text-muted">
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor.
        </p>
        <p className="small text-muted">{items} Items</p>
      </div>
    </a>
  );
}

ChannelTeaser.propTypes = ChannelTeaserPropType;

export { ChannelTeaserPropType };
