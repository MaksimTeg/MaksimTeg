import React from 'react'
import s from './Users.module.css'
import userDefaultAvatar from '../../assets/images/default-avatar-icon.png'
import { NavLink } from 'react-router-dom'
	
let Users = props => {
	let usersElements = props.users.map(u => {
		return (
			<div className={s.userItem}>
				<div>
					<NavLink to={'/posts/' + u.id}>
						<img className={s.avatar} src={userDefaultAvatar} alt='' />
					</NavLink>
				</div>
				<div>{u.id} </div>
				<div>{u.title} </div>
				<div>{u.body} </div>
				<div>
					<NavLink to={'/posts/'+ u.id +'/commets'}>
						<button>Comments</button>
					</NavLink>
				</div>
			</div>
		)
	})

	return (
		<div className={s.users}>
			<h2>User's Posts List</h2>
			<div>{usersElements}</div>
		</div>
	)
}

export default Users
