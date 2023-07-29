import { useLocation } from 'react-router-dom';
import illustration from '../../assets/illustration-thank-you.svg';
import './thankyou.module.css';

export default function ThankYou() {
	const location = useLocation(),
		ratingSelected = location.state.rating;

	return (
		<section>
			<img
				src={illustration}
				alt="Thank You"
			/>
			<h2>You selected {ratingSelected} out of 5</h2>
			<h1>Thank you!</h1>
			<p>
				We appreciate you taking the time to give a rating. if you ever need
				more support, don't hesitate to get in touch!
			</p>
		</section>
	);
}
