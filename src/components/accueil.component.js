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

	render() {
		return (
				<div className="text">
					<h1 className="titre">Bienvenue sur le site d'Evonia!</h1>
					<div>
						<h4>Qu'est ce que Evonia?</h4>
						Evonia est un serveur minecraft privé, en survie, qui réunit une petite communauté 
						de joueurs. Ce serveur possède plusieurs saisons différentes où on essait d'innover en
						ajoutant notre touche personnel au jeu, que ce soit dans la génération de la map, des modifications
						de certains aspects du gameplay voir l'ajout de contenus custom.
						<h4>Puis je rejoindre votre serveur?</h4>
						Bien évidemment! Pour cela il suffit de nous contacter via la rubrique dédiée. Nous vous ferons passer
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