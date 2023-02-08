import React from 'react';
import s from './SideFriends.module.css';
import Friend from './Friend/Friend';

const SideFriends = (props) => {

	let FriendsElements = props.friendsData.map(f => <Friend adress={f.adress} name={f.name} />)

	return (
		<div>
			<div>Friends</div>
			<div>
				{FriendsElements}
			</div>
		</div>
	)
}
export default SideFriends

