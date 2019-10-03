import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./PetListings.scss";
import Pet from "../Pet/Pet"
import Axios from "axios";

// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class PetListings extends Component {
    constructor() {
        super();

        this.state = {
            allpets: []
        }
    }

    componentDidMount() {
        Axios.get("/api/allpets").then(response => {
            this.setState({ allpets: response.data })
        })
    }

    render() {
        console.log(this.state.allpets)
        return (
            <>
                <header className="banner">

                </header>
                <div className="petholder">

                    {this.state.allpets.map(allpets => {
                        return (
                            <div className="petinfo">
                                <h8>service members username: {allpets.username}</h8>
                                <h8>service members email: {allpets.email}</h8>
                                <h8>pets name: {allpets.name}</h8>
                                <h8>location: {allpets.location}</h8>
                                <h8>duration: {allpets.duration}</h8>
                                <h8>type: {allpets.type}</h8>
                                <h8>breed: {allpets.breed}</h8>
                                <h8>about: {allpets.about}</h8>
                                <button className="MO">MESSAGE OWNER</button>
            </div>
                                )
                            })}
         
                </div>



            </>
        )
            }
}