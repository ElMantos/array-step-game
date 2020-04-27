import ReactDOM from 'react-dom';
import React from 'react';
import * as serviceWorker from './serviceWorker';

import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
