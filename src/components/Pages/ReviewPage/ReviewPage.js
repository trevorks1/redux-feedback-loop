import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewPage extends Component {
  handleClickSubmit = () => {
    this.props.history.push('/thank-you');
    this.postFeedback();
  };

  postFeedback() {
    axios
      .post('/api/feedback', this.props.store.feedbackReducer)
      .then((response) => {
        console.log('POST feedback', response);
      })
      .catch((err) => {
        console.log('ERROR:', err);
        alert('Did not save feedback.');
      });
  }

  render() {
    return (
      <div>
        <h2>Review?</h2>
        <p>Feelings: {this.props.store.feedbackReducer.feeling}</p>
        <p>
          Understanding: {this.props.store.understandingReducer.understanding}
        </p>
        <p>Support: {this.props.store.supportReducer.support}</p>
        <p>Comments: {this.props.store.commentsReducer.comments}</p>
        <button onClick={this.handleClickSubmit}>Submit</button>
      </div>
    );
  }
}

const putStoreOnProps = (store) => {
  return {
    store,
  };
};

export default connect(putStoreOnProps)(ReviewPage);
