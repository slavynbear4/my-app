
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Friends from './components/Friends/Friends';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LOGIN from "./components/Login/LOGIN";



const App = (props) => {
	return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar /*state={props.state.sidebar}*//>
				<div className='app-wrapper_content'>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route exact path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/friends' render={() => <Friends />} />
					<Route exact path='/users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <LOGIN />} />
				</div>
			</div>
		
	)
}




export default App;
