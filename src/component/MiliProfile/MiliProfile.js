import React, { Component } from "react";
import LogNav from "../LogNav/LogNav"
import milipic from "../../Assets/Pics/milipic.jpg"
import "../MiliProfile/MiliProfile.scss";
import Pet from "../Pet/Pet"
import Axios from "axios";
// import axios from "axios";
// import {redirect} from "react-router-dom";
import { connect } from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

class MiliProfile extends Component {
    constructor() {
        super();

        this.state = {
            editprofile: false,
            addedpet: false,
            img: "",
            name: "",
            location: "",
            duration: "",
            type: "",
            breed: "",
            about: "",
            proimg: "",
            proabout: "",
            mypets: []
        }
    }
    handleChangeProfileUpdate = () => {
        this.setState({
            editprofile: true
        })
    }
    handleChangeProfileInput = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
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

    submitProUpdate = () => {
        const { proimg, proabout } = this.state
        Axios.post("api/profileupdate", {
            proimg,
            proabout

        })
    }
    submitPet = () => {
        const { img, name, location, duration, type, breed, about } = this.state
        Axios.post("/api/pet", {
            img,
            name,
            location,
            duration,
            type,
            breed,
            about

        })
    }



    componentDidMount() {
        console.log(1)
        Axios.get("/api/getpetbyid").then(response => {
            console.log(7)
            this.setState({ mypets: response.data })
        })
    }


    render() {



        return (
            <>
                <div className="ppage">
                    <main className="duhpic">
                        <img
                            className="ppic"
                            alt="urpic"
                            src={milipic}
                        // {this.something.somethin}
                        />
                        {
                            this.props.loggedin ?
                                <div>

                                    <button className="EP"
                                        onClick={this.handleChangeProfileUpdate}
                                    >EDIT PROFILE</button>
                                </div>
                                : null
                        }
                        {
                            this.state.editprofile === true ?
                                <section>
                                    <input className="proimg"
                                        name="proimg"
                                    ></input>
                                    <textarea className="pname"
                                        name="proabout"
                                        onChange={this.handleChangeProfileInput}
                                    ></textarea>
                                    <button className="SBB"
                                        onClick={this.submitProUpdate}>SUBMIT</button>
                                </section>
                                : null
                        }
                        {
                            !this.props.loggedin ?
                                <div>
                                    <button className="EP">MESSAGE
                        </button>
                                </div>
                                : null

                        }
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
                                        <input className="pimg"
                                            name="img"
                                            onChange={this.handleChangePetInput}
                                        ></input>
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
                            <div className="allpetss">
                                {this.state.mypets.map(pet => {
                                    return (
                                        <Pet petInfo={pet} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
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
export default connect(mapStateToProps)(MiliProfile);