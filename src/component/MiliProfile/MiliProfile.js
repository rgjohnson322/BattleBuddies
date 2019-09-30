import React, { Component } from "react";
import LogNav from "../LogNav/LogNav"
import milipic from "../../Assets/Pics/milipic.jpg"
import "../MiliProfile/MiliProfile.scss";
import chomp from "../../Assets/Pics/chomp.JPG"
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
                        <h3 className="proinfo">Name:</h3>
                        <h3 className="proinfo">Branch:</h3>
                        <h3 className="proinfo">About:</h3>
                    </main>
                    <section className="Addpets">

                        <button className="AP">ADD PETS</button>

                        <div className="eachpet">
                            <img
                                className="petpic"
                                atl="urpicpetspic"
                                src={chomp}
                            />
                            <h8>pets name</h8>
                        </div>


                    </section>
                </div>








            </>
        )
    }
}