import React from "react";
import "./rating.css";

export default function Rating() {
	return (
		<div className="rating-container">
			<h1 className="title">How did we do?</h1>
			<p className="description">
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<div className="rating-choice">
				<span className="rate">1</span>
				<span className="rate">2</span>
				<span className="rate">3</span>
				<span className="rate">4</span>
				<span className="rate">5</span>
			</div>
		</div>
	);
}
