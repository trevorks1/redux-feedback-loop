import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
  state = {
    feelingInput: '',
  };

  handleClickNext = () => {
    if (this.state.feelingInput === '' && !this.state.feelingInput) {
      alert('Please score your feelings before moving to next page.');
      return;
    }

    this.props.history.push('/understanding');
    this.props.dispatch({
      type: 'GIVE_FEELING',
      payload: parseInt(this.state.feelingInput),
    });
  };

  handleChangeField = (event) => {
    this.setState({
      feelingInput: event.target.value,
    });
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
