import React, { Component } from 'react';
import { removeComment } from '../actions/actionCreators';

class Comments extends Component {
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <strong>{comment.user}</strong>
        {comment.text}
        <button
          className="remove-comment"
          // onClick={this.props.removeComment.bind(
          //   null,
          //   this.props.params.postId,
          //   i
          // )}
        >
          &times;
        </button>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
