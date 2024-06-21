import PropTypes from 'prop-types';
import { useState } from 'react';

import Input from '../Input';
import styles from './InputDateRange.module.scss';

const InputDateRange = ({ value, onChange }) => {
	const [isValid, setIsValid] = useState({ start: true, end: true });

	const validate = ({ newStart, newEnd }) => {
		// TODO: Add validation logic...
		// Check that dates are valid, not before today and that departure is > arrival
		const validation = { start: true, end: true };
		setIsValid(validation);
		onChange({ start: validation.start ? newStart : null, end: validation.end ? newEnd : null });
	};

	return (
		<div className={styles.wrapper}>
			<Input
				invalid={!isValid.start}
				type='date'
				value={value.start}
				width='143px'
				onChange={newStart => validate({ newStart, newEnd: value.end })}
			/>{' '}
			<p>until </p>
			<Input
				invalid={!isValid.end}
				type='date'
				value={value.end}
				width='143px'
				onChange={newEnd => validate({ newStart: value.start, newEnd })}
			/>
		</div>
	);
};

InputDateRange.propTypes = {
	value: PropTypes.shape({ start: PropTypes.string, end: PropTypes.string }).isRequired,
	onChange: PropTypes.func.isRequired
};

export default InputDateRange;
