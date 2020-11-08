import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  state = {
    understandingInput: '',
  };

  handleClickNext = () => {
    if (
      this.state.understandingInput === '' ||
      !this.state.understandingInput
    ) {
      alert('Please score your understanding before moving to next page.');
      return;
    }
    this.props.history.push('/support');
    this.props.dispatch({
      type: 'GIVE_UNDERSTANDING',
      payload: parseInt(this.state.understandingInput),
    });
  };

  handleChangeField = (event) => {
    this.setState({
      understandingInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <label htmlFor="understanding">Understanding?</label>
        <input
          id="understanding"
          type="number"
          placeholder="Between 1 and 5"
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// connecting to routes
export default connect()(UnderstandingPage);
