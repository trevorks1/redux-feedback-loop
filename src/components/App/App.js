import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

// Hash routes for my pages to be routed to the app.js
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import ReviewPage from '../Pages/ReviewPage/ReviewPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
        </div>
      </Router>
    );
  }
}

export default App;
