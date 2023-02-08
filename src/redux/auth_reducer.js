import {authAPI, userAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toogleIsFetching} from "./users_reducer";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			};
		}
		default: return state;
	}
}


export const setAuthUserData = ( id, email, login, isAuth) => {
	return {
		type: SET_USER_DATA, data: {id, email, login, isAuth}
	}
}

export const authorization = () => (dispatch) => {
		authAPI.authUsers()
			.then(data => {
				if (data.resultCode === 0) {
					let {id, email, login} = data.data;
					dispatch(setAuthUserData(id, email, login, true))
				}
			});
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
        let action = stopSubmit("login", {email: "Email is false"});
        dispatch(action);
        return;
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authorization())
                } else {
                  
                }
            });
    }

export const logout = () => (dispatch) => {
		authAPI.logout()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false))
				}
			});
	}


export default authReducer