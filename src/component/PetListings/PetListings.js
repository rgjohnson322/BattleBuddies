import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./PetListings.scss";
import Pet from "../Pet/Pet"
import Axios from "axios";
import { Link } from "react-router-dom";

// import {redirect} from "react-router-dom";
import {connect} from "react-redux";
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
                            <div className="petinfo">
                                    <img
                                    className="petpic"
                                    alt="urpicpetspic"
                                    src={allpetss.img}
                                />
                                <Link to={`/mili/${allpetss.user_id}`}>
                                <h8>service members profile: {allpetss.username}</h8>
                                </Link>
                                <h8>service members email: {allpetss.email}</h8>
                                <h8>pets name: {allpetss.name}</h8>
                                <h8>location: {allpetss.state}</h8>
                                <h8>duration: {allpetss.duration}</h8>
                                <h8>type: {allpetss.type}</h8>
                                <h8>breed: {allpetss.breed}</h8>
                                <h8>about: {allpetss.about}</h8>
                                <button className="MO">MESSAGE OWNER</button>
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