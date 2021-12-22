import React, { useState } from 'react';
import './IntegerIncrementer.css';

const IntegerIncrementer = ({ value, incrementValue, decrementValue }) => {
	return (
		<div className="int-increment-main d-flex justify-content-between align-items-center">
			<div
				className="increment-btn"
				onClick={() => {
					decrementValue();
				}}
			>
				-
			</div>
			<span>{value}</span>
			<div
				className="increment-btn"
				onClick={() => {
					incrementValue();
				}}
			>
				+
			</div>
		</div>
	);
};

export default IntegerIncrementer;
