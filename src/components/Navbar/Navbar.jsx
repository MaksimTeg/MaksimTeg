import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/users' activeClassName={s.activeLink}>
					All Posts
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/posts' activeClassName={s.activeLink}>
					Post Id
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/comments' activeClassName={s.activeLink}>
					Comments
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
