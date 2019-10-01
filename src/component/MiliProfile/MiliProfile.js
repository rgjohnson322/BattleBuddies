import React, { Component } from "react";
import LogNav from "../LogNav/LogNav"
import milipic from "../../Assets/Pics/milipic.jpg"
import "../MiliProfile/MiliProfile.scss";
import Pet from "../Pet/Pet"
// import axios from "axios";
// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class MiliProfile extends Component {
    constructor() {
        super();

        this.state = {

        }
    }



    render() {
        return (
            <>
                <LogNav />
                <div className="ppage">
                    <main className="duhpic">
                        <img
                            className="ppic"
                            atl="urpic"
                            src={milipic}
                        // {this.something.somethin}
                        />
                        <button className="EP">EDIT PROFILE</button>
                        <button className="EP">MESSAGE
                        {/* {this.props.firstName} */}
                        </button>
                        <h3 className="proinfo">Name:</h3>
                        <h3 className="proinfo">Branch:</h3>
                        <h3 className="proinfo">About:</h3>
                    </main>
                    <div className="petside">
                    <div className="APBC">
                    <button className="AP">ADD PETS</button>
                    </div>
                    <Pet />
                    </div>
                </div>







            </>
        )
    }
}