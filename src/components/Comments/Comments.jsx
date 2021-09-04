import React from 'react'
import Spinner from '../Commons/Spinner/Spinner'
import s from './comments.module.css'

/*as
"postId": 1,
"email": 1,
"name": "",
"body": ""
*/
const Comments = props => {
	if (!props.comments) {
		return <Spinner />
	}
	return (
		<>
			{props.comments.map(u => (
				<div className={s.posts_content} key={u.id}>
					<h3>postId:{u.postId}</h3>
					<div className={s.avatar}>
						<img
							src={
								u.avatar != null
									? u.avatar
									: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwAAVsLd7PDyf9XTI_XHd-F-w_lfF8-2r9Q&usqp=CAU'
							}
							alt='logo1'
						/>
					</div>
					<h3>email:{u.email}</h3>
					<h3>name:{u.name}</h3>
					<div>body{u.body}</div>
				</div>
			))}
		</>
	)
}
export default Comments
