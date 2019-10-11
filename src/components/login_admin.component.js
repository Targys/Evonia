import React, { Component } from 'react';
import axios from 'axios';

const burl = "http://localhost:5000";

function login(pseudo,mot_de_passe) {
        return axios.post(burl + '/admin/login',{
            'pseudo' : pseudo,
            'mot_de_passe' : mot_de_passe
        })
    };

export default class Admin extends Component {
	constructor(props) {
        super(props);
        this.state = {
            pseudo : '',
            mot_de_passe: ''
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.pseudo.length === 0){
            return;
        }
        if(this.state.mot_de_passe.length === 0){
            return;
        }
        login(this.state.pseudo, this.state.mot_de_passe).then(function(data){
        	console.log(data);
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    } 

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }   

	render() {
		return (
			<div className="container-login">
            <h3 className="titre">Login</h3>
				<form className="form">
                    <div className="container-champs">
					   <div className="champs">
						  <label className="label" htmlFor="pseudo">Pseudo: </label>
                          <label className="label" htmlFor="mot_de_passe">Mots de passe: </label>
					   </div>
					   <div className="champs">
                            <input className="input" id="pseudo" type="text" value={this.state.pseudo} required onChange={this.handleChange} />
						    <input className="input" id="mot_de_passe" type="password" value={this.state.mot_de_passe} required onChange={this.handleChange} />
					   </div>
                    </div>
                    <input className="submit" type="submit" onClick={this.send} />
				</form>
			</div>
		)
	}
}