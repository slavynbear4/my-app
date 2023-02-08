import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {
	getUserProfile,
	getUserStatus,
	profileLocation,
	setUserProfile,
	updateUserStatus
} from "../../redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRiderect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);

	}

	render() {

		return (
			<Profile  {...this.props}  profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
		)
	}

}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,

	}
}


export default compose(
	connect (mapStateToProps, {setUserProfile, getUserProfile,getUserStatus,updateUserStatus}),
	withRouter,
)(ProfileContainer)