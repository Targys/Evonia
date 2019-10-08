import React, { Component } from 'react';
import axios from 'axios';
import 'img-lightbox';

const ImageGalery = props => (
	<div className="container-image">
	<a href={props.image.img}
	className="img-lightbox-link"
	target="_blank"
aria-hidden="true"
rel="noopener noreferrer lightbox">
	 <img className="image" alt={props.image.titre} src={props.image.img} /></a>
	</div> 
	)
//imgLightbox("img-lightbox-link");
export default class Galerie extends Component {

	constructor(props) {
		super(props);


		this.state = {images: []};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/dashboard/ajout_photos')
			.then(response => {
				console.log(response.data[0].img);
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
					<h3>Galerie d'image du serveur.</h3>
					<div className="global-container-image">
						{this.imageList()}
					</div>
				</div>
			)
	}
}