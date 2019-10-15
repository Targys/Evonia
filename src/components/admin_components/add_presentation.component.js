import React, { Component } from 'react';
import axios from 'axios';

export default class AddPresentation extends Component {
	constructor(props) {
		super(props);

		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			description: '',
			presentations: []
		}
	}

	componentDidMount() {
		console.log(this.props);
		axios.get('http://92.222.95.250:5000/dashboard/modifier_presentation/afficher')
		  .then(response => {
		  	this.setState({
		  		description: response.data[0].description
		  	})
		  })
		  .catch(function (error) {
		  	console.log(error);
		  })
	}

	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const presentation = {
			description: this.state.description
		}

		console.log(presentation);

		axios.post('http://92.222.95.250:5000/dashboard/modifier_presentation/update', presentation)
			.then(res => console.log(res.data));
		window.location = '/dashboard/modifier_presentation';
	}


	render() {
		return (
			<div className="edit">
				<h3 className="titre">Ajout présentation.</h3>
				<form className="form">
					<textarea className="textarea" type="text"
		    		required
		    		value={this.state.description}
		    		onChange={this.onChangeDescription}></textarea>
					<button className="submit" type="submit" onClick= {(e) =>this.onSubmit(e)}>Valider</button>
				</form>
			</div>
		)
	}
}