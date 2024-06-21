import React from 'react';
import Input from '../../../FormElements/Input';
import { useDispatch, useSelector } from 'react-redux';
import { hotelActions, hotelSelectors } from '../../../../../redux/ducks/hotelcheckout';
import styles from './Checkout.ThirdStep.module.scss';

const CheckoutThirdStep = () => {
	const dispatch = useDispatch();
	const { firstName, lastName, street, houseNo, zip, city } = useSelector(hotelSelectors.getFormData);

	// Function to handle input changes and update the form data
	const handleInputChange = (value, key) => {
		dispatch(hotelActions.updateInput(value, key));
	};
	
	return (
		<div className={styles.HotelCheckout_third_step}>
			<div className={styles.user_details}>
				<label>First name, lastname</label>
				<div>
					<Input width={'188px'} type='text' value={firstName} onChange={value => handleInputChange(value, 'firstName')} />
					<Input width={'233px'} type='text' value={lastName} onChange={value => handleInputChange(value, 'lastName')} />
				</div>
			</div>
			<div className={styles.user_details}>
				<label>Street, no.</label>
				<div>
					<Input width={'237px'} type='text' value={street} onChange={value => handleInputChange(value, 'street')} />
					<Input width={'89px'} type='text' value={houseNo} onChange={value => handleInputChange(value, 'houseNo')} />
				</div>
			</div>
			<div className={styles.user_details}>
				<label>ZIP ,city</label>
				<div>
					<Input width={'118px'} type='text' value={zip} onChange={value => handleInputChange(value, 'zip')} />
					<Input width={'208px'} type='text' value={city} onChange={value => handleInputChange(value, 'city')} />
				</div>
			</div>
		</div>
	);
};

export default CheckoutThirdStep;
