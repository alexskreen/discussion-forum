import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // formVisibleOnPage: false,
      selectedPost: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: "TOGGLE_FORM",
      };
      dispatch(action);
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, user, title, body, upvotes } = newPost;
    const action = {
      type: "ADD_POST",
      id: id,
      user: user,
      title: title,
      body: body,
      upvotes: upvotes
    }
    dispatch(action);
    // this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({ selectedPost: selectedPost });
  };

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedPost: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, user, title, body, upvotes } = postToEdit;
    const action = {
      type: "ADD_POST",
      id: id,
      user: user,
      title: title,
      body: body,
      upvotes: upvotes
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditPostForm
          Post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = "Return to Sub";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = (
        <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Sub";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Sub";
    } else {
      currentlyVisibleState = (
        <PostList
          postList={this.props.masterPostList}
          onPostSelection={this.handleChangingSelectedPost}
        />
      );
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibileOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;