import React, { Component } from "react";
import "./Pet.scss"
import Axios from "axios";
// import {redirect} from "react-router-dom";
import { connect } from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

class Pet extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            // updatedpet: false,
            // img: props.petInfo.img,
            // name: props.petInfo.name,
            // location: props.petInfo.state,
            // duration: props.petInfo.duration,
            // type: props.petInfo.type,
            // breed: props.petInfo.breed,
            // about: props.petInfo.about,
            // username: this.props.miliusername,
            // email: this.props.miliemail,
            img: "",
            name: "",
            location: "",
            duration: "",
            type: "",
            breed: "",
            about: "",
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
        let { img, name, location, duration, type, breed, about } = this.state
        if(img === "") {
            img = this.props.petInfo.img;
        }
        if(name === "") {
            name = this.props.petInfo.name;
        }
        if(location === "") {
            location = this.props.petInfo.state;
        }
        if(duration === "") {
            duration = this.props.petInfo.duration;
        }
        if(type === "") {
            type = this.props.petInfo.type;
        }
        if(breed === "") {
            breed = this.props.petInfo.breed;
        }
        if(about === "") {
            about = this.props.petInfo.about;
        }
        Axios.put("/api/petupdate", {
            img,
            name,
            location,
            duration,
            type,
            breed,
            about,
            id: this.props.petInfo.id
        }).then(response => {
            this.props.updatePets(response.data);
        })
        this.setState({ updatedpet: false })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props.img !== )
    // }
    render() {
        return (
            <>
                <div>
                    <section className="Addpets">

                        <div className="wholepet">
                            <div className="eachpet">
                                <img
                                    className="petpic"
                                    alt="urpicpetspic"
                                    src={this.props.petInfo.img}
                                />
                                {
                                    this.state.updatedpet === true ?

                                        <section className="EI">
                                            <input className="pin"
                                                name="img"
                                                placeholder="IMG URL"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.img}
                                            ></input>
                                            <input className="pin"
                                                name="name"
                                                placeholder="PETS NAME"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.name}
                                            ></input>
                                            <input className="pin"
                                                name="location"
                                                placeholder="LOCATION"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.state}
                                            ></input>
                                            <input className="pin"
                                                name="duration"
                                                placeholder="DURATION"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.duration}
                                            ></input>
                                            <input className="pin"
                                                name="type"
                                                placeholder="TYPE OF PET"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.type}
                                            ></input>
                                            <input className="pin"
                                                name="breed"
                                                placeholder="BREED"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.breed}
                                            ></input>
                                            <textarea className="pinabout"
                                                name="about"
                                                placeholder="ABOUT THE PET"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.props.petInfo.about}
                                            ></textarea>
                                            <button className="PB"
                                                onClick={this.submitPetUpdate}>SUBMIT</button>
                                        </section>
                                        : null
                                }
                                {
                                    !this.state.updatedpet ?

                                        <div className="petinfo">
                                            
                                            {/* <h4>service members username: {this.state.miliusername}</h4>
                                            <h4>service members email: {this.state.miliemail}</h4> */}
                                            <h4>pets name: {this.props.petInfo.name}</h4>
                                            <h4>location: {this.props.petInfo.state}</h4>
                                            <h4>duration: {this.props.petInfo.duration}</h4>
                                            <h4>type: {this.props.petInfo.type}</h4>
                                            <h4>breed: {this.props.petInfo.breed}</h4>
                                            <h4>about: {this.props.petInfo.about}</h4>
                                            <h4>pet id: {this.props.petInfo.id}</h4>
                                            <button className="MO">MESSAGE OWNER</button>
                                        </div>

                                        : null
                                }
                            </div>
                            {
                                this.props.loggedin == this.props.userId ?

                                    <div className="petbuts">
                                        <button className="PB"
                                            onClick={this.handleChangeAddedPet}>EDIT</button>


                                        <button className="PB"
                                            onClick={()=> this.props.deletePet(this.props.petInfo.id)}
                                        >DELETE</button>
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