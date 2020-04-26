import ReactDOM from 'react-dom';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import './style.css';

function App() {
  return (
    <div className="flex justify-center bg-teal-400">
      <div>Initial app</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
