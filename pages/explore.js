import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

class ExploreView extends React.Component {
	static async getInitialProps() {
		// res is assigned the response once the axios
		// async get is completed
		const res = await axios.get('https://reqres.in/api/users');
		// Return properties
		return { data: res.data };
	}
	render() {
		console.log(this.props.data.data);
		return (
			<Layout>
				{`Explore View`}
				<h1>Users</h1>
				<ul>
					{this.props.data.data.map((user) => {
						return <li key={user.id}>{user.email}</li>;
					})}
				</ul>
			</Layout>
		);
	}
}

export default ExploreView;
