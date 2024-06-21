import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.logo} to={'/'}>
				Viato Test Hotel <p>book online</p>
			</Link>
			<Link className={styles.contact_link} to={'/'}>
				Contact / help
			</Link>
		</nav>
	);
};

export default Navbar;
