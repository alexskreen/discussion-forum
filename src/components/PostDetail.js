import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <h3>by: {post.user}</h3>
      <p><em>{post.body}</em></p>
      <p><em>{post.upvotes}</em></p>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={()=> onClickingDelete(post.id) }>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;