import React, { Component } from "react";

import "./PetListings.scss";

import Axios from "axios";
import { Link } from "react-router-dom";

// import {redirect} from "react-router-dom";
import { connect } from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

class PetListings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allpets: [],

        }
    }

    componentDidMount() {
        Axios.get("/api/allpets").then(response => {
            this.setState({ allpets: response.data })
        })
    }

    render() {
        return (
            <>
                <header className="banner">

                </header>
                <div className="petholder">


                    {this.state.allpets.map(allpetss => {
                        console.log(allpetss)
                        return (
                            <div className="thepets">
                                <div className="petcontainer">
                                    <img
                                        className="petpic"
                                        alt="urpicpetspic"
                                        src={allpetss.img}
                                    />
                                    <div className="petinfo">
                                    <Link to={`/mili/${allpetss.user_id}`}>
                                        <h4 className="userlink">CLICK HERE to view service members profile</h4>
                                    </Link>
                                    <h4>service members email: {allpetss.email}</h4>
                                    <h4>pets name: {allpetss.name}</h4>
                                    <h4>location: {allpetss.state}</h4>
                                    <h4>duration: {allpetss.duration}</h4>
                                    <h4>type: {allpetss.type}</h4>
                                    <h4>breed: {allpetss.breed}</h4>
                                    <h4>about: {allpetss.about}</h4>
                                    <button className="MO">MESSAGE OWNER</button>
                                    </div>
                                    </div>
                                </div>
                                )
                            })}

                </div>



            </>
                )
                    }
                }
            function mapStateToProps(reduxState) {
                return {
                    loggedin: reduxState.user.user.id,
            }
        }
            export default connect(mapStateToProps)(PetListings);