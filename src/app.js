import React from 'react';
import './app.scss';
import durian from './assets/durian.jpg';

class App extends React.Component {
    state = {
        title: 'Hello from state'
    }
    render() {
        return (
            <>
                <h1 className="title">{this.state.title}</h1>
                <img className="durian" src={durian} alt="durian"/> 
            </>
        )
    }
}

export default App;