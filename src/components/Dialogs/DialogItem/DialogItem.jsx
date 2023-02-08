import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
	return (
		<div className={s.item}>
			<NavLink to={"/dialogs/" + props.id}>
				<img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="" />
				{props.name}
			</NavLink></div>
	)
}


export default DialogItem