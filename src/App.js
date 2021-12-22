import logo from './logo.svg';
import './App.less';
import Dashboard from './Layouts/Dashboard/Dashboard';
import 'antd/dist/antd.less';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
	return (
		<div className="App">
			<Dashboard data={props.location} />
		</div>
	);
}

export default App;
