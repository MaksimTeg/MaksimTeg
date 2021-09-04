import React from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
import { withRouter } from 'react-router-dom'
import { getCommentsProfile } from '../../redux/comments-reduser'
import { compose } from 'redux'

class CommentsContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 4
		}
		this.props.getCommentsProfile(userId)
	}

	render() {
		return (
			<>
				<Comments {...this.props} comments={this.props.comments} />
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		comments: state.commetnsPage.comments,
	}
}

export default compose(
	connect(mapStateToProps, { getCommentsProfile }),
	withRouter
)(CommentsContainer)
