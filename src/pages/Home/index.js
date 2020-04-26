import React, { useState } from 'react';

import { SquaredButton, AnimatedTyping, SmileyFace } from '~/components';
import { generateRandomArray } from '~/utils';

import './style.scss';

const AVAILABLE_BUTTON_VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function Home() {
  const [arrayItems, setArrayItems] = useState([]);
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
      <SmileyFace />
      <div className="home_game_elements">
        <div className="home_game_elements_content">[{arrayItems.map((item) => `${item}, `)}</div>
        <div className="home_animaged_typing">
          <AnimatedTyping />
        </div>
        ]
      </div>
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
