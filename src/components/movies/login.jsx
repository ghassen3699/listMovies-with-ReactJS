import React , {Component} from "react";
import Input from './input.jsx' ;


export default class Login extends Component {
    state = {
        account : {
            username : "",
            password : "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        const account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value
        this.setState({account})
        console.log(this.state.account)
    }


    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" label="username" value={this.state.account.username} handleChange={this.handleChange} />
                    <Input name="password" label="password" value={this.state.account.password} handleChange={this.handleChange} />
                    <br/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )}
};