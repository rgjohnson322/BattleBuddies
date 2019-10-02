import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./PetListings.scss";
import Pet from "../Pet/Pet"
// import axios from "axios";
// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class PetListings extends Component {
    constructor() {
        super();

        this.state = {

        }
    }



    render() {
        return (
            <>
                 />
                <header className="banner">

                </header>
                <div className="petholder">

                    <Pet petInfo={{about: ""}}/>

                </div>



            </>
        )
    }
}