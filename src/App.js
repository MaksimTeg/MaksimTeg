import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import CommentsContainer from './components/Comments/CommentsContainer'

class App extends Component {
	render() {
		return (
			<div className='app-wrapper'>
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/users/' render={() => <UsersContainer />} />
					<Route path='/posts/:userId?' render={() => <ProfileContainer />} />
					<Route path='/comments/' render={() => <CommentsContainer />} />
				</div>
			</div>
		)
	}
}
export default withRouter(App)
