import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./HowitWorks.scss";


function HowitWorks() {
    return (
        <>
             />
            <header className="banner">

            </header>
            <h1 className="HIWtop">How Battle Buddies works for:</h1>

            <div className="sandv">
                <section className="service">
                    <h2>Service Members</h2>

                </section>
                <section className="VolunteerT">
                    <h2>Volunteers</h2>
                </section>
            </div>

            <div className="allsteps">
                <div className="Steps1">
                    <section className="Ssteps">
                        <p className="CAstep">Step 1</p>
                        <Link to="/login">
                            <button className="CAbutton">CREATE ACCOUNT</button>
                        </Link>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 1</p>
                        <p className="theinfo">Make sure you are able to take on the responsibility
                        of a pet for up to 3 years and be able to give them back at the end</p>
                    </section> </div>
                <div className="Steps2">
                    <section className="Ssteps">
                        <p className="CAstep">Step 2</p>
                        <p className="theinfo">Set up profile page</p>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 2</p>
                        <p className="theinfo3">Check out the available pets in your area</p>
                        <Link to="/pets">
                            <button className="CAbutton2">AVAILABLE PETS</button>
                        </Link>
                    </section> </div>

                <div className="Steps3">
                    <section className="Ssteps">
                        <p className="CAstep">Step 3</p>
                        <p className="theinfo">Create your pet listing</p>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 3</p>
                        <p className="theinfo3">If you feel like there is a good fit</p>
                        <Link to="/login">
                            <button className="CAbutton2">CREATE ACCOUNT</button>
                        </Link>
                    </section> </div>

                <div className="Steps4">
                    <section className="Ssteps">
                        <p className="CAstep">Step 4</p>
                        <p className="theinfo3">Wait to recieve a message from a volunteer</p>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 4</p>
                        <p className="theinfo3">Message the owner of the pet you felt was a good fit</p>
                    </section> </div>

                <div className="Steps5">
                    <section className="Ssteps">
                        <p className="CAstep">Step 5</p>
                        <p className="theinfo3">Talk with the volunteer about your pet and the terms for them to
                    follow while taking care of them</p>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 5</p>
                        <p className="theinfo3">Come to an understanding of the pets needs and arrange for pick up</p>
                    </section> </div>

                <div className="Steps6">
                    <section className="Ssteps">
                        <p className="CAstep">Step 6</p>
                        <p className="theinfo3">Leave for training/deployment worry free!</p>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 6</p>
                        <p className="theinfo3">Go get your new Battle Buddy! Remember to stay in touch and send pictures to the service member</p>
                    </section> </div>

                <div className="Steps7">
                    <section className="Ssteps">
                        <p className="CAstep">Step 7</p>
                        <p className="theinfo3">Come home safely to your Battle Buddy!</p>
                    </section>
                    <section className="Vsteps">
                        <p className="CAstep">Step 7</p>
                        <p className="theinfo3">Welcome the service member home with their Battle Buddy!</p>
                    </section> </div>


            </div>
            <header className="banner">

            </header>

        </>

    )
}


export default HowitWorks;