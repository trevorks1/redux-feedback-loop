import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
  state = {
    feelingInput: '',
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label htmlFor="feelings">Feeling?</label>
        <input
          id="feelings"
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
export default connect()(FeelingPage);
