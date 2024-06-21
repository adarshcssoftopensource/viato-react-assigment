import React from 'react';
import InputDateRange from '../../../FormElements/InputDateRange/InputDateRange';
import Input from '../../../FormElements/Input';
import { useDispatch, useSelector } from 'react-redux';
import { hotelActions, hotelSelectors } from '../../../../../redux/ducks/hotelcheckout';
import styles from './Checkout.FirstStep.module.scss';

const CheckoutFirstStep = () => {
	const dispatch = useDispatch();
	const { startDate, endDate, adults, children } = useSelector(hotelSelectors.getFormData);

	// Handle date change event
	const handleDateChange = e => {
		dispatch(hotelActions.updateDate(e.start, e.end));
	};

	// Handle input change event
	const handleInputChange = (value, key) => {
		dispatch(hotelActions.updateInput(value, key));
	};

	return (
		<div className={styles.HotelCheckout_first_step}>
			<div>
				<p>Travel Period</p>
				<div className={styles.input_wrapper}>
					{/* Render InputDateRange component for selecting date range */}
					<InputDateRange value={{ start: startDate, end: endDate }} onChange={handleDateChange} />
				</div>
			</div>
			<div>
				<p>Number of guests</p>
				<div className={styles.input_wrapper}>
					{/* Render Input components for entering number of adults and children */}
					<Input
						placeholder='0'
						width={'81px'}
						type='text'
						onChange={value => handleInputChange(value, 'adults')}
						value={adults}
						label='Adults'
					/>
					<Input
						placeholder='0'
						width={'81px'}
						type='text'
						onChange={value => handleInputChange(value, 'children')}
						value={children}
						label='Children'
					/>
				</div>
			</div>
		</div>
	);
};

export default CheckoutFirstStep;
