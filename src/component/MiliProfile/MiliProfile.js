import React, { Component } from "react";
import "../MiliProfile/MiliProfile.scss";
import Pet from "../Pet/Pet"
import Axios from "axios";
// import axios from "axios";
// import {redirect} from "react-router-dom";
import { connect } from "react-redux";
import {updateUser} from "../../redux/reducers/userReducer";

class MiliProfile extends Component {
    constructor(props) {
        super(props);

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
            proimg: this.props.myimg,
            proabout: this.props.myabout,
            myname: this.props.myname,
            mylname: this.props.mylname,
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
        const { proimg, proabout} = this.state
        console.log(proimg)
        Axios.put("/api/profileupdate", {
            proimg,
            proabout
        }).then(response => {
            //update user info in redux
            this.props.updateUser({
                ...response.data[0],
                firstName: this.props.myname,
                lastName: this.props.mylname
            })

            console.log(response)
            this.setState({editprofile: false})
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
        }).then(response => {
            this.setState({ 
                mypets: response.data,
                addedpet:false
            
            })
        })
    }

    handleDelete = (id) => {
        console.log(id)
        Axios.delete(`/api/pet/${id}`).then(response => {
            console.log(response)
            // this.refreshPets();
            this.setState({
                mypets: response.data
            })
        })
    }

    updatePets = (pets) => {
        this.setState({mypets: pets})
    }


    componentDidMount() {
        Axios.get("/api/user/" + this.props.match.params.id).then(response => {
            console.log(response);
            if(this.props.loggedin !== response.data.id) {
                this.setState({
                    proimg: response.data.img, 
                    proabout: response.data.about,
                    myname: response.data.firstname, 
                    mylname: response.data.lastname
                })
            }
        })
        Axios.get("/api/pet/" + this.props.match.params.id).then(response => {
            console.log(response)
            this.setState({ mypets: response.data })
        })

    }

    // refreshPets= async() => {
    //     await Axios.get("/api/getpetbyid").then(response => {
    //         console.log(response)
    //         this.setState({ mypets: response.data })
    //     })
    // }

    // checkUploadResult = (error,resultEvent) => {
    //     if (resultEvent.event === "success") {
    //         console.log("Picture uploaded successfully")
    //         console.log(resultEvent.info.url);
    //         this.setState({url: resultEvent.info.url});
    //     }
    // };
    render() {
        // const widget = window.cloudinary.createUploadWidget(
        //     {
        //     cloudName: "dhiewclxm",
        //     uploadPreset: "jxphfpdy",
        //     sources: ["local", "url", "dropbox", "facebook", "instagram"]
        //     },
        //     (error, result) => {
        //     this.checkUploadResult(error, result);
        //     })
        return (
            <>
                <div className="ppage">
                    <main className="duhpic">
                        <img
                            className="ppic"
                            alt="urpic"
                            src={this.state.proimg}

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
                                        onChange={this.handleChangeProfileInput}
                                        defaultValue={this.props.myimg}
                                    ></input>
                                        {/* <button 
                                    className='cloud' onClick ={()=>widget.open()}>add pic</button> */}
                                    <textarea className="pabout"
                                        name="proabout"
                                        onChange={this.handleChangeProfileInput}
                                        defaultValue={this.props.myabout}
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
                        <h3 className="proinfo">Name:{this.state.myname} {this.state.mylname}</h3>
                        <h3 className="proinfo">About:{this.state.proabout}</h3>
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
                                            placeholder="IMG URL"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="pname"
                                            name="name"
                                            placeholder="PETS NAME"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="plocation"
                                        placeholder="LOCATION"
                                            name="location"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="pduration"
                                        placeholder="DURATION"
                                            name="duration"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="ptype"
                                        placeholder="TYPE OF PET"
                                            name="type"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <input className="pbreed"
                                        placeholder="BREED"
                                            name="breed"
                                            onChange={this.handleChangePetInput}
                                        ></input>
                                        <textarea className="pabout"
                                            name="about"
                                            placeholder="ABOUT THE PET"
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
                                        <Pet 
                                        petInfo={pet}
                                        updatePets={this.updatePets}
                                            deletePet={this.handleDelete} />
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
        myimg: reduxState.user.user.img,
        myabout: reduxState.user.user.about,
        myname: reduxState.user.user.firstName,
        mylname: reduxState.user.user.lastName
    }
}
export default connect(mapStateToProps,{updateUser})(MiliProfile);