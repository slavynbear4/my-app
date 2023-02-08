import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
	<div>
		<img src={props.adress} alt="" />
		{props.name}
	</div >
}

export default Friend



