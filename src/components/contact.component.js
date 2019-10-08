import React, { Component } from 'react';

export default class Contact extends Component {

	render() {
		return (
				<div className="text">
					<h3>Nous contacter.</h3>
					Pour nous contacter, on vous offres plusieurs possibilités:
					<br/>
					-soit vous nous envoyez un mail à cette adresse: serverevonia@gmail.com
					<br/>
					-soit vous rejoignez le serveur discord Evonia SAS pour 
					faire votre demande ou nous poser des questions: <a href="https://discord.gg/zcDUH3X">https://discord.gg/zcDUH3X</a> 
					(attention vous êtes expulsé automatiquement après déconnection!)
					<br/>
					-soit vous contactez directement un des modérateurs, sur discord: 
					<br/>
					Nous utilisons exclusivement discord pour discuter entre nous, 
					donc n'hésitez à installer cette application, elle est gratuite!
				</div>
			)
	}
}