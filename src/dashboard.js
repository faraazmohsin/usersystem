import React from 'react';
import fire from './config/fire';
import './dashboard.css';
import './assets/css/fonts.css';

class Dashboard extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return(
            <div>
                <h1>Welcome! You are logged in..</h1>
                <button id="btn" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Dashboard;