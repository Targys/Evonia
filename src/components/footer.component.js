import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

	render() {
		return (
			<footer className="footer">
				<div className="li"><Link to="/contact" className="lien">Contact</Link></div>
				<div className="espacement">Site Evonia 2019 | &copy;Targys</div>
			</footer>

		)
	}
}