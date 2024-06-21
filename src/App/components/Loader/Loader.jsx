import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.bars}>
				<div className={styles.loadingBar} />
				<div className={styles.loadingBar} />
				<div className={styles.loadingBar} />
				<div className={styles.loadingBar} />
				<div className={styles.loadingBar} />
			</div>
		</div>
	);
};

export default Loader;
