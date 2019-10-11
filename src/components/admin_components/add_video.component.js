import React, { Component } from 'react';
import axios from 'axios';

const Video = props => (
	<li>{props.video.titre} <button className="modif" onClick={() => { props.deleteVideo(props.video._id) }}>supprimer</button></li>
	)

export default class AddVideo extends Component {

	constructor(props) {
		super(props);

		this.onChangeTitre = this.onChangeTitre.bind(this);
		this.onChangeUrl = this.onChangeUrl.bind(this);
		this.deleteVideo = this.deleteVideo.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			titre: '',
			url: '',
			videos: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/dashboard/ajout_videos')
			.then(response => {
				this.setState({ videos: response.data })
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteVideo(id) {
		axios.delete('http://localhost:5000/dashboard/ajout_videos/'+id)
			.then(res => console.log(res.data));
		this.setState({
			videos: this.state.videos.filter(el => el._id !== id)
		})
	}

	onChangeTitre(e) {
		this.setState({
			titre: e.target.value
		});
	}


	onChangeUrl(e) {
		this.setState({
			url: e.target.value
		});
	}

	videoList() {
		return this.state.videos.map(currentvideo => {
			return <Video video={currentvideo} deleteVideo={this.deleteVideo} key={currentvideo._id}/>;
		})
	}

	onSubmit(e) {
		e.preventDefault();

		let searchTerm = 'v=';
		let indexOfFirst = this.state.url.indexOf(searchTerm);

		const video = {
			titre: this.state.titre,
			url: this.state.url.substring(indexOfFirst+2, indexOfFirst+13)
		}

		console.log(video);

		axios.post('http://localhost:5000/dashboard/ajout_videos/add', video)
			.then(res => console.log(res.data));
	}

	render() {
		return (
			<div className="edit">
				<h3 className="titre">Ajouter une vidéo.</h3>
				<form className="form">
					<div className="container-champs">
						<div className="champs">
							<label htmlFor="titre-video" className="label">Titre:</label>
							<label htmlFor="url" className="label">Url:</label>
						</div>
						<div className="champs">
							<input id="titre-video" className="input" type="text" required value={this.state.titre} onChange={this.onChangeTitre}/>
							<input id="url" className="input" type="text" required value={this.state.url} onChange={this.onChangeUrl}/>
						</div>
					</div>
					<input className="submit" type="submit" value="Ajouter" onClick={(e) => this.onSubmit(e)} />
				</form>
				<h3 className="titre">Supprimer une vidéo.</h3>
				<div>
					<ul>
						{ this.videoList() }
					</ul>
				</div>
			</div>
		)
	}
}