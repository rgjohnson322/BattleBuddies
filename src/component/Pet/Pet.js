import React, { Component } from "react";
import "./Pet.scss"
import Axios from "axios";
// import {redirect} from "react-router-dom";
import { connect } from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

class Pet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedpet: false,
            img: props.petInfo.img,
            name: props.petInfo.name,
            location: props.petInfo.state,
            duration: props.petInfo.duration,
            type: props.petInfo.type,
            breed: props.petInfo.breed,
            about: props.petInfo.about,
            username: this.props.miliusername,
            email: this.props.miliemail

        }
    }
    
    handleChangePetUpdate = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeAddedPet = () => {
        this.setState({
            updatedpet: true

        })

    }
    submitPetUpdate = () => {
        const { img, name, location, duration, type, breed, about } = this.state
        Axios.put("api/petupdate", {
            img,
            name,
            location,
            duration,
            type,
            breed,
            about,
            id: this.props.petInfo.id
        })
        this.setState({updatedpet: false})
    }
    componentDidMount () {
        console.log(this.props.petInfo)
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
                                    src={this.state.img}
                                />
                                {
                                    this.state.updatedpet === true ?

                                        <section>
                                            <input className="puimg"
                                                name="img"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.img}
                                            ></input>
                                            <input className="puname"
                                                name="name"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.name}
                                            ></input>
                                            <input className="pulocation"
                                                name="location"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.location}
                                            ></input>
                                            <input className="puduration"
                                                name="duration"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.duration}
                                            ></input>
                                            <input className="putype"
                                                name="type"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.type}
                                            ></input>
                                            <input className="pubreed"
                                                name="breed"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.breed}
                                            ></input>
                                            <textarea className="puabout"
                                                name="about"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.about}
                                            ></textarea>
                                            <button className="SBBU"
                                                onClick={this.submitPetUpdate}>SUBMIT</button>
                                        </section>
                                        : null
                                }
                                {
                                    !this.state.updatedpet ?

                                        <div className="petinfo">
                                            <h8>service members username: {this.props.miliusername}</h8>
                                            <h8>service members email: {this.props.miliemail}</h8>
                                            <h8>pets name: {this.state.name}</h8>
                                            <h8>location: {this.state.location}</h8>
                                            <h8>duration: {this.state.duration}</h8>
                                            <h8>type: {this.state.type}</h8>
                                            <h8>breed: {this.state.breed}</h8>
                                            <h8>about: {this.state.about}</h8>
                                            <button className="MO">MESSAGE OWNER</button>
                                        </div>

                                        : null
                                }
                            </div>
                            {
                                this.props.loggedin ?

                                    <div className="petbuts">
                                        <button className="PB"
                                            onClick={this.handleChangeAddedPet}>EDIT</button>


                                        <button className="PB">DELETE</button>
                                    </div>
                                    : null}

                        </div>

                    </section>
                </div>


            </>
        )
    }
}


function mapStateToProps(reduxState) {
    return {
        loggedin: reduxState.user.user.id,
        miliusername: reduxState.user.user.username,
        miliemail: reduxState.user.user.email
    }
}
export default connect(mapStateToProps)(Pet);