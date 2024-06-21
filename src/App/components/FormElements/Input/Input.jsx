import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ width = null, label = '', type = 'text', invalid = false, value = null, onChange, ...props }) => {
	return (
		<div className={styles.wrapper}>
			{label.length > 0 && <div className={styles.label}>{label}</div>}
			<input
				className={styles.input}
				data-invalid={invalid}
				style={width ? { width } : {}}
				type={type}
				value={value}
				onChange={e => onChange(e.target.value)}
				{...props}
			/>
		</div>
	);
};

Input.propTypes = {
	width: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.oneOf(['text', 'number', 'date']),
	invalid: PropTypes.node,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default Input;
