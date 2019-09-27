import React, { Component } from 'react';
import axios from 'axios';

export default class Accueil extends Component {
	constructor(props) {
		super(props);


		this.state = {
			description: '',
			presentations: []
		}
	}

	componentDidMount() {
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

	render() {
		return (
				<div className="text">
					<h3>Bienvenue sur le site d'Evonia!</h3>
					<div>
						<h4>Qu'est ce que Evonia?</h4>
						Evonia est un serveur minecraft privée, en survie, qui réunit une petite communauté 
						de joueur. Ce serveur possède plusieurs saisons différentes où on essait d'innover en
						ajoutant notre touche personnel au jeu, que ce soit dans la génération de map, des modifications
						de certains aspect du gameplay voir l'ajout de contenu custom.
						<h4>Puis je rejoindre votre serveur?</h4>
						Bien évidemment! Pour cela il suffit de nous contacter via la rubrique dédié. Nous vous ferons passer
						une candidature afin de voir votre motivation, vos idées de projets sur le serveur et vos réalisations passées
						(si vous en avez).
					</div>
					<div>
						<h4>Présentation de la saison actuelle:</h4>
						{this.state.description}
					</div>
				</div>
			)
	}
}