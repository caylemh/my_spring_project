import React from 'react';
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
function FirstComponent() {
        return ( 
            <div className = "firstComponent" >
                <h3>First Component</h3>
            </div>
        );
}

// Class Component
function SecondComponent() {
        return ( 
            <div className = "secondComponent" >
                <h3>Second Component</h3>
            </div>
        );
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