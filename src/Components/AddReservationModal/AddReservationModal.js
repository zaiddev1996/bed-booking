import { React, useState } from 'react';
import { Modal, Input, Select, Tabs, DatePicker } from 'antd';
import './AddReservationModal.css';
import { SaveOutlined } from '@ant-design/icons';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import IntegerIncrementer from '../IntegerIncrementer/IntegerIncrementer';
import ColorSelector from '../ColorSelector/ColorSelector';
import moment, { now } from 'moment';
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
export function AddReservationModal({ visible, changeVisibility }) {
	const [ loading, setLoading ] = useState(false);
	const [ numOfNights, setNumOfNights ] = useState(1);
	const [ dateFrom, setDateFrom ] = useState(moment());
	const [ dateTo, setDateTo ] = useState(moment().add(1, 'day'));
	const [ selectedPayType, setSelectedPayType ] = useState(1);

	function onChange(dates, dateStrings) {
		console.log('From: ', dates[0], ', to: ', dates[1]);
		console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
		setDateFrom(moment(dates[0]));
		setDateTo(moment(dates[1]));
	}
	function callback(key) {
		console.log(key);
	}

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
			wrapClassName={'add-reservation-modal'}
			bodyStyle={{
				background: 'rgba(52, 52, 52, 0.0)',
				borderRadius: '8px'
			}}
			style={{
				backgroundColor: 'rgba(52, 52, 52, 0.0)'
			}}
		>
			<div className="container add-reservation-main">
				<div className="d-flex justify-content-between align-items-center">
					<h1 className={'add-reservation-text'}>Add a reservation</h1>
					<ButtonWithIcon
						text={'save'}
						onClick={() => {
							changeVisibility();
						}}
						startIcon={<SaveOutlined />}
						btnStyle="btn-save"
					/>
				</div>
				<Tabs defaultActiveKey="1" onChange={callback}>
					<TabPane
						tab={
							<span className="d-flex justify-content-center align-items-center">
								<SaveOutlined />
								Booking
							</span>
						}
						key="1"
					>
						<div className="row">
							<div className="col-md-4">
								<h1 className={'add-reservation-text'}>Term</h1>
								<div className={'seperator'} />
								<h1 className={'input-heading mt-3'}>Select dates</h1>
								<RangePicker value={[ dateFrom, dateTo ]} format={dateFormat} onChange={onChange} />
								<h1 className={'input-heading mt-3'}>Number of nights</h1>
								<IntegerIncrementer
									value={moment(dateTo).diff(moment(dateFrom), 'day')}
									incrementValue={() => {
										setDateTo(moment(dateTo).add(1, 'day'));
									}}
									decrementValue={() => {
										if (moment(dateFrom).add(1, 'day').isBefore(dateTo))
											setDateTo(moment(dateTo).subtract(1, 'day'));
									}}
								/>
								<h1 className={'add-reservation-text mt-3'}>Booking status</h1>
								<div className={'seperator'} />
								<div
									className="payment-type-div d-flex mt-2 align-items-center"
									onClick={() => {
										setSelectedPayType(1);
									}}
									style={{
										backgroundColor: selectedPayType == 1 ? 'rgb(235 237 239)' : 'rgb(255 255 255)'
									}}
								>
									<div className="payment-color" style={{ backgroundColor: 'rgb(228 159 159)' }} />
									<span className="ms-2 payment-type-text">Lack of payment</span>
								</div>
								<div
									className="payment-type-div d-flex mt-2 align-items-center"
									onClick={() => {
										setSelectedPayType(2);
									}}
									style={{
										backgroundColor: selectedPayType == 2 ? 'rgb(235 237 239)' : 'rgb(255 255 255)'
									}}
								>
									<div className="payment-color" style={{ backgroundColor: 'rgb(182 145 193)' }} />
									<span className="ms-2 payment-type-text">Cancelled</span>
								</div>
								<div
									className="payment-type-div d-flex mt-2 align-items-center"
									onClick={() => {
										setSelectedPayType(3);
									}}
									style={{
										backgroundColor: selectedPayType == 3 ? 'rgb(235 237 239)' : 'rgb(255 255 255)'
									}}
								>
									<div className="payment-color" style={{ backgroundColor: 'rgb(206 206 206)' }} />
									<span className="ms-2 payment-type-text">Unavailable</span>
								</div>
								<h1 className={'add-reservation-text mt-2'}>Room</h1>
								<div className={'seperator'} />
								<Select defaultValue="room1" className="w-100 mt-2 mb-2">
									<Option value="room1">Room 1</Option>
									<Option value="room2">Room 2</Option>
									<Option value="room3">Room 3</Option>
									<Option value="room4">Room 4</Option>
								</Select>
							</div>
							<div className="col-md-4">
								<h1 className={'add-reservation-text'}>Price</h1>
								<div className={'seperator'} />
								<h1 className={'input-heading mt-3'}>Final price</h1>
								<Input suffix="EUR" type="number" />
								<h1 className={'input-heading mt-3'}>Down payment</h1>
								<Input suffix="EUR" type="number" />
								<h1 className={'input-heading mt-3'}>Payment on place</h1>
								<Input suffix="EUR" disabled />
							</div>
						</div>
					</TabPane>
					<TabPane
						tab={
							<span className="d-flex justify-content-center align-items-center">
								<SaveOutlined />
								Client
							</span>
						}
						key="2"
					>
						<div className="row">
							<div className="col-md-4">
								<h1 className={'add-reservation-text'}>Main guest</h1>
								<div className={'seperator'} />
								<h1 className={'input-heading mt-3'}>Name</h1>
								<Input />
								<h1 className={'input-heading mt-3'}>Phone</h1>
								<Input />
							</div>
						</div>
					</TabPane>
					<TabPane
						tab={
							<span className="d-flex justify-content-center align-items-center">
								<SaveOutlined />
								Details
							</span>
						}
						key="3"
					>
						<div className="row">
							<div className="col-md-4">
								<h1 className={'add-reservation-text'}>Other</h1>
								<div className={'seperator'} />
								<h1 className={'input-heading mt-3'}>Notes</h1>
								<TextArea rows={4} />
							</div>
						</div>
					</TabPane>
				</Tabs>
			</div>
		</Modal>
	);
}
