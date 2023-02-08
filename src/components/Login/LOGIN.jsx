import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/Forms controls/Forms controls";
import {login} from "../../redux/auth_reducer";
import {connect} from "react-redux";

import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {Redirect} from "react-router-dom";
/*import s from './LOGIN.module.css';*/



const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/>
			</div>
			<div>
				<Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

 const LoginReduxForm = reduxForm({

	form: 'login'
})(LoginForm)

const Login = (props) => {
	 const onSubmit = (formData) => {
	   props.login(formData.email, formData.password, formData.rememberMe);
	 }

	if (props.isAuth) {
		return <Redirect to={"/profile"}/>
	}

	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)