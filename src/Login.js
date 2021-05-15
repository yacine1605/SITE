import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

/*const handleSubmit = () => {
	// ... get data form
	// ... submit to API or something
};*/
function Login() {
	const history = useHistory();
	const [data, setdata] = useState();
	const [input, setInput] = useState({
		username: '',
		password: '',
	});
	const postData = async () => {
		let { data } = await axios.post('http://localhost:5000/user/login', { access_token: input });
		setdata(data);
	};

	return (
		<>
			<h2> Marhba </h2>
			<form onSubmit={(e) => e.prevent.default}>
				<div className="imgcontainer">
					<img src="img_avatar2.png" alt="Avatar" className="avatar" />
				</div>

				<div className="container">
					<label htmlFor="uname">
						<b>Username</b>
					</label>
					<input
						type="text"
						placeholder="Enter Username"
						required
						onChange={(e) => {
							setInput(e.target.value);
						}}
						value={input.username}
					/>

					<label htmlFor="psw">
						<b>Password</b>
					</label>
					<input
						type="password"
						placeholder="Enter Password"
						onChange={(e) => {
							setInput(e.target.value);
						}}
						value={input.password}
					/>

					<button type="submit" onClick={() => postData()}>
						Login
					</button>
				</div>

				<div className="container">
					<button type="button" className="cancelbtn">
						Cancel
					</button>
				</div>
			</form>
		</>
	);
}

export default Login;
