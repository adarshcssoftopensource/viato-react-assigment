import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onClick, type = 'primary', label, disabled = false }) => {
	return (
		<button className={styles.button} data-disabled={disabled} data-type={type} type='button' onClick={onClick}>
			{label}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool
};

export default Button;
