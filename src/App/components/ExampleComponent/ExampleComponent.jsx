import { useDispatch, useSelector } from 'react-redux';

import { exampleActions, exampleSelectors } from '../../../redux/ducks/example';
import styles from './ExampleComponent.module.scss';

const ExampleComponent = () => {
	const dispatch = useDispatch();

	const count = useSelector(exampleSelectors.getCounter);

	return (
		<div className={styles.exampleComponent}>
			<div className={styles.info}>
				Amount of clicks: <div className={styles.amount}>{count}</div>
			</div>
			<button className={styles.button} type='button' onClick={() => dispatch(exampleActions.setCounter(count + 1))}>
				Click me!
			</button>
		</div>
	);
};

export default ExampleComponent;
