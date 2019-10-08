import React, { Component } from "react";
import "./Donate.scss";
import Footer from "../Footer/Footer";
import Stripe from "../Stripe/Stripe"


// import axios from "axios";
// import {redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {updateUser} from "../redux/reducers/userReducer";

export default class Donate extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    scrollToRef = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }

    render() {


        return (

            <>

                <header className="banner">

                </header>
                <main className="dtop">
                    <h1>Every donation goes to supporting the<br /> <a className="bblink"
                        onClick={this.scrollToRef}>Battle Buddies Mission

                        </a></h1>

                </main>
                <div className="dp">
                        <h3 className="instruct">Make a donation by clicking the little blue button</h3>
                    <div className="stripe">
                        <Stripe />
                    </div>
                </div>

                <Footer />



            </>
        )
    }
}