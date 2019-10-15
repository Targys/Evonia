import React, { Component } from 'react';
import axios from 'axios';

const Image = props => (
	<li className="li_edit">{props.image.titre} <button className="modif" onClick={() => { props.deleteImage(props.image._id) }}>supprimer</button></li>
	)

export default class AddPhoto extends Component {
	constructor(props) {
		super(props);

		this.onChangeTitre = this.onChangeTitre.bind(this);
		this.onFileChange = this.onFileChange.bind(this);
		this.deleteImage = this.deleteImage.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			titre: '',
			img: '',
			images: []
		}
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

	deleteImage(id) {
		axios.delete('http://92.222.95.250:5000/dashboard/ajout_photos/'+id)
			.then(res => console.log(res.data));
		this.setState({
			images: this.state.images.filter(el => el._id !== id)
		})
	}

	onChangeTitre(e) {
		this.setState({
			titre: e.target.value
		});
	}


	onFileChange(e) {
		this.setState({
			img: e.target.files[0]
		});
	}

	imageList() {
		return this.state.images.map(currentimage => {
			return <Image image={currentimage} deleteImage={this.deleteImage} key={currentimage._id}/>;
		})
	}

	onSubmit(e) {
		e.preventDefault();

		const formData = new FormData()
		formData.append('titre', this.state.titre)
		formData.append('img', this.state.img)


		axios.post('http://92.222.95.250:5000/dashboard/ajout_photos/upload', formData, {
    headers: {'Access-Control-Allow-Origin': '*'}
	})
			.then(res => console.log(res.data));
		window.location = '/dashboard/ajout_photos';
	}

	render() {
		return (
			<div className="edit">
				<h3 className="titre">Ajout photos.</h3>
				<div>Veuillez minifier les images avant de les uploads!</div>
				<form className="form" onSubmit={this.onSubmit}>
					<div className="container-champs">
						<div className="champs">
							<label htmlFor="titre-image" className="label">Titre de la photo:</label>
							<label htmlFor="image" className="label">Envoyer une photo:</label>
						</div>
						<div className="champs">
							<input id="titre-image" className="input" type="text" value={this.state.titre} onChange={this.onChangeTitre} />
							<input id="image" className="input input_file" name="img" type="file" onChange={this.onFileChange}/>
						</div>
					</div>
					<button className="submit" type="submit" >Upload</button>
				</form>
				<div>
					<ul className="liste">
						{ this.imageList() }
					</ul>
				</div>
			</div>
		)
	}
}