import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {Provider} from "react-redux";
import {store} from "./bll/store";

function App() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                {/*<header className="App-header">

                    ... no changes in this part ...

                    <p>The current time is {currentTime}.</p>
                </header>*/}
                <Login/>
            </div>
        </Provider>
    );
}

export default App;