import ReactDOM from 'react-dom';
import React from 'react';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div>
      <div>Initial app</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
