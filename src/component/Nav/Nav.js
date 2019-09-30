import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.scss";
import logoBIG from "../../Assets/Pics/logoBIG.png"


class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            menuOpenStatus: "top-menu"
        }
    }

    toggle = () => {
        if (this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu") {
            this.setState({ menuOpenStatus: "top-menu-open" });
        } else if (this.state.menuOpenStatus === "top-menu-open") {
            this.setState({ menuOpenStatus: "top-menu-close" });
        }
    }
    render() {

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
                                <Link to="/steps">
                                    <li>HOW IT WORKS</li> </Link>
                                <Link to="/pets">
                                    <li>AVAILABLE PETS</li>
                                </Link>
                                <Link to="/shop">

                                    <li>SHOP</li>
                                </Link>
                                <Link to="/donate">

                                    <li>DONATE</li>
                                </Link>
                                <Link to="/login">

                                    <li>SIGN IN</li>
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
                                <Link to="/steps">
                                    <h3 id="HIW">HOW IT WORKS</h3> </Link>
                                <Link to="/pets">
                                    <h3 id="AP">AVAILABLE PETS</h3>
                                </Link>
                                <Link to="/shop">

                                    <h3 id="S">SHOP</h3>
                                </Link>
                                <Link to="/donate">

                                    <h3 id="D">DONATE</h3>
                                </Link>
                                <Link to="/login">

                                    <h3 id="SI">SIGN IN</h3>
                                </Link>

                            </div>
                        </div>

                    </nav>
            </>
                )
            }
        }
export default Nav;