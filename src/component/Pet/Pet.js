import React, { Component } from "react";
import chomp from "../../Assets/Pics/chomp.JPG"
import "./Pet.scss"
// import axios from "axios";
// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class Pet extends Component {
    constructor() {
        super();

        this.state = {

        }
    }



    render() {
        return (
            <>
            <div>
                <section className="Addpets">

                    <div className="wholepet">
                        <div className="eachpet">
                            <img
                                className="petpic"
                                atl="urpicpetspic"
                                src={chomp}
                            />
                            <div className="petinfo">
                                <h8>service members username (link to profile)</h8>
                                <h8>service members email:</h8>
                                <h8>pets name</h8>
                                <h8>location</h8>
                                <h8>duration</h8>
                                <h8>type</h8>
                                <h8>breed</h8>
                                <h8>about</h8>
                            </div>
                                <button className="MO">MESSAGE OWNER</button>
                        </div>
                        <div className="petbuts">
                            <button className="PB">EDIT</button>
                            <button className="PB">DELETE</button>
                        </div>
                    </div>


                </section>
            </div>


            </>
        )
    }
}