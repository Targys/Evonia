import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AdminNavbar from "./admin_components/admin_navbar.component";
import AddPresentation from "./admin_components/add_presentation.component";
import AddHistorique from "./admin_components/add_historique.component";
import EditHistorique from "./admin_components/edit_historique.component";
import AddPhoto from "./admin_components/add_photo.component";
import AddVideo from "./admin_components/add_video.component";

function logout() {
        localStorage.clear();
    }

export default class Dashboard extends Component {

	constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        logout();
        window.location = "/";
    }

	render() {
		return (
			<div className="dashboard">
				<button onClick={this.disconnect} type="submit">Déconnexion</button>
				<h3>Le Dashboard</h3>
				<Router>
				<div>
				<AdminNavbar />
					<Route path="/dashboard/modifier_presentation" exact component={AddPresentation} />
					<Route path="/dashboard/ajout_historique" exact component={AddHistorique} />
					<Route path="/dashboard/edit_historique/:id" exact component={EditHistorique} />
					<Route path="/dashboard/ajout_photos" exact component={AddPhoto} />
					<Route path="/dashboard/ajout_videos" exact component={AddVideo} />
				</div>
				</Router>

			</div>
		)
	}
}