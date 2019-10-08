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

                                        <section>
                                            <input className="puimg"
                                                name="img"
                                                placeholder="IMG URL"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.img}
                                            ></input>
                                            <input className="puname"
                                                name="name"
                                                placeholder="PETS NAME"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.name}
                                            ></input>
                                            <input className="pulocation"
                                                name="location"
                                                placeholder="LOCATION"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.location}
                                            ></input>
                                            <input className="puduration"
                                                name="duration"
                                                placeholder="DURATION"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.duration}
                                            ></input>
                                            <input className="putype"
                                                name="type"
                                                placeholder="TYPE OF PET"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.type}
                                            ></input>
                                            <input className="pubreed"
                                                name="breed"
                                                placeholder="BREED"
                                                onChange={this.handleChangePetUpdate}
                                                defaultValue={this.state.breed}
                                            ></input>
                                            <textarea className="puabout"
                                                name="about"
                                                placeholder="ABOUT THE PET"
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
                                            
                                            <h4>service members username: {this.props.miliusername}</h4>
                                            <h4>service members email: {this.props.miliemail}</h4>
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
                                this.props.loggedin ?

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