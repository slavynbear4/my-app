import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
	return(
	<header class={s.header}>
		<img src="https://seeklogo.com/images/R/roger-federer-logo-F69633952B-seeklogo.com.png"></img>
		<div className={s.loginBlock}>
			 {props.isAuth ? <div>{props.login}  <button onClick={props.logout}>Выйти</button></div>
			: <NavLink to={'/login'}>Login</NavLink> }
		</div>
	</header>
	)
}
export default Header
