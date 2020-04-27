import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

function RemovableItem({ text, onClick, isActive }) {
  return (
    <span className={cx('removable', isActive && 'removable-active')}>
      {text}
      <button onClick={onClick} type="button" className="removable_close">
        ×
      </button>
    </span>
  );
}

RemovableItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default RemovableItem;
