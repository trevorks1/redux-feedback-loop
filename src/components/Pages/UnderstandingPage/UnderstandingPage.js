import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  state = {
    understandingInput: '',
  };

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <label htmlFor="feelings">Understanding?</label>
        <input
          id="understanding"
          type="number"
          placeholder="Number between 1 and 5"
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// connecting to routes
export default connect()(UnderstandingPage);
