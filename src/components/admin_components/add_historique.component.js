import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Historique = props => (
	<li className="li_edit">{props.historique.titre} <Link className="modif" to={"/dashboard/edit_historique/"+props.historique._id}>Editer</Link> | <button className="modif" onClick={() => { props.deleteHistorique(props.historique._id) }}>Supprimer</button></li>
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
		axios.get('http://92.222.95.250:5000/dashboard/ajout_historique')
			.then(response => {
				this.setState({ historiques: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteHistorique(id) {
		axios.delete('http://92.222.95.250:5000/dashboard/ajout_historique/'+id)
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

		axios.post('http://92.222.95.250:5000/dashboard/ajout_historique/add', historique)
			.then(res => console.log(res.data));
		window.location = '/dashboard/ajout_historique';
	}

	render() {
		return (
			<div className="edit">
				<h3 className="titre">Ajouter un historique.</h3>
				<form className="form">
					<div className="container-champs">
						<div className="champs">
							<label className="label" htmlFor="titre-historique">Titre:</label>
							<label className="label" htmlFor="description-historique">Description:</label>
						</div>
						<div className="champs">
							<input id="titre-historique" className="input" type="text" required value={this.state.titre} onChange={this.onChangeTitre}/>
							<textarea id="description-historique" className="textarea" required value={this.state.description} onChange={this.onChangeDescription}></textarea>
						</div>
					</div>
					<input className="submit_historique" type="submit" value="Créer un nouvel historique" onClick={(e) => this.onSubmit(e)} />
				</form>
				<h3 className="titre">Editer un historique.</h3>
				<div>
					<ul>
						{ this.historiqueList() }
					</ul>
				</div>
			</div>
		)
	}
}