import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../accets/images/206853.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toogleFollowingProgress, unfollowThunk} from "../../redux/users_reducer";
import {userAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
			<span>
				<div>
                    <NavLink to={'/profile/' + u.id}>
					    <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.photo}/>
                    </NavLink>
				</div>
				<div>
					{u.followed
                        ? <button disabled={props.followingInProgress.some( id => id===u.id)} onClick={() => {

                            props.unfollowThunk(u.id)



                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some( id => id===u.id)} onClick={() => {

                            props.followThunk(u.id)

                        }}>Follow</button>}
				</div>
			</span>
                <span>
				<span>
					<div>{u.name}</div>
					<div>{u.status}</div>
				</span>
				<span>
					<div>{'u.location.country'}</div>
					<div>{'u.location.city'}</div>
				</span>
			</span>
            </div>)
        }
    </div>
}



export default Users;