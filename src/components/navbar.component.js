import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

	render() {
		return (
			<nav>
				<div>
				<ul className="menu">
					<li className="li">
						<Link to="/" className="lien">Accueil</Link>
					</li>
					<li className="li">
						<Link to="/historique" className="lien">Historique</Link>
					</li>
					<li className="li">
						<Link to="/galerie" className="lien">Galerie</Link>
					</li>
					<li className="li">
						<Link to="/vidéos" className="lien">Vidéos</Link>
					</li>
					<li className="li">
						<Link to="/modération" className="lien">Modération</Link>
					</li>
					<li className="li">
						<Link to="/contact" className="lien">Contact</Link>
					</li>
				</ul>
				</div>
			</nav>
			)
	}
}