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
		axios.get('http://localhost:5000/dashboard/modifier_presentation/afficher')
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

		axios.post('http://localhost:5000/dashboard/modifier_presentation/update', presentation)
			.then(res => console.log(res.data));

	}


	render() {
		return (
			<div>
				<h3>Ajout présentation.</h3>
				<form>
				<textarea type="text"
		    	required
		    	value={this.state.description}
		    	onChange={this.onChangeDescription}></textarea>
				<button type="submit" onClick= {(e) =>this.onSubmit(e)}>Valider</button>
				</form>
			</div>
		)
	}
}