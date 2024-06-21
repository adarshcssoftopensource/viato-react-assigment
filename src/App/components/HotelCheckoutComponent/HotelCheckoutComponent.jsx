import React from 'react';
import CheckoutFirstStep from './Stepper/Checkout-First-Step/CheckoutFirstStep';
import CheckoutSecondStep from './Stepper/Checkout-Second-Step';
import CheckoutThirdStep from './Stepper/Checkout-Third-Step';
import Tabs from '../Tabs';
import styles from './HotelCheckout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hotelActions, hotelSelectors } from '../../../redux/ducks/hotelcheckout';
import Sidebar from './Sidebar';

// Define the process steps for the hotel checkout
const hotelCheckoutProcess = [{ title: 'Your travel planning' }, { title: 'Available room categories' }, { title: 'Billing Address' }];
const hotelFinishProcess = ['', '', ''];
const steps = [<CheckoutFirstStep />, <CheckoutSecondStep />, <CheckoutThirdStep />];

// Define the HotelCheckoutComponent functional component
const HotelCheckoutComponent = () => {
	const dispatch = useDispatch();
	const { currentStep } = useSelector(hotelSelectors.getFormData);

	return (
		<div className={styles.hotelCheckoutWrapper}>
			<div className={styles.main_wrapper}>
				<div className={styles.tabbing}>
					<div key={JSON.stringify(currentStep < hotelFinishProcess.length)} className={styles.tab_inner_wrappper}>
						{/* Map through the hotelCheckoutProcess to render Tabs component */}
						{hotelCheckoutProcess.map(({ title }, index) => (
							<Tabs
								onClick={() => {
									// Dispatch setStep action when a tab is clicked
									if (currentStep >= index) dispatch(hotelActions.setStep(index));
								}}
								key={index}
								title={title}
								number={index + 1}
								active={index === currentStep}
							/>
						))}
					</div>
					{/* Render the current step component based on the currentStep */}
					<div className={styles.inner_content}>{steps[currentStep]}</div>
				</div>
				<Sidebar />
			</div>
		</div>
	);
};

export default HotelCheckoutComponent;
