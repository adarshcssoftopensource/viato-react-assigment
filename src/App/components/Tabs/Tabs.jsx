import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';

const Tabs = ({ number, title, active, className, titleClassName, onClick }) => {
	return (
		<div className={styles.tabs}>
			<div onClick={onClick} className={className}>
				<p className={active && styles.active}>
					{number}
					<p className={titleClassName}>{title}</p>
				</p>
			</div>
		</div>
	);
};

Tabs.propTypes = {
	number: PropTypes.number || PropTypes.string,
	title: PropTypes.string,
	active: PropTypes.bool,
	className: PropTypes.string,
	titleClassName: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default Tabs;
