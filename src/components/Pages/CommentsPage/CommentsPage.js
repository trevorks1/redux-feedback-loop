import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsPage extends Component {
  state = {
    commentsInput: '',
  };

  handleClickNext = () => {
    this.props.history.push('/review');
    this.props.dispatch({
      type: 'GIVE_COMMENTS',
      payload: this.state.commentsInput,
    });
  };

  handleChangeField = (event) => {
    this.setState({
      commentsInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Comments?</h2>
        <label htmlFor="comments">Comments?</label>
        <input
          id="comments"
          type="text"
          placeholder="Enter any comments you may have."
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// connecting to routes
export default connect()(CommentsPage);
