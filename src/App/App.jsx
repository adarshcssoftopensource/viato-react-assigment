import HotelCheckoutComponent from './components/HotelCheckoutComponent';
import Navbar from './components/Navbar';
import './App.scss';
import { Toaster } from 'react-hot-toast';

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<HotelCheckoutComponent />
				<Toaster />
			</main>
		</>
	);
};

export default App;
