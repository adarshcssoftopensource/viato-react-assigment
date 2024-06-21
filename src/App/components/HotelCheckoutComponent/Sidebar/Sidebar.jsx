import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Sidebar.module.scss';
import Button from '../../FormElements/Button/Button';
import { hotelActions } from '../../../../redux/ducks/hotelcheckout';
import toast from 'react-hot-toast';

const Sidebar = () => {
	// Retrieve necessary data from the Redux store
	const dispatch = useDispatch();
	const { currentStep, startDate, endDate, adults, children, selectedOption, firstName, lastName, street, houseNo, city, zip } =
		useSelector(state => state.hotel);

	// Function to handle changing steps in the checkout process
	const handleStepChange = type => {
		if (type === 'inc') {
			dispatch(hotelActions.setStep(currentStep + 1));
		} else if (type === 'dec') {
			dispatch(hotelActions.setStep(currentStep - 1));
		}
	};

	// Function to handle booking the hotel
	const handleBook = () => {
		toast.success('Booked Successfully!');

		setTimeout(() => {
			dispatch(hotelActions.resetState());
			dispatch(hotelActions.setStep(0));
		}, 2500);
	};

	// Function to render the appropriate buttons based on the current step
	const renderStepChangeButton = step => {
		if (step === 1) {
			return (
				<>
					<Button type='ghost' onClick={() => handleStepChange('dec')} label='Back' />
					<Button disabled={!selectedOption} onClick={() => handleStepChange('inc')} label='Next' />
				</>
			);
		} else if (step === 2) {
			return (
				<>
					<Button type='ghost' onClick={() => handleStepChange('dec')} label='Back' />
					<Button
						disabled={!Boolean(firstName && lastName && street && houseNo && zip && city)}
						label='Book Now'
						onClick={handleBook}
					/>
				</>
			);
		} else {
			return (
				<Button
					disabled={!startDate || !endDate || !adults || !children}
					type='primary'
					onClick={() => handleStepChange('inc')}
					label='Next'
				/>
			);
		}
	};
	return (
		<div className={styles.right_sidebar}>
			<>
				<h2>Your selection</h2>
				<div className={styles.booking_customer}>
					<h5>Travel period</h5>
					{startDate && endDate && (
						<p>
							{startDate} - {endDate}
						</p>
					)}
				</div>
				<div className={styles.booking_customer}>
					<h5>Number of guests</h5>
					<p>{children && `${children} children`} </p>
					<p>{adults && `${adults} adult`} </p>
				</div>
				{(currentStep === 1 || currentStep === 2) && (
					<div className={styles.booking_customer}>
						<h5>Desired room category</h5>
						{!selectedOption ? (
							<p>
								<i>Please select a rate of a room category!</i>
							</p>
						) : (
							<p>{selectedOption?.label}</p>
						)}
						<ul>
							<li>
								<p>{selectedOption?.title}</p>
								<p>{selectedOption?.price && `${selectedOption?.price} €`}</p>
							</li>
						</ul>
					</div>
				)}
				{currentStep === 2 && (
					<>
						<div className={styles.booking_customer}>
							<h5>Billing address</h5>
							<p>{!firstName && <i>Please enter your billing address!</i>}</p>
							<p>
								{firstName} {lastName}
							</p>
							<p>
								{street} {houseNo}
							</p>
							<p>
								{zip} {city}
							</p>
						</div>

						<div className={styles.price_detail}>
							<p>Total price</p>
							<h4>{selectedOption?.price} €</h4>
						</div>
					</>
				)}

				{/* Render the appropriate buttons based on the current step */}
				{renderStepChangeButton(currentStep)}
			</>
		</div>
	);
};

export default Sidebar;
