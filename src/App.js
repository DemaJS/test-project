import React from 'react'
import Sidebar from "./Components/Content/Sidebar/Sidebar";
import './App.css'
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import DialogContainer from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UserContainer";
import Container from "./Components/Examples/ExamplesContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


let App = (props) => {

    return (
        <div className='app-wrapper'>
            <div className='app-header'>
                <HeaderContainer/>
            </div>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='main-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render=
                    {() => <DialogContainer/>}/>
                <Route path='/users' render={() => <UserContainer/>}/>
                <Route path='/examples' render={() => <Container/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
            <div className='app-footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default App