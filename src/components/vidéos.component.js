import React, { Component } from 'react';
import axios from 'axios';

const VideoList = props => (
	<div>
		<h3>{props.video.titre}</h3>
		<iframe title={props.video.titre} width="500" height="280" src={"https://www.youtube.com/embed/" + (props.video.url) } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
					<h3>Liste des vidéos de la chaîne youtube.</h3>
					<div className="vidéos">
					{this.videoList()}
					</div>
				</div>
			)
	}
}