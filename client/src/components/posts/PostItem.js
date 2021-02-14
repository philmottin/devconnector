import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
  render() {
    const { post } = this.props;

    return <div>post:{post.text}</div>;
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
