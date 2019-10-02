import React, { Component, useRef } from "react";
import "./Donate.scss";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav"
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
                 />
                <header className="banner">

                </header>
                <main className="dtop">
                    <h1>Every donation goes to supporting the<br /> <a className="bblink"
                    onClick={this.scrollToRef}>Battle Buddies Mission

                        </a></h1>

                </main>
                        <div className="dp">
                            <input className="dpay" placeholder="Amount"></input>
                            <input className="dpay" placeholder=""></input>
                            <input className="dpay" placeholder=""></input>
                            <input className="dpay" placeholder=""></input>
                            <input className="dpay" placeholder=""></input>
                            <input className="dpay" placeholder=""></input>
                            <button className= "dpb">SUBMIT DONATION</button>
                        </div>
                
                <Footer />



            </>
        )
    }
}