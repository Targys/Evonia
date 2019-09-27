import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Historique = props => (
	<li>{props.historique.titre} <Link to={"/dashboard/edit_historique/"+props.historique._id}>éditer</Link> | <a href="#" onClick={() => { props.deleteHistorique(props.historique._id) }}>supprimer</a></li>
	)

export default class AddHistorique extends Component {

	constructor(props) {
		super(props);

		this.onChangeTitre = this.onChangeTitre.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.deleteHistorique = this.deleteHistorique.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			titre: '',
			description: '',
			historiques: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/dashboard/ajout_historique')
			.then(response => {
				this.setState({ historiques: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteHistorique(id) {
		axios.delete('http://localhost:5000/dashboard/ajout_historique/'+id)
			.then(res => console.log(res.data));
		this.setState({
			historiques: this.state.historiques.filter(el => el._id !== id)
		})
	}

	onChangeTitre(e) {
		this.setState({
			titre: e.target.value
		});
	}


	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}

	historiqueList() {
		return this.state.historiques.map(currenthistorique => {
			return <Historique historique={currenthistorique} deleteHistorique={this.deleteHistorique} key={currenthistorique._id}/>;
		})
	}

	onSubmit(e) {
		e.preventDefault();

		const historique = {
			titre: this.state.titre,
			description: this.state.description
		}

		console.log(historique);

		axios.post('http://localhost:5000/dashboard/ajout_historique/add', historique)
			.then(res => console.log(res.data));
	}

	render() {
		return (
			<div>
				<h3>Ajouter un historique.</h3>
				<form>
					<div>
						<label>Titre:</label>
						<input type="text" required value={this.state.titre} onChange={this.onChangeTitre}/>
					</div>
					<div>
						<label>Description:</label>
						<textarea required value={this.state.description} onChange={this.onChangeDescription}></textarea>
					</div>
					<div>
						<input type="submit" value="Créer un nouvel historique" onClick={(e) => this.onSubmit(e)} />
					</div>
				</form>
				<h3>Editer un historique.</h3>
				<div>
					<ul>
						{ this.historiqueList() }
					</ul>
				</div>
			</div>
		)
	}
}