import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import SideFriends from './SideFriends/SideFriends';

const Navbar = (props) => {
	return (
		<nav class={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.active} >Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users" activeClassName={s.active} >Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.active} >News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName={s.active} >Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.active} >Settings</NavLink>
			</div>
		</nav>
	)
}
export default Navbar

//			<div className={s.item}>
//<NavLink to="/friends" activeClassName={s.active} >
//<div>
//	<SideFriends friendsData={props.state.friendsData} />
	
//</div>
//</NavLink>
//</div>//
