import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import './style.scss';

function SquaredButton({ text, onClick, type, className }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cx('squared_button', className)} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

PropTypes.defaultProps = {
  type: 'button',
};

SquaredButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default SquaredButton;
