import React from 'react';
import './SolidPrimaryButton.css';
import { Button } from 'antd';

export default function ButtonWithIcon({ text, className, btnStyle, onClick, type, loading, startIcon }) {
	return (
		<div className={`solid-btn-main ${className}`}>
			<Button
				shape={'round'}
				className={`custom-btn-solid ${btnStyle}`}
				disabled={loading}
				onClick={onClick}
				type={type}
				loading={loading}
				size={'large'}
			>
				<div className="d-flex justify-content-center align-items-center">
					{startIcon}
					<div className="ms-2">{text}</div>
				</div>
			</Button>
		</div>
	);
}
