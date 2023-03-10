import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 70 ,
	totalUsersCount: 0,
	currentPage: 2,
	isFetching: true,
	followingInProgress:[],



};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return  {...u, followed: true}
					}
					return u;
				})
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return  {...u, followed: false}
					}
					return u;
				})
			};
		}
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.totalUsersCount}
		}
		case TOOGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case TOOGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter( id=> id != action.userId)

			}
		}

		default:
			return state;
	}
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})
export const toogleFollowingProgress = (isFetching, userId) => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
	dispatch(toogleIsFetching(true));
	userAPI.getUsers(currentPage, pageSize)
		.then(data => {
			dispatch(toogleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
}}

export const getUsers2 = (pageNumber, pageSize) => {
	return (dispatch) => {
		dispatch(toogleIsFetching(true));
		dispatch(setCurrentPage(pageNumber));
		userAPI.getUsers(pageNumber, pageSize)
			.then(data => {
				dispatch(toogleIsFetching(false));
				dispatch(setUsers(data.items));
			});
	}}

export const unfollowThunk = (id) => {
	return (dispatch) => {
		dispatch(toogleFollowingProgress(true, id))
		userAPI.unfollow(id)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(unFollow(id));
				}
				dispatch(toogleFollowingProgress(false, id))
			})
		;
	}}
export const followThunk = (id) => {
	return (dispatch) => {
		dispatch(toogleFollowingProgress(true, id))
		userAPI.follow(id)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(follow(id));
				}
				dispatch(toogleFollowingProgress(false, id))
			})
		;
	}}


export default usersReducer