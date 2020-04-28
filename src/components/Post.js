import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
      <h1>Post Detail</h1>
      <h2>{post.title} - {post.upvotes}</h2>
      <hr/>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  user: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  upvotes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;