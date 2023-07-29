import React, { useState } from 'react';
import IconStar from '../assets/icon-star.svg';
import styles from './rating.module.css';

export default function Rating() {
	const [selectedOption, setSelectedOption] = useState<number | null>(null);

	// console.log(selectedOption);

	const options = [
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' },
		{ value: 4, label: '4' },
		{ value: 5, label: '5' },
	];

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(parseInt(event.target.value));
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

			<button>SUBMIT</button>
		</section>
	);
}
