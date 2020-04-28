import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({user: event.target.user.value, title: event.target.title.value, body: event.target.body.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;