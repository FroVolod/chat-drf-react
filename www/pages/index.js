import fetch from 'isomorphic-unfetch'
import Chat from '../components/chat'

class Index extends React.Component {
    state = {
        login: '',
        password:'',
        isShowSignIn: false,
        isShowSignUp: false,
        isShowSign: true,
        isShowMessages: false
    }

    onChangeLogin = (e) => {
        this.setState({login: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onSignIn = () => {
        this.setState({
                isShowSignIn: true,
                isShowSign: false
        })
    }

    onSignUp = () => {
        this.setState({
                isShowSignUp: true,
                isShowSign: false
        })
    }

    signUp = () => {
        fetch(`http://127.0.0.1:8000/auth/users/`, {
            method: 'POST',
            body: JSON.stringify({
                                  username: this.state.login,
                                  password: this.state.password
                                }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log('Success:', JSON.stringify(response)) 
            if (response.username) {
                this.setState({
                        isShowSignIn: true,
                        isShowSignUp: false
                })
            }
        })
        .catch(error => console.error('Error:', error))                    
    }

    setLogin = () => {
        fetch(`http://127.0.0.1:8000/auth/token/login/`, {
            method: 'POST',
            body: JSON.stringify({
                                  username: this.state.login,
                                  password: this.state.password
                                }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log('Success:', JSON.stringify(response))            
            if (response.auth_token) {
                sessionStorage.setItem("auth_token", response.auth_token);
                this.setState({
                        isShowSignIn: false,
                        isShowMessages: true
                });
            }
        })
        .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div className="centered">
                {
                    this.state.isShowSign ? (
                        <div>
                            <button onClick={this.onSignIn}>Sign in</button>
                            <button onClick={this.onSignUp}>Sign up</button>
                        </div>
                    ) : null
                }
                
                {
                    this.state.isShowSignIn ? (
                        <div>
                            <input type="text"
                                placeholder="login"
                                value={this.state.login}
                                onChange={this.onChangeLogin}
                            />
                            <input type="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                            <button onClick={this.setLogin}>Sign in</button>
                        </div>
                    ) : null
                }

                {
                    this.state.isShowSignUp ? (
                        <div>
                            <input type="text"
                                placeholder="login"
                                value={this.state.login}
                                onChange={this.onChangeLogin}
                            />
                            <input type="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                            <button onClick={this.signUp}>Sign up</button>
                        </div>
                    ) : null
                }

                {
                    this.state.isShowMessages ? (
                        <div>
                            <h1>Hello, {this.state.login}</h1>
                            <Chat />
                        </div>    
                    ) : null
                }

                <style>{`
                    .centered {
                        position: fixed;
                        top: 20%;
                        left: 20%;
                        width: 70%;
                        height:60%;
                        background: #f0f0f0;
                    }
                `}
                </style>            
            </div>
        )
    }
}  

export default Index