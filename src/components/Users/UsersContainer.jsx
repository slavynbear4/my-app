import React from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import {
	follow, followThunk, getUsers, getUsers2, setCurrentPage,
	setTotalUsersCount,
	setUsers, toogleFollowingProgress,
	toogleIsFetching,
	unFollow, unfollowThunk
} from "../../redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";



class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers2(pageNumber, this.props.pageSize)
	}


	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				   pageSize={this.props.pageSize}
				   currentPage={this.props.currentPage}
				   onPageChanged={this.onPageChanged}
				   users={this.props.users}
				   unfollow={this.props.unFollow}
				   follow={this.props.follow}
				   toogleFollowingProgress={this.props.toogleFollowingProgress}
				   followingInProgress={this.props.followingInProgress}
				   unfollowThunk={this.props.unfollowThunk}
				   followThunk={this.props.followThunk}


			/>
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,

	}
}




export default connect(mapStateToProps, {follow, setCurrentPage,
	setTotalUsersCount, setUsers,
	unFollow, toogleIsFetching,
	toogleFollowingProgress,
	getUsers, getUsers2,
	unfollowThunk,followThunk,
})
(UsersContainer);
