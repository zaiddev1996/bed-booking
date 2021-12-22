import React, { useState } from 'react';
import './Settings.css';
import { SaveOutlined } from '@ant-design/icons';
import { Select, Input, Tabs, TimePicker, Tooltip, Radio, Tag, Switch } from 'antd';
import {
	FolderViewOutlined,
	ControlOutlined,
	PlusOutlined,
	DeleteTwoTone,
	InfoCircleOutlined
} from '@ant-design/icons';
import { AddReservationModal } from '../../Components/AddReservationModal/AddReservationModal';
import ButtonWithIcon from '../../Components/Buttons/ButtonWithIcon';
import IntegerIncrementer from '../../Components/IntegerIncrementer/IntegerIncrementer';
import moment, { now } from 'moment';

const format = 'HH:mm';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

const Settings = () => {
	const [ pageSize, setPageSize ] = useState(5);
	const [ paymentMethodsList, setPaymentMethodsList ] = useState([ 'test', 'test' ]);
	const [ dateError, setDateError ] = useState(false);
	const [ timeError, setTimeError ] = useState(false);

	const options = [
		{ value: 'From' },
		{ value: 'To' },
		{ value: 'Arrival' },
		{ value: 'Departure' },
		{ value: 'No. of days' },
		{ value: 'Adults' },
		{ value: 'Children' },
		{ value: 'Price per day' },
		{ value: 'Final price' },
		{ value: 'Payment on place' },
		{ value: 'Booking status' },
		{ value: 'Deposit' },
		{ value: 'Local tax' },
		{ value: 'Waiting for payment time' },
		{ value: 'Waiting for payment time in case of reminder' },
		{ value: 'Notes' },
		{ value: 'Reservation No.' },
		{ value: 'Registration' },
		{ value: 'Entrance code' },
		{ value: 'Guest' },
		{ value: 'Phone' },
		{ value: 'Email' },
		{ value: 'Board' },
		{ value: 'Down payment' },
		{ value: 'Advance payment' },
		{ value: 'Show provenance' }
	];

	function tagRender(props) {
		const { label, value, closable, onClose } = props;
		const onPreventMouseDown = (event) => {
			event.preventDefault();
			event.stopPropagation();
		};
		return (
			<Tag
				color={'rgb(0 165 65)'}
				onMouseDown={onPreventMouseDown}
				closable={closable}
				onClose={onClose}
				style={{ marginRight: 5, margin: 5, padding: '5px', borderRadius: '4px', fontWeight: '700' }}
			>
				{label}
			</Tag>
		);
	}

	return (
		<div className={'settings-main'}>
			<div className="d-flex justify-content-between align-items-center flex-wrap">
				<span className={'settings-heading mb-2'}>Settings</span>
				<ButtonWithIcon
					text={'save'}
					onClick={() => {
						// changeVisibility();
					}}
					startIcon={<SaveOutlined />}
					btnStyle="btn-save"
				/>
			</div>
			<Tabs defaultActiveKey="1">
				<TabPane
					tab={
						<span className="d-flex justify-content-center align-items-center">
							<ControlOutlined />
							General
						</span>
					}
					key="1"
				>
					<div className="d-flex flex-column align-items-start">
						<h1 className={'settings-text'}>Cancel Booking</h1>
						<div className={'seperator'} />
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-3">
								<h1 className={'input-heading'}>Free</h1>
							</div>
							<div className="col-md-7 d-flex align-items-center flex-wrap">
								<span className={'me-4 mt-3'}>To</span>
								<div className="mt-md-3 mt-1  incrementer-div me-3 left-marg">
									<IntegerIncrementer value="0" incrementValue={() => {}} decrementValue={() => {}} />
								</div>

								<span className={'text-desc mt-3'}>days (before commencement date of booking)</span>
							</div>
						</div>
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-3">
								<h1 className={'input-heading'}>Paid</h1>
							</div>
							<div className="col-md-7 d-flex align-items-center flex-wrap">
								<span className={'me-4 mt-3 from-text'}>From</span>
								<div className="mt-md-3 mt-1  incrementer-div me-3">
									<IntegerIncrementer value="0" incrementValue={() => {}} decrementValue={() => {}} />
								</div>

								<span className={'text-desc mt-3'}>days (before commencement date of booking)</span>
							</div>
						</div>
						<h1 className={'settings-text mt-3'}>Booking form</h1>
						<div className={'seperator'} />
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								<h1 className={'input-heading'}>Check-in</h1>
							</div>
							<div className="col-md-7 d-flex align-items-center flex-wrap">
								<div className="mt-md-4 mt-1">
									<span className={'me-4 from-text'}>From</span>
									<TimePicker
										defaultValue={moment('12:08', format)}
										format={format}
										className="me-2"
									/>
								</div>
								<div className="mt-md-4 mt-1">
									<span className={'me-4 from-text'}>To</span>
									<TimePicker
										defaultValue={moment('12:08', format)}
										format={format}
										className="to-time-picker"
									/>
								</div>
							</div>
						</div>
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								<h1 className={'input-heading'}>Form of pre-payment</h1>
							</div>
							<div className="col-md-7 mt-md-4 mt-1">
								<div className="select-pre-payment">
									<Select defaultValue="down" className="w-100">
										<Option value="down">Down Payment</Option>
										<Option value="advance">Advance Payment</Option>
									</Select>
								</div>
							</div>
						</div>
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								<h1 className={'input-heading'}>Payment method</h1>
							</div>
							<div className="col-md-7 d-flex flex-column align-items-start flex-wrap mt-md-4 mt-1">
								<Search
									placeholder="Enter name"
									enterButton
									onSearch={(val) => {
										if (val.length > 0) {
											setPaymentMethodsList(paymentMethodsList.concat(val));
										}
									}}
									className="select-pre-payment"
									enterButton={<PlusOutlined style={{ paddingBottom: '5px', fontWeight: '700' }} />}
								/>
							</div>
						</div>
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								{/* <h1 className={'input-heading'}>Payment method</h1> */}
							</div>
							<div className="col-md-7 d-flex flex-column align-items-start">
								{paymentMethodsList.map((payMethod, index) => (
									<div className="select-pre-payment w-100">
										<div className="w-100 d-flex justify-content-between mt-2">
											<span>{payMethod}</span>
											<DeleteTwoTone
												twoToneColor="red"
												onClick={() => {
													setPaymentMethodsList(
														paymentMethodsList.filter((value, valIndex) => {
															return valIndex != index;
														})
													);
												}}
											/>
										</div>
										<div className={'seperator'} />
									</div>
								))}
							</div>
						</div>
						<h1 className={'settings-text mt-3'}>Time format</h1>
						<div className={'seperator'} />
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								<h1 className={'input-heading'}>Date format</h1>
							</div>
							<div className="col-md-7 d-flex flex-column align-items-start flex-wrap mt-md-4 mt-1">
								<Input
									suffix={
										<Tooltip title="Valid date formats: YYYY-DD-MM, YYYY-DD-MMM, YYYY-MM-DD">
											<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
										</Tooltip>
									}
									defaultValue="yyyy-MM-DD"
									placeholder="Enter name"
									enterButton
									className="select-pre-payment"
									onChange={(val) => {
										setDateError(moment(moment().format(val.target.value)).isValid());
									}}
								/>
								{/* <span style={{ color: 'red' }} className={dateError ? 'invisible' : 'visible'}>
									invalid format
								</span> */}
							</div>
						</div>
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								<h1 className={'input-heading'}>Hour format</h1>
							</div>
							<div className="col-md-7 d-flex flex-column align-items-start flex-wrap mt-md-4 mt-1">
								<Input
									suffix={
										<Tooltip title="Valid formats:
                                        sdfs">
											<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
										</Tooltip>
									}
									defaultValue="hh:mm:sss"
									placeholder="Enter name"
									enterButton
									className="select-pre-payment"
									onChange={(val) => {
										setTimeError(moment(moment().format(val.target.value)).isValid());
									}}
								/>
								{/* <span style={{ color: 'red' }} className={timeError ? 'invisible' : 'visible'}>
									invalid format
								</span> */}
							</div>
						</div>
						<div className="row w-100">
							<div className="col-md-5 d-flex align-items-center mt-4">
								<h1 className={'input-heading'}>Preview</h1>
							</div>
							<div className="col-md-7 d-flex flex-column align-items-start flex-wrap mt-md-4 mt-1">
								<Input
									disabled
									defaultValue={moment().format('YYYY-MM-DD HH:MM')}
									placeholder="Enter name"
									enterButton
									onSearch={(val) => {
										setPaymentMethodsList(paymentMethodsList.concat(val));

										console.log(paymentMethodsList);
									}}
									className="select-pre-payment"
									onChange={(val) => {
										setDateError(moment(moment().format(val.target.value)).isValid());
									}}
								/>
							</div>
						</div>
					</div>
				</TabPane>
				<TabPane
					tab={
						<span className="d-flex justify-content-center align-items-center">
							<FolderViewOutlined />
							Customization
						</span>
					}
					key="2"
				>
					<div className="d-flex flex-column align-items-start">
						<h1 className={'settings-text'}>Calendar</h1>
						<div className={'seperator'} />
						<div className="row w-100 d-flex">
							<div className="col-md-5 d-flex align-items-center mt-3">
								<h1 className={'input-heading'}>Booking appereance</h1>
							</div>
							<div className="col-md-7 mt-md-3 mt-1 d-flex align-items-center flex-wrap">
								<Radio.Group value={1}>
									<Radio value={1}>Rhombi</Radio>
									<Radio value={2}>Rectangles</Radio>
								</Radio.Group>
							</div>
						</div>
						<h1 className={'settings-text mt-4'}>Reservation labels</h1>
						<div className={'seperator'} />
						<Select
							mode="multiple"
							showArrow
							tagRender={tagRender}
							defaultValue={[ 'gold', 'cyan' ]}
							style={{ width: '100%' }}
							options={options}
						/>
						<h1 className={'settings-text mt-4'}>Summary</h1>
						<div className={'seperator'} />
						<div className="row w-100 d-flex">
							<div className="col-sm-5 d-flex align-items-center mt-3">
								<h1 className={'input-heading'}>Number of guests</h1>
							</div>
							<div className="col-sm-7 mt-sm-3 mt-1 d-flex align-items-center flex-wrap">
								<Switch defaultChecked />
							</div>
						</div>
						<div className="row w-100 d-flex">
							<div className="col-sm-5 d-flex align-items-center mt-3">
								<h1 className={'input-heading'}>Services</h1>
							</div>
							<div className="col-sm-7 mt-sm-3 mt-1 d-flex align-items-center flex-wrap">
								<Switch defaultChecked />
							</div>
						</div>
						<div className="row w-100 d-flex">
							<div className="col-sm-5 d-flex align-items-center mt-3">
								<h1 className={'input-heading'}>Check-in</h1>
							</div>
							<div className="col-sm-7 mt-sm-3 mt-1 d-flex align-items-center flex-wrap">
								<Switch defaultChecked />
							</div>
						</div>
					</div>
				</TabPane>
			</Tabs>
		</div>
	);
};

export default Settings;
