import React from 'react';

import {addPostActiveCreator, updatePostTextActiveCreator} from './../../../redux/profile_reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";








let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (NewPostElement) => {
			dispatch(addPostActiveCreator(NewPostElement))
		},
	}
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts) ;



export default MyPostsContainer;