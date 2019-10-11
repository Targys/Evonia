import React, { Component } from 'react';
import axios from 'axios';

const VideoList = props => (
	<div className="video_container">
		<h3 className="titre">{props.video.titre}</h3>
		<iframe className="iframe" title={props.video.titre} src={"https://www.youtube.com/embed/" + (props.video.url) } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
	</div>
)

export default class Vidéos extends Component {

	constructor(props) {
		super(props);

		this.state = {videos: []};
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

	videoList() {
		return this.state.videos.map(currentvideo => {
			return <VideoList video={currentvideo} key={currentvideo._id}/>;
		})
	}

	render() {
		return (
				<div className="text">
					<h2 className="titre">Liste des vidéos de la chaîne youtube.</h2>
					<div className="vidéos">
					{this.videoList()}
					</div>
				</div>
			)
	}
}