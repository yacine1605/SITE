import axios from 'axios';
import { useState } from 'react';

const Table = () => {
	let initialState = {
		Allaoche: {
			Production: '',
			prix_debarquement: {
				debarquemeent_min: '',

				debarquemeent_moy: '',

				debarquemeent_max: '',
			},
			prix_consommation: {
				consommation_min: '',

				consommation_moy: '',

				consommation_max: '',
			},
		},
		destination: '',
	};

	const [form, setForm] = useState(initialState);

	const [data, setdata] = useState();

	const postData = async () => {
		let { data } = await axios.post('http://localhost:5000/prix/', { newData: form });
		setdata(data);
	};
	const handel = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	return (
		<div>
			<button> log out</button>
			<h5 style={{ marginLeft: '5%', paddingBottom: '1%' }}> DPRH </h5>
			<h5 style={{ marginLeft: '5%', paddingBottom: '2%' }}> Port </h5>
			<form onSubmit={(e) => e.prevent.default()}>
				<table className="tg">
					<thead>
						<tr>
							<th className="tg-0pky" rowSpan="2">
								<br />
								Espece
								<br />
							</th>
							<th className="tg-0pky" rowSpan="2">
								Production
								<br /> Totale(T)
							</th>
							<th className="tg-0pky" colSpan="3">
								Prix au debarquement;
							</th>
							<th className="tg-0pky" colSpan="3">
								Prix de la consommation
							</th>
							<th className="tg-0pky" rowSpan="2">
								observe
							</th>
						</tr>
						<tr>
							{' '}
							<td className="tg-f9cb"> Min</td>
							<td className="tg-f9cb"> Moyen</td>
							<td className="tg-f9cb"> Max</td>
							<td className="tg-f9cb">Min</td>
							<td className="tg-f9cb">Moyen</td>
							<td className="tg-f9cb">max</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="tg-0pky" name="Allaoche">
								Allaoche
							</td>
							<td className="tg-73oq">
								<input
									name="Production"
									placeholder="enter a number"
									onChange={(e) => {
										handel();
									}}
								/>
							</td>
							<td className="tg-f8tv">
								<input name="debarquemeent_min" placeholder="enter a number" onChange={handel} />
							</td>
							<td className="tg-0pky">
								{' '}
								<input name="debarquemeent_moy " placeholder="enter a number" onChange={handel} />
							</td>
							<td className="tg-0pky">
								{' '}
								<input name="debarquemeent_max " placeholder="enter a number" onChange={handel} />
							</td>
							<td className="tg-0pky">
								<input
									name="consommation_min"
									placeholder="enter a number"
									onChange={(e) => handel(e)}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input name="consommation_moy" placeholder="enter a number" onChange={handel} />
							</td>
							<td className="tg-0pky">
								<input name="consommation_max" placeholder="enter a number" onChange={handel} />
							</td>
							<td style={{ paddingTop: '10%' }} className="tg-0pky" rowSpan="10">
								<input
									onChange={handel}
									name="destination"
									placeholder="enter a number"
									style={{ paddingBottom: '25px' }}
								></input>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
			<button
				onClick={() => {
					postData();
					alert(data);
				}}
			>
				submit{' '}
			</button>
		</div>
	);
};

export default Table;
