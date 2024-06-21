import React, { useEffect, useState } from 'react';
import Button from '../../../FormElements/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { hotelActions, hotelSelectors } from '../../../../../redux/ducks/hotelcheckout';
import styles from './Checkout.SecondStep.module.scss';

const CheckoutSecondStep = () => {
	const [roomsData, setRoomData] = useState();

	// Fetch hotel data on component mount
	useEffect(() => {
		fetch('http://localhost:5173/hotelData.json')
			.then(res => res.json())
			.then(json => {
				setRoomData([json]);
			});
	}, []);

	return (
		<div className={styles.HotelCheckout_second_step}>
			{roomsData?.map((item, idx) => (
				<div key={idx + '---'}>
					{Object.keys(item.rooms).map(roomId => (
						<div key={roomId} className={styles.options}>
							<p>{item.rooms[roomId].name}</p>
							{item.rooms[roomId].rates.map(rateId => (
								// Render Option component for each rate
								<Option
									key={rateId}
									rateId={rateId}
									title={item.rooms[roomId].name}
									label={item.rates[rateId].name}
									price={item.rates[rateId].price}
								/>
							))}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

const Option = ({ label, title, price, rateId }) => {
	const dispatch = useDispatch();
	const { selectedOption } = useSelector(hotelSelectors.getFormData);

	// Handle click event to select an option
	const handleClick = () => {
		dispatch(hotelActions.selectOption(label, title, price, rateId));
	};

	return (
		<div>
			<p>{label}</p>
			<p>{price} $</p>
			{/* Render a button to select the option */}
			<Button label='Select' onClick={handleClick} type={selectedOption?.rateId === rateId ? 'primary' : 'secondary'} />
		</div>
	);
};
export default CheckoutSecondStep;
