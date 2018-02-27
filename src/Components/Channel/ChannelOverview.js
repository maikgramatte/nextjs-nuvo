import React from 'react';
import PropTypes from 'prop-types';
import ChannelTeaser from './ChannelTeaser';

const ChannelClassName = 'col-12 col-md-6';

function ChannelOverview(props) {
  const { items } = props;

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          {items.map(channel => (
            <div key={channel.slug} className={`channel-teaser ${ChannelClassName}`}>
              <ChannelTeaser mode="mychannels" {...channel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ChannelOverview.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

ChannelOverview.defaultProps = {
  items: [],
};

export default ChannelOverview;
