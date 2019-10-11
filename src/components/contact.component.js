import React, { Component } from 'react';

export default class Contact extends Component {

	render() {
		return (
				<div className="text contact">
					<h2 className="titre">Nous contacter.</h2>
					<div>Pour nous contacter, on vous offre plusieurs possibilités:</div>
					
					<div>-soit vous nous envoyez un mail à cette adresse: serverevonia@gmail.com</div>
					
					<div>-soit vous rejoignez le serveur discord Evonia SAS pour 
					faire votre demande ou nous poser des questions: <a href="https://discord.gg/zcDUH3X">https://discord.gg/zcDUH3X</a> 
					(attention vous êtes expulsé automatiquement après déconnection!)</div>
					
					<div>-soit vous contactez directement un des modérateurs, sur discord: </div>
					
					<div>Nous utilisons exclusivement discord pour discuter entre nous, 
					donc n'hésitez pas à installer cette application, elle est gratuite!</div>
				</div>
			)
	}
}