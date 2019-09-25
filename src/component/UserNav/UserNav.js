import React from "react";
import { Link } from "react-router-dom";


class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            // menuOpenStatus: "top-menu"
        }
    }

    // toggle = () => {
    //     if (this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu") {
    //         this.setState({ menuOpenStatus: "top-menu-open" });
    //     } else if (this.state.menuOpenStatus === "top-menu-open") {
    //         this.setState({ menuOpenStatus: "top-menu-close" });
    //     }
    // }
    render() {
        return (
            <>
                <nav className="tiptop">
                    <div className="top">
                        <Link to="/">
                            <img
                                className="HB"
                                alt="BigLogo"
                                src="https://thumbnails-photos.amazon.com/v1/thumbnail/SIlAbVy9RwGGmnZPKRFiyw?viewBox=3840%2C1020&ownerId=A2MLGXH5NY97BN"
                            />
                        </Link>

                    </div>
                    <div>
                        <ul>
                            <li>AVAILABLE PETS</li>
                            <li>
                                <img className="profileB" 
                                alt="personsil" 
                                src = "https://banner2.kisspng.com/20180401/dhe/kisspng-computer-icons-user-profile-material-design-profile-5ac092c55ae228.2478628115225699253723.jpg" /> </li>
                            <li>
                                <img className="messageB"
                                alt="chat"
                                src = "https://cdn1.iconfinder.com/data/icons/style-1-stock/807/Messages-01.png"/>
                            </li>
                            <li>ACCOUNT</li>
                            <li>LOG OUT</li>
                            <li className="MB" onClick={this.toggle}> <button
                                className="TMB">

                                <img
                                    className="hamburgerB"
                                    alt="hamburger"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"

                                /></button></li>
                        </ul>
                    </div>
                </nav>
                <div className={`${this.state.menuOpenStatus}`}>
                    <div className="openlist">
                        <h3>AVAILABLE PETS</h3>
                        <h3>PROFILE</h3>
                        <h3>MESSAGES</h3>
                        <h3>ACCOUNT</h3>
                        <h3>LOG OUT</h3>

                    </div>
                </div>
            </>
        )
    }
}

export default UserNav;