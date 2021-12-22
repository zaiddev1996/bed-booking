import React from 'react';
import './ColorSelector.css';
import { CheckOutlined } from '@ant-design/icons';

const ColorSelector = ({ colorList, colorSelect, selectedColor }) => {
	return (
		<div className={'color-selector d-flex flex-wrap gap-3 mt-2'}>
			{colorList.map((color, index) => (
				<div
					className="color-div d-flex align-items-center justify-content-center"
					style={{ backgroundColor: color }}
					onClick={() => {
						colorSelect(color);
					}}
				>
					{selectedColor == color ? (
						<CheckOutlined style={{ color: 'rgb(255 255 255)', fontWeight: '700' }} />
					) : (
						<div />
					)}
				</div>
			))}
		</div>
	);
};

export default ColorSelector;
