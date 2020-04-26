import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SquaredButton, AnimatedTyping, SmileyFace } from '~/components';
import { generateRandomArray, resolveArrayGame } from '~/utils';

import './style.scss';

const AVAILABLE_BUTTON_VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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

function Home() {
  const [arrayItems, setArrayItems] = useState([]);

  const resolvedItems = resolveArrayGame(arrayItems);
  return (
    <div className="home">
      <div className="home_top">
        <SquaredButton
          className="home_button-generate sm:float-left"
          onClick={() => setArrayItems(generateRandomArray(10, 3))}
          text="GENERATE NEW ITEMS"
        />
        <SquaredButton
          className="home_button-clear sm:float-right"
          onClick={() => setArrayItems([])}
          text="REMOVE ALL ITEMS"
        />
      </div>
      <div className="home_thought_buble">
        {(() => {
          if (!arrayItems.length) {
            return 'You should try adding some more items to the array.';
          }

          return resolvedItems
            ? 'I know how you can win the game!'
            : "I'm sorry, but I cant win it.";
        })()}
      </div>

      <SmileyFace
        type={(() => {
          if (!arrayItems.length) {
            return 'neutral';
          }
          return resolvedItems ? 'happy' : 'sad';
        })()}
      />
      <div className="home_game_elements">
        <div className="home_game_elements_content">
          <span>[</span>
          {arrayItems.map((item, index) => (
            <RemovableItem
              isActive={resolvedItems && resolvedItems.includes(index)}
              key={`${item}-${index}`}
              onClick={() =>
                setArrayItems(arrayItems.filter((i, filterIndex) => index !== filterIndex))
              }
              text={`${item}, `}
            />
          ))}
          <div className="home_animaged_typing">
            <AnimatedTyping />
          </div>
          <span>]</span>
        </div>
      </div>
      <span className={cx('home_game_tip', resolvedItems && 'home_game_tip-active')}>
        *Green color indicates steps taken to win the game
      </span>
      <div className="home_controls">
        <span className="home_controls_label">ADD MORE ITEMS TO THE ARRAY</span>
        <div className="home_button_container">
          {AVAILABLE_BUTTON_VALUES.map((val) => (
            <SquaredButton
              key={val}
              text={val}
              onClick={() => setArrayItems([...arrayItems, val])}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
