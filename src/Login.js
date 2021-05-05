import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Login() {
	const history = useHistory();
	const [input, setInput] = useState({
		username: '',
		password: '',
	});

	const Send = () => {
		//	preventDefault();
		let users = JSON.parse(localStorage.getItem('users') || '[]');
		let newuser = {
			username: input.username,
			password: input.password,
		};
		users.push(newuser);
		localStorage.setItem('users', JSON.stringify(newuser));
	};
	return (
		<>
			<h2> Marhba </h2>
			<form onSubmit={Send}>
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

					<button type="submit" onClick={() => history.push('/user')}>
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
