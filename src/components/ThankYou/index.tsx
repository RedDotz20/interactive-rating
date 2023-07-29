import { useLocation } from 'react-router-dom';

export default function ThankYou() {
	const location = useLocation();

	return (
		<div>
			<h1>Thank You Page</h1>
			<p>{location.state.rating}</p>
		</div>
	);
}
