import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import { getPostsProfile } from '../../redux/profile-reducer'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 4
		}
		this.props.getPostsProfile(userId)
	}
	
	render() {
		return (
			<>
				<Profile post={this.props.post} />
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		post: state.profilePage.post,
	}
}

export default compose(
	connect(mapStateToProps, { getPostsProfile }),
	withRouter
)(ProfileContainer)
