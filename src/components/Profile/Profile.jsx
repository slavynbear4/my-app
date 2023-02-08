import React from 'react';
import s from './Profile.module.css';
import Information from './Information/Information';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateUserStatus} from "../../redux/profile_reducer";

const Profile = (props) => {
	return (
		<div>
			<Information profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
			<MyPostsContainer/>
		</div>
	)
}

export default Profile