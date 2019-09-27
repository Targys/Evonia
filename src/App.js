import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import Accueil from "./components/accueil.component";
import Historique from "./components/historique.component";
import Galerie from "./components/galerie.component";
import Vidéos from "./components/vidéos.component";
import Modération from "./components/modération.component";
import Contact from "./components/contact.component";
import Admin from "./components/login_admin.component";
import Dashboard from "./components/dashboard.component.js";
import { PrivateRoute } from "./components/private_route.component";

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <Route path="/" exact component={Accueil} />
    <Route path="/historique" exact component={Historique} />
    <Route path="/galerie" exact component={Galerie} />
    <Route path="/vidéos" exact component={Vidéos} />
    <Route path="/modération" exact component={Modération} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/admin" exact component={Admin} />
    <PrivateRoute path='/dashboard' component={Dashboard} />
    </div>
    </Router>
  );
}

export default App;
