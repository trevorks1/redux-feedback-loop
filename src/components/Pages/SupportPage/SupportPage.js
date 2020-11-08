import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    supportInput: '',
  };

  handleClickNext = () => {
    if (this.state.supportInput === '' || !this.state.supportInput) {
      alert('Please score your support before moving to next page.');
      return;
    }

    this.props.history.push('/comments');
    this.props.dispatch({
      type: 'GIVE_SUPPORT',
      payload: parseInt(this.state.supportInput),
    });
  };

  handleChangeField = (event) => {
    this.setState({
      supportInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label htmlFor="support">Support?</label>
        <input
          id="support"
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
export default connect()(SupportPage);
