import React, { useState, useEffect } from 'react';
import './ChangeYearView.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const ChangeYearView = ({ year, increment, decrement }) => {
	const [ selectedYear, setSelectedYear ] = useState(year);
	useEffect(
		() => {
			setSelectedYear(year);
		},
		[ year ]
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
			<div className={'year-text'}>{selectedYear}</div>
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

export default ChangeYearView;
