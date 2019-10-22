import React, { Component } from 'react';
import axios from 'axios';

const ImageGalery = props => (
	<div className="container-image">
		<a href={props.image.img}
		target="_blank"
		aria-hidden="true"
		rel="noopener noreferrer">
		<img className="image" alt={props.image.titre} src={props.image.img} /></a>
	</div> 
	)

export default class Galerie extends Component {

	constructor(props) {
		super(props);


		this.state = {images: []};
	}

	componentDidMount() {
		axios.get('http://92.222.95.250:5000/dashboard/ajout_photos')
			.then(response => {
				this.setState({ images: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}


	imageList() {
		return this.state.images.map(currentimage => {
			return <ImageGalery image={currentimage} key={currentimage._id} />;
		});
	}

	render() {

		return (
				<div className="galerie">
					<h2 className="titre">Galerie d'image du serveur.</h2>
					<div className="global-container-image">
						{this.imageList()}
					</div>
				</div>
			)
	}
}