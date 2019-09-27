import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdminNavbar extends Component {

	render() {
		return (
			<nav className="navbaradmin">
				<div>
				<ul className="menu">
					<li className="li_admin">
						<Link to="/dashboard/modifier_presentation" className="lien">Modifier Présentation Saison</Link>
					</li>
					<li className="li_admin">
						<Link to="/dashboard/ajout_historique" className="lien">Ajouter l'historique d'une saison</Link>
					</li>
					<li className="li_admin">
						<Link to="/dashboard/ajout_photos" className="lien">Ajouter une photo du serveur</Link>
					</li>
					<li className="li_admin">
						<Link to="/dashboard/ajout_videos" className="lien">Ajouter un lien de vidéos de la chaîne</Link>
					</li>
				</ul>
				</div>
			</nav>
			)
	}
}