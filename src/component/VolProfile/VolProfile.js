import React, { Component } from "react";

import "../VolProfile/VolProfile.scss"

import { connect } from "react-redux";
import { updateUser } from "../../redux/reducers/userReducer";
import Axios from "axios";


class VolProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editprofile: false,
            proimg: this.props.myimg,
            proabout: this.props.myabout,
            name: this.props.myname + " " + this.props.mylname
        }
    }

    componentDidMount() {
        Axios.get("/api/user/" + this.props.match.params.id).then(response => {
            console.log(response);
            if(this.props.loggedin !== response.data.id) {
                this.setState({
                    proimg: response.data.img, 
                    proabout: response.data.about,
                    name: response.data.firstname + " " + response.data.lastname
                })
            }
        })

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

    submitProUpdate = () => {
        const { proimg, proabout } = this.state
        console.log(proimg)
        Axios.put("/api/profileupdate", {
            proimg,
            proabout
        }).then(response => {
            this.props.updateUser({
                ...response.data[0],
                firstName: this.props.myname,
                lastName: this.props.mylname
            })

            console.log(response)
            this.setState({ editprofile: false })
        })
    }

    render() {
        return (
            <>

                <div className="vppage">
                    <main className="volpic">
                        <img
                            className="volopic"
                            alt="urpic"
                            src={this.state.proimg}
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
                                        placeholder="IMG URL"
                                        onChange={this.handleChangeProfileInput}
                                        defaultValue={this.state.proimg}
                                    ></input>
                                    <textarea className="pabout"
                                        name="proabout"
                                        placeholder="ABOUT"
                                        onChange={this.handleChangeProfileInput}
                                        defaultValue={this.state.proabout}
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
                        <h3 className="proinfo">Name:{this.state.name}</h3>
                        <h3 className="proinfo">About:{this.state.proabout}</h3>
                    </main>
                </div>



            </>
        )
    }
}
function mapStateToProps(reduxState) {
    console.log(reduxState);
    return {
        loggedin: reduxState.user.user.id,
        myimg: reduxState.user.user.img,
        myabout: reduxState.user.user.about,
        myname: reduxState.user.user.firstName,
        mylname: reduxState.user.user.lastName
    }
}
export default connect(mapStateToProps, { updateUser })(VolProfile);