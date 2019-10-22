import React, { Component } from 'react';
import papy from '../images_modo/papythorinque.jpeg';
import targys from '../images_modo/targys.jpeg';
import cokbot from '../images_modo/cokbot.jpeg';
import olopezo from '../images_modo/olopezo.jpeg';
import fana from '../images_modo/fana.jpeg';
import haru from '../images_modo/haru.jpeg';
import moxtor from '../images_modo/moxtor.jpeg';
import cassis from '../images_modo/cassis.jpeg';

export default class Modération extends Component {

	render() {
		return (
				<div className="modération">
					<h2 className="titre">Présentation de la modération.</h2>
					<div className="modo">
						<img src={papy} alt="modo papythorinque"/>
						<div>Je suis Papythorinque, aka PapySansLit, aka Papy. 
						J'étais connu pour être le tryharder du serveur. J'adore automatiser, mais surtout, j'aime build. 
						(Si je suis fier de mes builds, ne vous inquiétez pas, je le ferai savoir).</div>
					</div>
					<div className="modo">
						<div>Bonjour les gens, je suis Targys! Je suis connu pour être un amoureux (esclavagiste) des villageois, 
						utilisateur fous des commands blocks et grand défenseur de Mojang (sauf une fois au chalet)! 
						J'aime build, explorer et les madeleines. 
						N'hésitez pas à me contacter pour toute demande d'aide!</div>
						<img src={targys} alt="modo targys"/>
					</div>
					<div className="modo">
						<img src={cokbot} alt="modo cokbot"/>
						<div>Moi c'est CokBot, mais je suis plus connu sous le surnom de Poulet, vous comprendrez pourquoi si vous regardez juste mon skin. 
						Eh oui j'ai beau être un poulet, je suis quand même modérateur sur le serveur Evonia et j'ai aussi une meilleure IA qu'un bot sur Fortnite! 
						Je vais pas vous retenir plus longtemps, allez plutôt vous connecter sur notre serveur! :)</div>
					</div>
					<div className="modo">
						<div>Salut tout le monde, moi c'est OlopezO, mais tout le monde m'appelle Olo! ^^
						Je suis un farmer de l’extrême et j'aime (beaucoup) miner :). 
						Avec l'équipe de modération, je m'occupe de gérer le serveur pour qu'il plaise à tout le monde et qu'il y fasse bon vivre! 
						Je suis dispo h24 (ou presque x) ) si vous voulez me contacter! Rendez-vous sur le discord! Et si vous avez besoin d'aide, faites comme notre ami Cassis: HEEEELP! HEEEELP!! xD</div>
						<img src={olopezo} alt="modo olopezo"/>
					</div>
					<div className="modo">
						<img src={fana} alt="modo fana"/>
						<div>Saluttt moi c'est Fana, connu sur le serveur comme le poulpe modo à mi-temps Oo. 
						Je suis plutôt sur de gros Builds (jamais finis généralement...) mais à part ça, quand je suis co on dit que je suis sympa ^^. 
						Je reste disponible pour aider sans problème et même si je parle pas souvent sur discord tu peux m'invoquer sans soucis avec mon @ (je vois tout...).</div>
					</div>
					<div className="modo">
						<div>Connaissez-vous la légende du ninja blanc? Je suis Haru plus communément appelé Haru, pas de talent particulier, 
						je suis moyen partout et j'ai tendance à m'en battre les couilles de tout. Voilà.
						<br/> 
						Cordialement.
						</div>
						<img src={haru} alt="modo haru"/>
					</div>
					<div className="modo">
						<img src={moxtor} alt="modo moxtor"/>
						<div>Eh bien salut je me présente! Je m'appelle Moxtor, je suis modérateur avec la tête dans les étoiles et l'on me prénomme "Le Stagiaire" (merci les collègues xD). 
						Récemment je suis reconnu comme un terraformeur de l'extrême et je m'embarque dans des trop gros projets. 
						Mais je serais toujours à votre écoute pour les problèmes sur le serveur et je ferai de mon mieux pour les résoudre, alors à très vite sur le serveur!</div>
					</div>
					<div className="modo">
						<div>Moi c’est Cassis, j’aime pas forcément build, je préfère farmer des pnj, des TNT, explorer ou encore transformer une plage entière en sable rose. 
						Adepte du « plus de challenge », si le jeu devient trop facile pour vous: Sautez dans le vide avec tout votre stuff !</div>
						<img src={cassis} alt="modo cassis"/>
					</div>
				</div>
			)
	}
}