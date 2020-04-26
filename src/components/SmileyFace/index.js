import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

function SmileyFace({ type }) {
  return (
    <div className={cx('smiley_face', `smiley_face-${type}`)}>
      <div className="smiley_face_content">
        :
        {(() => {
          switch (type) {
            case 'happy':
              return ')';
            case 'sad':
              return '(';
            case 'neutral':
              return '|';
            default:
              return '|';
          }
        })()}
      </div>
    </div>
  );
}

SmileyFace.propTypes = {
  type: PropTypes.oneOf(['happy', 'sad', 'neutral']),
};

export default SmileyFace;
