import React from 'react';
import PropTypes from 'prop-types';
import './Core.scss';

const Core = (props) => (
  <div className="CoreWrapper">
    Test content
  </div>
);

Core.propTypes = {
  // bla: PropTypes.string,
};

Core.defaultProps = {
  // bla: 'test',
};

export default Core;
