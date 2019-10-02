import React, { Component } from "react";
import LogNav from "../LogNav/LogNav";
import "../VolProfile/VolProfile.scss"
import milipic from "../../Assets/Pics/milipic.jpg"
// import axios from "axios";
// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class VolProfile extends Component {
    constructor() {
        super();

        this.state = {

        }
    }



    render() {
        return (
            <>
                
                <div className="vppage">
                    <main className="volpic">
                        <img
                            className="volopic"
                            atl="urpic"
                            src={milipic}
                        // {this.something.somethin}
                        />
                        <button className="EP">EDIT PROFILE</button>
                        <button className="EP">MESSAGE 
                        {/* {this.props.firstName} */}
                        </button>
                        <h3 className="proinfo">Name:</h3>
                        <h3 className="proinfo">About:</h3>
                    </main>
                    </div>



            </>
        )
    }
}