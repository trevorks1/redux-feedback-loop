import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    supportInput: '',
  };

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label htmlFor="feelings">Support?</label>
        <input
          id="support"
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
export default connect()(SupportPage);
