import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconStar from '../../assets/icon-star.svg';
import styles from './rating.module.css';

export default function Rating() {
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const navigate = useNavigate();

	const options = Array.from({ length: 5 }, (_, index) => ({
		value: index + 1,
		label: String(index + 1),
	}));

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(parseInt(event.target.value));
	};

	const hanldleRatingResponse = (event: React.MouseEvent<HTMLElement>) => {
		if (selectedOption) {
			navigate('/thank-you', { state: { rating: selectedOption } });
		}
	};

	return (
		<section className={styles.ratingContainer}>
			<img
				src={IconStar}
				alt="IconStar"
			/>
			<h1>How did we do?</h1>
			<p>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>

			<div className={styles.radioContainer}>
				{options.map((option) => (
					<React.Fragment key={option.value}>
						<input
							key={option.value}
							type="radio"
							id={`rating_${option.value}`}
							name="rating"
							value={option.value}
							checked={selectedOption === option.value}
							onChange={handleOptionChange}
						/>
						<label htmlFor={`rating_${option.value}`}>{option.label}</label>
					</React.Fragment>
				))}
			</div>

			<button onClick={hanldleRatingResponse}>SUBMIT</button>
		</section>
	);
}
