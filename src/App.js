import logo from './logo.svg';
import './App.css';
import Dashboard from './Layouts/Dashboard/Dashboard';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
	return (
		<div className="App">
			<Dashboard data={props.location} />
		</div>
	);
}

export default App;
