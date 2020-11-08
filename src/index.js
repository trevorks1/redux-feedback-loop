import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Var to store uri or url to app.js, and set a default state for each page
const originalFeedback = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};

//
// Reducer Functions --------------------------
//

// feedbackReducer
function feedbackReducer(state = originalFeedback, action) {
  console.log(feedbackReducer, 'feedbackReducer');
  if (action.type === 'GIVE_FEELING') {
    return {
      ...state,
      feeling: action.payload,
    };
  }
}

// understandingReducer
function understandingReducer(state = originalFeedback, action) {
  if (action.type === 'GIVE_UNDERSTANDING') {
    return {
      ...state,
      understanding: action.payload,
    };
  }
}

// supportReducer
function supportReducer(state = originalFeedback, action) {
  if (action.type === 'GIVE_SUPPORT') {
    return {
      ...state,
      support: action.payload,
    };
  }
}

// commentsReducer
function commentsReducer(state = originalFeedback, action) {
  if (action.type === 'GIVE_COMMENTS') {
    return {
      ...state,
      comments: action.payload,
    };
  }
}

// Redux store
const storeInstance = createStore(
  // reducers
  combineReducers({
    feedbackReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  // middleware
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
