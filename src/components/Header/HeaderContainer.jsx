import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {authorization, logout, setAuthUserData} from "../../redux/auth_reducer";
import {authAPI, userAPI} from "../../api/api";
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers, toogleFollowingProgress,
	toogleIsFetching,
	unFollow
} from "../../redux/users_reducer";

class HeaderСontainer extends React.Component {

    componentDidMount() {
		this.props.authorization()
    }

    render() {
       return <Header  {...this.props}/>
    }

}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		email: state.auth.email,
	}
}

export default connect(mapStateToProps, {setAuthUserData, authorization,logout})
(HeaderСontainer);
