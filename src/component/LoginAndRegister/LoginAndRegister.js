import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./LoginAndRegister.scss";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {updateUser} from "../../redux/reducers/userReducer";


class LoginAndRegister extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
            isVolunteer: null,
            clickedRegister: false,
            triedToClick: false,
            shouldRedirect: false,
            serverErrorMessage: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegisterClick = () => {
        const { username, password, email, firstName, lastName, isVolunteer } = this.state;
        if (username !== "" && password !== "" && email !== "" && firstName !== "" && lastName !== "" && isVolunteer !== null) {
            axios.post("/auth/register", {
                username, password, email, firstName, lastName, isVolunteer
            }).then(response => {
                this.props.updateUser({ username, email, firstName, lastName, isVolunteer });
                this.setState({ shouldRedirect: true });
            }).catch(error => {
                this.setState({ serverErrorMessage: error.response.data.error });
            })
        } else {
            this.setState({ triedToClick: true })
        }
    }
    handleLoginClick = e => {
        const { username, password } = this.state;
        if (username === "" && password === "") {
            this.setState({ triedToClick: true });
        } else {
            axios.post("/auth/login", {
                username, password
            }).then(response => {
                console.log(response.data.isVolunteer);
                this.props.updateUser(response.data);
                this.setState({ shouldRedirect: true, isVolunteer: response.data.isVolunteer })
            }).catch(err => {
                this.setState({ serverErrorMessage: err.response.data.error });
            })
        }
    }

    render() {
        if (this.state.shouldRedirect === true && this.state.isVolunteer === false) {
            return <Redirect to={"/mili/" + this.props.id} />
        } else if (this.state.shouldRedirect === true && this.state.isVolunteer === true) {
            return <Redirect to={"/vol/" + this.props.id} />
        }
        return (
            <>
                <Nav />
                <header className="banner">

                </header>
                <h1 className="topS">LOG IN OR CREATE AN ACCOUNT</h1>

                <div className='Istuff'>
                    {this.state.triedToClick === true ? <h1 className="errorm">Please Fill in all the Fields</h1> : null}
                    {this.state.serverErrorMessage !== "" ? <h1>{this.state.serverErrorMessage}</h1> : null}
                    <main className="userLI">
                        <label>Username:</label>
                        <input className="UI"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                        <label>Password:</label>
                        <input className="PI"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <button className="SIB"
                            onClick={this.handleLoginClick}
                        >SIGN IN</button>

                    </main>
                </div>
                    <div className="Istuff">
                        <section className="Reg">
                            <h3>Username:</h3>
                            <input
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                            />
                            <label>Password:</label>
                            <input
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}

                            ></input>
                            <label>First Name:</label>
                            <input
                                name="firstName"
                                placeholder="First Name"
                                onChange={this.handleChange}

                            ></input>
                            <label>Last Name:</label>
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                onChange={this.handleChange}

                            />
                            <label>Email:</label>
                            <input
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}

                            />
                            <div className="choice">
                                <input
                                    type="radio"
                                    value="Volunteer"
                                    name="userType"
                                    onClick={() => this.setState({ isVolunteer: true })}
                                />
                                
                                <input
                                    type="radio"
                                    value="Service Member"
                                    name="userType"
                                    onClick={() => this.setState({ isVolunteer: false })}
                                />
                                
                            </div>
                            <div className="pick">
                            <h6>Volunteer</h6>
                            <h6>Service Member</h6>
                            </div>
                            <button className="CAB"
                                onClick={this.handleRegisterClick}
                            >CREATE ACCOUNT</button>

                        </section>

                </div>






            </>
        )
    }
}
function mapStateToProps (reduxState) {
    return {
        id :reduxState.user.user.id,
    }
}


export default connect(mapStateToProps,{updateUser})(LoginAndRegister);