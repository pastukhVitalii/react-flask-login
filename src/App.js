import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {Provider} from "react-redux";
import {store} from "./bll/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Login/>
            </div>
        </Provider>
    );
}

export default App;