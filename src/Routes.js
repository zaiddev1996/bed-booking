import React from 'react';
import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom';
import Bookings from './Layouts/Bookings/Bookings';
import Clients from './Layouts/Clients/Clients';
import Settings from './Layouts/Settings/Settings';

const Routes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Bookings /> },
		{ path: '/bookings', element: <Bookings /> },
		{ path: '/clients', element: <Clients /> },
		{ path: '/settings', element: <Settings /> }
		// { path: "component2", element: <Component2 /> },
		// ...
	]);
	return routes;
};

export default Routes;
