import React from 'react';
import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom';
import Bookings from './Layouts/Bookings/Bookings';

const Routes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Bookings /> },
		{ path: '/bookings', element: <Bookings /> }
		// { path: "component2", element: <Component2 /> },
		// ...
	]);
	return routes;
};

export default Routes;
