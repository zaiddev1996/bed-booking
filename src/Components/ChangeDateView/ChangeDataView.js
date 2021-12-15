import React, { useState, useEffect } from 'react';
import './ChangeDateView.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const ChangeDateView = ({ dateStart, dateEnd, increment, decrement }) => {
	const [ selectedStartDate, setSelectedStartDate ] = useState(dateStart);
	const [ selectedEndDate, setSelectedEndDate ] = useState(dateEnd);
	useEffect(
		() => {
			setSelectedStartDate(dateStart);
			setSelectedEndDate(dateEnd);
		},
		[ dateStart, dateEnd ]
	);
	return (
		<div className={'d-flex year-view-main align-items-center'}>
			<div
				className={'arrows'}
				onClick={() => {
					decrement();
				}}
			>
				<LeftOutlined className={'arrow-logo'} />
			</div>
			<div className={'year-text'}>
				{selectedStartDate} - {selectedEndDate}
			</div>
			<div
				className={'arrows'}
				onClick={() => {
					increment();
				}}
			>
				<RightOutlined className={'arrow-logo'} />
			</div>
		</div>
	);
};

export default ChangeDateView;
