import React from 'react'
import Spinner from '../Commons/Spinner/Spinner'
import s from './ProfileInfo.module.css'

const Profile = props => {
	if (!props.post) {
		return <Spinner />
	}
	return (
		<div className={s.profileInfo}>
			<div className={s.profileInfoContainer}>
				<div>{props.post.id}</div>
				<div>{props.post.title}</div>
				<div className={s.description}>{props.post.body}</div>
			</div>
		</div>
	)
}

export default Profile
