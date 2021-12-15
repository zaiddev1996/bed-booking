import React, { useState, useEffect } from 'react';
import './MonthPillsView.css';

const MonthPillsView = ({ month, onMonthSelect }) => {
	const [ selectedMonth, setSelectedMonth ] = useState(month);

	useEffect(
		() => {
			setSelectedMonth(month);
		},
		[ month ]
	);

	return (
		<div className={'d-flex month-pills-main flex-wrap'}>
			<div
				className={selectedMonth == 1 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(1);
					onMonthSelect(1);
				}}
			>
				Jan
			</div>
			<div
				className={selectedMonth == 2 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(2);
					onMonthSelect(2);
				}}
			>
				Feb
			</div>
			<div
				className={selectedMonth == 3 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(3);
					onMonthSelect(3);
				}}
			>
				Mar
			</div>
			<div
				className={selectedMonth == 4 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(4);
					onMonthSelect(4);
				}}
			>
				Apr
			</div>
			<div
				className={selectedMonth == 5 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(5);
					onMonthSelect(5);
				}}
			>
				May
			</div>
			<div
				className={selectedMonth == 6 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(6);
					onMonthSelect(6);
				}}
			>
				Jun
			</div>
			<div
				className={selectedMonth == 7 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(7);
					onMonthSelect(7);
				}}
			>
				Jul
			</div>
			<div
				className={selectedMonth == 8 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(8);
					onMonthSelect(8);
				}}
			>
				Aug
			</div>
			<div
				className={selectedMonth == 9 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(9);
					onMonthSelect(9);
				}}
			>
				Sep
			</div>
			<div
				className={selectedMonth == 10 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(10);
					onMonthSelect(10);
				}}
			>
				Oct
			</div>
			<div
				className={selectedMonth == 11 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(11);
					onMonthSelect(11);
				}}
			>
				Nov
			</div>
			<div
				className={selectedMonth == 12 ? 'month selected-month' : 'month'}
				onClick={() => {
					setSelectedMonth(12);
					onMonthSelect(12);
				}}
			>
				Dec
			</div>
		</div>
	);
};

export default MonthPillsView;
