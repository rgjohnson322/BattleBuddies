import React, { Component } from "react";
import LogNav from "../LogNav/LogNav"
import milipic from "../../Assets/Pics/milipic.jpg"
import "../MiliProfile/MiliProfile.scss";
import Pet from "../Pet/Pet"
import Axios from "axios";
// import axios from "axios";
// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class MiliProfile extends Component {
    constructor() {
        super();

        this.state = {
            addedpet: false,
            name: "",
            location: "",
            duration: "",
            type: "",
            breed: "",
            about: ""
        }
    }

    handleChangeAddedPet = () => {
        this.setState({
            addedpet: true

        })

    }
    handleChangePetInput = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitPet = () => {
        const {name, location, duration, type, breed, about} = this.state
        Axios.post("/api/pet", {
            name, 
            location,
            duration,
            type,
            breed,
            about
        })
    }



    componentDidMount


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
                        <h3 className="proinfo">About:</h3>
                    </main>
                    <div className="petside">
                        <div className="APBC">
                            <button
                                className="AP"
                                onClick={this.handleChangeAddedPet}
                            >ADD PETS</button>

                            {
                                this.state.addedpet === true ?
                                    <section>

                                        <input className="pname"
                                            name="name"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="plocation"
                                            name="location"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="pduration"
                                            name="duration"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="ptype"
                                            name="type"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="pbreed"
                                            name="breed"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <textarea className="pabout"
                                            name="about"
                                            onChange={this.handleChangePetInput}
                                        ></textarea>
                                        <button className="SBB"
                                        onClick={this.submitPet}>SUBMIT</button>
                                    </section>



                                    : null
                            }
                        </div>
                        <Pet />
                    </div>
                </div>







            </>
        )
    }
}