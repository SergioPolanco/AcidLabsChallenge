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

    render = () => {
        return(
            <div className="login-box">
                <div className="login-header">
                    <h3><strong>Acid Labs Challenge</strong></h3>
                </div>
                <div className="login-body">
                    <form>
                        <div className='input-group'>
                            <label htmlFor="email">Correo electronico:</label>
                            <input
                                onChange={this.handleInput}
                                className="input-custom"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Type your email"
                            />
                            {
                                this.state.email != '' && !validateEmail(this.state.email) ?
                                <span className="lbl-error">
                                    Correo electronico invalido
                                </span> : void 0
                            }
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password:</label>
                            <input
                                onChange={this.handleInput}
                                className="input-custom"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Type your password"
                            />
                            {
                                this.state.password != '' && this.state.password.length <= 4 ?
                                <span className="lbl-error">
                                    La contraseña debe tener mas de 4 caracteres
                                </span> : void 0
                            }
                        </div>
                        <div className='btn-login-container'>
                            <button
                                className="btn-custom"
                                type="submit"
                                disabled={!this.validate()}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login