import React from "react";
import { Link } from "react-router-dom";
import logoBIG from "../../Assets/Pics/logoBIG.png"
import "./LogNav.scss";
import { connect } from "react-redux";
import Nav from "../Nav/Nav"
import Axios from "axios";
import {updateUser} from "../../redux/reducers/userReducer"

class LogNav extends React.Component {

    constructor() {
        super();
        this.state = {
            menuOpenStatus: "top-menu"
        }
    }
    handleClickLo = () => {
        Axios.delete("/auth/logout").then(response => {
            this.props.updateUser({}) 
        })
    }
    toggle = () => {
        if (this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu") {
            this.setState({ menuOpenStatus: "top-menu-open" });
        } else if (this.state.menuOpenStatus === "top-menu-open") {
            this.setState({ menuOpenStatus: "top-menu-close" });
        }
    }

    render() {
        console.log(this.props.loggedin)
            if (this.props.loggedin === undefined) {
                return (
                <Nav />
                )
            }
        return (
            <>
                <nav className="tiptop">
                    <div className="top">
                        <Link to="/">

                            <img
                                className="Blogo"
                                alt="BigLogo"
                                src={logoBIG}
                            />

                        </Link>
                        <ul>
                            <Link to="/pets">
                                <li>AVAILABLE PETS</li> </Link>

                            <Link to={
                                    this.props.isVolunteer ?
                                    ("/vol/" + this.props.loggedin)
                                    :
                                    ("/mili/" + this.props.loggedin)
                            }>
                                <li>
                                    PROFILE
                                    </li>
                            </Link>
                            <Link to="/chat">

                                <li>MESSAGES</li>
                            </Link>
                            <Link to="/">

                                <li
                                onClick={this.handleClickLo}>LOG OUT</li>
                            </Link>
                            <li className="MB">
                                <img
                                    onClick={this.toggle}
                                    className="hamburgerB"
                                    alt="hamburger"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" />

                            </li>
                        </ul>
                    </div>
                    <div className={`${this.state.menuOpenStatus}`}>
                            <div className="openlist">
                                <Link to="/pets">
                                    <h3 id="HIW">AVAILABLE PETS</h3> </Link>
                                <Link to="/mili">
                                    {/* link to /vol */}
                                    <h3 id="AP">PROFILE</h3>
                                </Link>
                                <Link to="/chat">

                                    <h3 id="S">MESSAGES</h3>
                                </Link>
                                <Link to="/">

                                    <h3 id="D"
                                    onClick={this.handleClickLo}>LOG OUT</h3>
                                </Link>

                            </div>
                        </div>


                </nav>




            </>



        )

    }
}

function mapStateToProps (reduxState) {
    console.log(reduxState)
    return {
        loggedin: reduxState.user.user.id,

        isVolunteer: reduxState.user.user.isVolunteer
    }
}
export default connect(mapStateToProps, {updateUser})(LogNav);