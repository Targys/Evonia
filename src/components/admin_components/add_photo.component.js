import React, { Component } from 'react';
import axios from 'axios';

const Image = props => (
	<li>{props.image.titre} <button onClick={() => { props.deleteImage(props.image._id) }}>supprimer</button></li>
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
		axios.get('http://localhost:5000/dashboard/ajout_photos')
			.then(response => {
				this.setState({ images: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteImage(id) {
		axios.delete('http://localhost:5000/dashboard/ajout_photos/'+id)
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


		axios.post('http://localhost:5000/dashboard/ajout_photos/upload', formData, {
    headers: {'Access-Control-Allow-Origin': '*'}
	})
			.then(res => console.log(res.data));
	}

	render() {
		return (
			<div>
				<h3>Ajout photos.</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Titre de la photo:</label>
						<input type="text" value={this.state.titre} onChange={this.onChangeTitre} />
					</div>
					<div>
						<label>Envoyer une photo:</label>
						<input name="img" type="file" onChange={this.onFileChange}/>
					</div>
					<div>
						<button type="submit" >Upload</button>
					</div>
				</form>
				<div>
					<ul>
						{ this.imageList() }
					</ul>
				</div>
			</div>
		)
	}
}