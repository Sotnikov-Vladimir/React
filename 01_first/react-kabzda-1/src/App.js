import React from 'react';
import './App.css';
import Header from "./сonponents/Header/Header";
import Navbar from "./сonponents/Navbar/Navbar";
import Profile from "./сonponents/Profile/Profile";
import Dialogs from "./сonponents/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./сonponents/Music/Music";
import News from "./сonponents/News/News";
import Settings from "./сonponents/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app__wrapper'>
                <Header/>
                <div className='main__flex'>
                    <Navbar/>
                    <div className='app__wrapper__content '>
                        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                      dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs messagePage={props.state.messagesPage}
                                                                      dispatch={props.dispatch}/>}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
