import React, { useState } from 'react';
import './Dashboard.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from '@ant-design/icons';
import CustomRoutes from '../../Routes';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Dashboard = (props) => {
	const [ collapsed, setCollapsed ] = useState(true);

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout className={'main-layout'}>
			<Router>
				<Sider trigger={null} collapsible collapsed={collapsed} className={'menu-sider'}>
					<div className="logo">{collapsed ? 'Bed' : 'Bed Booking'}</div>
					<Menu mode="inline" defaultSelectedKeys={[ 'bookings' ]}>
						<Menu.Item key="bookings" icon={<UserOutlined />}>
							<Link to="/" className="link-menu">
								Bookings
							</Link>
						</Menu.Item>
						<Menu.Item key="clients" icon={<VideoCameraOutlined />}>
							<Link to="/" className="link-menu">
								Clients
							</Link>
						</Menu.Item>
						<Menu.Item key="price" icon={<UploadOutlined />}>
							<Link to="/" className="link-menu">
								Price list
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }}>
						<div className={'d-flex justify-content-start align-items-center h-100 toggle-icon-div'}>
							{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								className: 'trigger',
								onClick: toggle
							})}
						</div>
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: '24px 16px',
							// padding: 24,
							minHeight: 280
						}}
					>
						<CustomRoutes />
					</Content>
				</Layout>
			</Router>
		</Layout>
	);
};

export default Dashboard;
