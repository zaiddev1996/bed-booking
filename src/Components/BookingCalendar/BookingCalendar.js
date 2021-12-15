import React, { useState } from 'react';
import Timeline, { TimelineHeaders, CustomHeader, SidebarHeader, DateHeader } from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import './BookingCalendar.css';
import moment from 'moment';
import { DatePicker } from 'antd';
import BedImage from '../../Assets/Images/bed.png';
import { UserOutlined, FilterOutlined } from '@ant-design/icons';
import MonthPillsView from '../MonthPillsView/MonthPillsView';
import ChangeYearView from '../ChangeYearView/ChangeYearView';
import ChangeDateView from '../ChangeDateView/ChangeDataView';

const groupRenderer = ({ group }) => {
	return (
		<div className="custom-group">
			<div className="title d-flex flex-column align-items-start justify-content-between ps-1">
				<div className={'room-name'}>{group.title}</div>
				<div className={'d-flex room-info-div align-items-center'}>
					<img src={BedImage} className="room-icon-image" />
					<UserOutlined className={'room-user-icon'} />
					<span className={'room-users'}>{group.tip}</span>
				</div>
			</div>
		</div>
	);
};
const groups = [
	{
		id: 1,
		title: 'Room 1',
		tip: '2'
	},
	{
		id: 2,
		title: 'Room 2',
		tip: '2+3'
	},
	{
		id: 3,
		title: 'Room 3',
		tip: '4+4'
	},
	{
		id: 4,
		title: 'Room 4',
		tip: '4+4'
	},
	{
		id: 5,
		title: 'Room 1',
		tip: '2'
	},
	{
		id: 6,
		title: 'Room 2',
		tip: '2+3'
	},
	{
		id: 7,
		title: 'Room 3',
		tip: '4+4'
	},
	{
		id: 8,
		title: 'Room 4',
		tip: '4+4'
	},
	{
		id: 9,
		title: 'Room 1',
		tip: '2'
	},
	{
		id: 10,
		title: 'Room 2',
		tip: '2+3'
	},
	{
		id: 11,
		title: 'Room 3',
		tip: '4+4'
	},
	{
		id: 12,
		title: 'Room 4',
		tip: '4+4'
	},
	{
		id: 13,
		title: 'Room 1',
		tip: '2'
	},
	{
		id: 14,
		title: 'Room 2',
		tip: '2+3'
	},
	{
		id: 15,
		title: 'Room 3',
		tip: '4+4'
	},
	{
		id: 16,
		title: 'Room 4',
		tip: '4+4'
	},
	{
		id: 17,
		title: 'Room 1',
		tip: '2'
	},
	{
		id: 18,
		title: 'Room 2',
		tip: '2+3'
	},
	{
		id: 19,
		title: 'Room 3',
		tip: '4+4'
	},
	{
		id: 20,
		title: 'Room 20',
		tip: '4+4'
	}
];
const items = [
	{
		id: 1,
		group: 1,
		title: 'item 1',
		tip: '2',
		start_time: moment(),
		end_time: moment().add(24, 'hour'),
		itemProps: {
			// these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
			'data-custom-attribute': 'Random content',
			'aria-hidden': true,
			onDoubleClick: () => {
				console.log('You clicked double!');
			},
			className: 'weekend',
			style: {
				background: 'fuchsia'
			}
		}
	},
	{
		id: 2,
		group: 2,
		title: 'item 1',
		tip: '2',
		start_time: moment(),
		end_time: moment().add(24, 'hour'),
		itemProps: {
			// these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
			'data-custom-attribute': 'Random content',
			'aria-hidden': true,
			onDoubleClick: () => {
				console.log('You clicked double!');
			},
			className: 'weekend',
			style: {
				background: 'fuchsia'
			}
		}
	},
	{
		id: 3,
		group: 3,
		title: 'item 1',
		tip: '2',
		start_time: moment(),
		end_time: moment().add(24, 'hour'),
		itemProps: {
			// these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
			'data-custom-attribute': 'Random content',
			'aria-hidden': true,
			onDoubleClick: () => {
				console.log('You clicked double!');
			},
			className: 'weekend',
			style: {
				background: 'fuchsia'
			}
		}
	}
];

const BookingCalendar = () => {
	const [ showingDate, setShowingDate ] = useState(moment());
	const [ showingDateEnd, setShowingDateEnd ] = useState(moment().add(20, 'day'));
	return (
		<div className={'calendar-main d-flex flex-column justify-content-between'}>
			<div>
				<div className={'d-flex align-items-center flex-wrap'}>
					<ChangeDateView
						dateStart={moment(showingDate).format('DD MMM')}
						dateEnd={moment(showingDateEnd).format('DD MMM')}
						increment={() => {
							setShowingDate(showingDateEnd);
							setShowingDateEnd(moment(showingDateEnd).add(20, 'day'));
						}}
						decrement={() => {
							setShowingDate(moment(showingDate).subtract(20, 'day'));
							setShowingDateEnd(showingDate);
						}}
					/>
					<ChangeYearView
						year={moment(showingDate).format('YYYY')}
						increment={() => {
							setShowingDate(moment(showingDate).add(1, 'year'));
							setShowingDateEnd(moment(showingDateEnd).add(1, 'year'));
						}}
						decrement={() => {
							setShowingDate(moment(showingDate).subtract(1, 'year'));
							setShowingDateEnd(moment(showingDateEnd).subtract(1, 'year'));
						}}
					/>

					<DatePicker
						value={moment(showingDate)}
						inputReadOnly={true}
						onChange={(date, dateString) => {
							if (moment(date).isValid()) {
								setShowingDate(moment(date));
								setShowingDateEnd(moment(date).add(20, 'day'));
							}
						}}
						className={'today-text'}
					/>
					<div
						className={'today-text'}
						onClick={() => {
							setShowingDate(moment());
							setShowingDateEnd(moment().add(20, 'day'));
						}}
					>
						today
					</div>

					<MonthPillsView
						month={moment(showingDate).month() + 1}
						onMonthSelect={(val) => {
							setShowingDate(moment(showingDate).month(val - 1));
							setShowingDateEnd(moment(showingDate).month(val - 1).add(20, 'day'));

							// setCurrentMonth(val);
						}}
					/>
				</div>

				<Timeline
					groups={groups}
					items={items}
					className={'calendar-timeline'}
					// defaultTimeStart={moment()}
					visibleTimeStart={showingDate}
					visibleTimeEnd={showingDateEnd}
					// defaultTimeEnd={moment().add(20, 'day')}
					canMove={false}
					lineHeight={50}
					groupRenderer={groupRenderer}
					onTimeChange={(timeStart, timeEnd, updateScrollCanvas) => {
						updateScrollCanvas(timeStart, timeEnd);
						setShowingDate(timeStart);
						setShowingDateEnd(timeEnd);
						console.log(moment(timeStart).format('MM'));
					}}
				>
					<TimelineHeaders className="sticky">
						<SidebarHeader>
							{({ getRootProps }) => {
								return (
									<div
										{...getRootProps()}
										className={'left-header d-flex jusitfy-content-start align-items-center ps-2'}
									>
										<FilterOutlined />
									</div>
								);
							}}
						</SidebarHeader>
						<CustomHeader height={50} headerData={{ someData: 'data' }} unit="day">
							{({ headerContext: { intervals }, getRootProps, getIntervalProps, showPeriod, data }) => {
								return (
									<div {...getRootProps()} className={'custom-header'}>
										{intervals.map((interval) => {
											const intervalStyle = {
												borderLeft: '1px solid #cecccce7',
												cursor: 'pointer',
												backgroundColor: '#ffffff',
												height: '35px',
												display: 'flex',
												outiline: 'none',
												justifyContent: 'center',
												alignItems: 'center'
												// width: '20px'
											};
											return (
												<div
													onClick={() => {
														showPeriod(interval.startTime, interval.endTime);
													}}
													{...getIntervalProps({
														interval,
														style: intervalStyle
													})}
												>
													<div className="sticky" className={'header-cell'}>
														<div className={'header-cell-text month-text'}>
															{interval.startTime.format('dd')}
														</div>
														<div className={'header-cell-text'}>
															{interval.startTime.format('DD')}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								);
							}}
						</CustomHeader>
					</TimelineHeaders>
				</Timeline>
			</div>

			<div className={'bottom-div d-flex align-items-center'}>
				<div
					className={'add-room'}
					onClick={() => {
						setShowingDate(moment());
						setShowingDateEnd(moment().add(20, 'day'));
					}}
				>
					Add Room
				</div>
			</div>
		</div>
	);
};

export default BookingCalendar;
