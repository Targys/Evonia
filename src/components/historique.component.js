import React, { Component } from 'react';
import axios from 'axios';

const HistoriqueList = props => (
	<div>
		<h3>{props.historique.titre}</h3>
		<div>{props.historique.description}</div>
	</div>
)

export default class Historique extends Component {
	constructor(props) {
		super(props);

		this.state = {historiques: []};
	}

	componentDidMount() {
		axios.get('http://92.222.95.250:5000/dashboard/ajout_historique')
			.then(response => {
				this.setState({ historiques: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}

	historiqueList() {
		return this.state.historiques.map(currenthistorique => {
			return <HistoriqueList historique={currenthistorique} key={currenthistorique._id}/>;
		})
	}

	render() {
		return (
				<div className="text">
					<h2 className="titre">Historique des saisons.</h2>
					{this.historiqueList()}
				</div>
			)
	}
}