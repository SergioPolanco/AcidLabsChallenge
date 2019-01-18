import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login/login'
import './app.css'
class App extends React.Component {
    render = () => {
        return(
            <Login/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))