import React, { Component } from 'react';

export default class Contact extends Component {

	render() {
		return (
				<div className="contact">
					<h3>Nous contacter.</h3>
					<form className="form">
						<div>
							<label>Pseudo:</label>
							<input type="text" className="champs" />
						</div>
						<div>
							<label>Adresse mail:</label>
							<input type="email" className="champs" />
						</div>
						<div>
						<label>Message:</label>
						<textarea className="textarea"></textarea>
						</div>
						<div>
							<input type="submit" />
						</div>
					</form>
				</div>
			)
	}
}