import React, { Component } from 'react';
import axios from 'axios';

export default class EditHistorique extends Component {

	constructor(props) {
		super(props);

		this.onChangeTitre = this.onChangeTitre.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			titre: '',
			description: '',
			users: []
		}
	}

	componentDidMount() {
		axios.get('http://92.222.95.250:5000/dashboard/ajout_historique/'+this.props.match.params.id)
		  .then(response => {
		  	this.setState({
		  		titre: response.data.titre,
		  		description: response.data.description
		  	})
		  })
		  .catch(function (error) {
		  	console.log(error);
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

	onSubmit(e) {
		e.preventDefault();

		const historique = {
			titre: this.state.titre,
			description: this.state.description
		}

		console.log(historique);

		axios.post('http://92.222.95.250:5000/dashboard/ajout_historique/update/'+this.props.match.params.id, historique)
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
							<label htmlFor="edit-titre-historique" className="label">Titre:</label>
							<label htmlFor="edit-description-historique" className="label">Description:</label>
						</div>
						<div className="champs">
							<input id="edit-titre-historique" className="input" type="text" required value={this.state.titre} onChange={this.onChangeTitre}/>
							<textarea id="edit-description-historique" className="textarea" required value={this.state.description} onChange={this.onChangeDescription}></textarea>
						</div>
					</div>
					<input className="submit" type="submit" value="Editer l'historique" onClick={(e) => this.onSubmit(e)} />
				</form>
			</div>
		)
	}
}