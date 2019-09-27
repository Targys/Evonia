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
		axios.get('http://localhost:5000/dashboard/ajout_historique/'+this.props.match.params.id)
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

		axios.post('http://localhost:5000/dashboard/ajout_historique/update/'+this.props.match.params.id, historique)
			.then(res => console.log(res.data));

		window.location = '/dashboard/ajout_historique';
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
						<input type="submit" value="Editer l'historique" onClick={(e) => this.onSubmit(e)} />
					</div>
				</form>
			</div>
		)
	}
}