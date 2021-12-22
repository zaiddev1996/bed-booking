import { React, useState } from 'react';
import { Modal, Input, Select } from 'antd';
import './AddRoomModal.css';
import { SaveOutlined } from '@ant-design/icons';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import IntegerIncrementer from '../IntegerIncrementer/IntegerIncrementer';
import ColorSelector from '../ColorSelector/ColorSelector';
const { TextArea } = Input;
export function AddRoomModal({ visible, changeVisibility }) {
	const [ loading, setLoading ] = useState(false);
	const [ numOfGuests, setNumOfGuests ] = useState(1);
	const [ selectedColor, setSelectedColor ] = useState('rgb(232 132 132)');

	const onChange = (e) => {
		console.log('Change:', e.target.value);
	};

	return (
		<Modal
			visible={visible}
			footer={null}
			centered
			title={null}
			destroyOnClose={true}
			onCancel={() => {
				changeVisibility();
			}}
			content={null}
			wrapClassName={'add-room-modal'}
			bodyStyle={{
				background: 'rgba(52, 52, 52, 0.0)',
				borderRadius: '8px'
			}}
			style={{
				backgroundColor: 'rgba(52, 52, 52, 0.0)'
			}}
		>
			<div className="container add-room-main">
				<div className="d-flex justify-content-between align-items-center">
					<span className={'add-room-text'}>Add room</span>
					<ButtonWithIcon
						text={'save'}
						onClick={() => {
							changeVisibility();
						}}
						startIcon={<SaveOutlined />}
						btnStyle="btn-save"
					/>
				</div>
				<div className="row add-room-content">
					<div className="col-sm-6 d-flex flex-column">
						<span className={'add-room-text'}>Basic Information</span>
						<div className={'seperator'} />
						<span className={'input-heading mt-3'}>Room name</span>
						<Input placeholder="Room name" className="add-room-input mt-2" />
						<span className={'input-heading mt-3'}>Room description</span>
						<TextArea showCount maxLength={500} autoSize={{ minRows: 4, maxRows: 4 }} onChange={onChange} />
						<span className={'input-heading mt-3'}>Room size</span>
						<Input placeholder="Room name" className="add-room-input mt-2" type="number" />
					</div>
					<div className="col-sm-6 d-flex flex-column">
						<span className={'add-room-text'}>Persons</span>
						<div className={'seperator'} />
						<span className={'input-heading mt-3'}>Number of guests</span>
						<IntegerIncrementer
							value={numOfGuests}
							incrementValue={() => {
								setNumOfGuests(numOfGuests + 1);
							}}
							decrementValue={() => {
								if (numOfGuests > 0) setNumOfGuests(numOfGuests - 1);
							}}
						/>
						<div className="mt-3 d-flex justify-content-between align-items-center">
							<span className={'input-heading'}>Mark the room with color</span>
							<div className="color-div" style={{ backgroundColor: selectedColor }} />
						</div>
						<ColorSelector
							colorSelect={(color) => {
								setSelectedColor(color);
							}}
							selectedColor={selectedColor}
							colorList={[
								'rgb(232 132 132)',
								'rgb(159 225 180)',
								'rgb(217 196 241)',
								'rgb(237 232 157)',
								'rgb(204 204 204)',
								'rgb(57 57 57)',
								'rgb(255 0 51)',
								'rgb(255 226 2)',
								'rgb(0 165 65)',
								'rgb(149 149 149)',
								'rgb(204 1 255)',
								'rgb(244 67 53)',
								'rgb(233 30 99)',
								'rgb(156 38 176)',
								'rgb(103 59 183)',
								'rgb(63 81 181)',
								'rgb(34 150 243)',
								'rgb(3 169 244)',
								'rgb(1 188 212)',
								'rgb(0 150 136)',
								'rgb(76 175 80)',
								'rgb(139 195 74)',
								'rgb(205 220 57)',
								'rgb(255 235 59)',
								'rgb(255 193 8)',
								'rgb(255 152 1)',
								'rgb(255 87 34)',
								'rgb(121 85 72)',
								'rgb(158 158 158)',
								'rgb(96 125 139)',
								'rgb(255 255 255)'
							]}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
}
