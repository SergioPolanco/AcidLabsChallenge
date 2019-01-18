import React from 'react';
import './login.css'

function validateEmail(email) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleInput = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    validate = () => {
        return this.state.password.length > 4 && validateEmail(this.state.email)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Felicidades!")
    }

    render = () => {
        return(
            <div className="login-box">
                <div className="login-header">
                    <h3><strong>Acid Labs Challenge</strong></h3>
                </div>
                <div className="login-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                onChange={this.handleInput}
                                className="input-custom"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Escriba su correo electrónico"
                            />
                            {
                                this.state.email != '' && !validateEmail(this.state.email) ?
                                <span className="lbl-error">
                                    Correo electrónico invalido
                                </span> : void 0
                            }
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                onChange={this.handleInput}
                                className="input-custom"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Escriba su contraseña"
                            />
                            {
                                this.state.password != '' && this.state.password.length <= 4 ?
                                <span className="lbl-error">
                                    La contraseña debe tener más de 4 caracteres
                                </span> : void 0
                            }
                        </div>
                        <div className='btn-login-container'>
                            <button
                                className="btn-custom"
                                type="submit"
                                disabled={!this.validate()}
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login