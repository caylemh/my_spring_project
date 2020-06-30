import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <h1>Welcome to Note Junkie, Caylem!</h1>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
        </div>
    );
}

// Class Component
class FirstComponent extends Component {
    render() {
        return ( 
            <div className = "firstComponent" >
                <h3>First Component</h3>
            </div>
        );
    }
}

// Class Component
class SecondComponent extends Component {
    render() {
        return ( 
            <div className = "secondComponent" >
                <h3>Second Component</h3>
            </div>
        );
    }
}

// Class Component
function ThirdComponent() {
        return ( 
            <div className = "thirdComponent" >
                <h3>Third Component</h3>
            </div>
        );
}

export default App;