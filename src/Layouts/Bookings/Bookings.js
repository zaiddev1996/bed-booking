import React from 'react';
import './Bookings.css';
import BookingCalendar from '../../Components/BookingCalendar/BookingCalendar';

const Bookings = () => {
	return (
		<div className={'h-100'}>
			<BookingCalendar />
		</div>
	);
};

export default Bookings;
