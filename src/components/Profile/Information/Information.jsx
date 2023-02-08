import React from 'react';
import s from './Information.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";


const Information = (props) => {
	if (!props.profile) {
		 return <Preloader />
	}

	return(
		<div className={s.Information}>
			<div className={s.avatar}>
				<img src= {props.profile.photos.large} />
				<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
			</div>

		</div>
	)
}
export default Information;