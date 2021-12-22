import React, { useState } from 'react';
import './Clients.css';
import { Table, Input } from 'antd';
import { CalendarOutlined, PhoneOutlined, MessageOutlined, MailOutlined, AudioOutlined } from '@ant-design/icons';

import BookingCalendar from '../../Components/BookingCalendar/BookingCalendar';
import { AddReservationModal } from '../../Components/AddReservationModal/AddReservationModal';

const { Search } = Input;

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff'
		}}
	/>
);

const Clients = () => {
	const [ pageSize, setPageSize ] = useState(5);
	const [ showReservationModal, setShowReservationModal ] = useState(false);

	const onSearch = (value) => console.log(value);

	const columns = [
		{
			title: '#',
			dataIndex: 'key',
			key: 'key',
			sorter: (a, b) => a.key - b.key
		},
		{
			title: 'Person',
			dataIndex: 'name',
			key: 'name',
			sorter: true,
			render: (text, record) => (
				<div className="d-flex justify-content-between align-items-center">
					<span>{record.name}</span>
					<div
						className="calendar-icon-div d-flex justify-content-between align-items-center"
						onClick={() => {
							setShowReservationModal(true);
						}}
					>
						<CalendarOutlined />
					</div>
				</div>
			)
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone',
			render: (text, record) => (
				<div className="d-flex justify-content-between align-items-center">
					<span>{record.phone}</span>
					<div className="d-flex">
						<div className="calendar-icon-div d-flex justify-content-between align-items-center me-2">
							<PhoneOutlined />
						</div>
						<div className="calendar-icon-div d-flex justify-content-between align-items-center">
							<MessageOutlined />
						</div>
					</div>
				</div>
			)
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			sorter: true,
			render: (text, record) => (
				<div className="d-flex justify-content-between align-items-center">
					<span>{record.email}</span>
					<div className="calendar-icon-div d-flex justify-content-between align-items-center">
						<MailOutlined />
					</div>
				</div>
			)
		}
	];
	const data = [
		{
			key: '1',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '2',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '3',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '4',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '5',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '6',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '7',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '8',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '9',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '10',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '11',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '12',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '13',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '14',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '15',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '16',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '17',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '18',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '19',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		},
		{
			key: '20',
			name: 'John Brown',
			phone: 3432423424,
			email: 'test@gmail.com'
		}
	];
	return (
		<div className={'clients-main'}>
			<div className="d-flex justify-content-between align-items-center flex-wrap">
				<span className={'clients-heading mb-2'}>Clients</span>
				<Search placeholder="Search" onSearch={onSearch} style={{ width: 300 }} />
			</div>

			<Table
				size="middle"
				columns={columns}
				dataSource={data}
				pagination={{
					pageSize: pageSize,
					position: [ 'topRight', 'bottomRight' ],
					showSizeChanger: true,
					onShowSizeChange: (_, size) => {
						setPageSize(size);
					},
					pageSizeOptions: [ '5', '10', '20' ]
				}}
			/>

			<AddReservationModal
				visible={showReservationModal}
				changeVisibility={() => {
					setShowReservationModal(false);
				}}
			/>
		</div>
	);
};

export default Clients;
