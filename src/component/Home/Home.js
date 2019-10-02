import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.scss";
// import Youtube from 'react-youtube'
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"


class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            Donate: ""
        }
    }
    render () {
    return (
        <>
        <main className="flag">
            <div className="Pstat1">
            <h1 className="stat1">1 IN 5 <br/> <p> &nbsp;</p>Iraq/Afghanistan vets suffer from depression</h1>

            </div>
            <div className="Pstat2">
            <h1 className="stat2">${this.state.donate}<br/> <p> &nbsp;</p>Donated so far! <br/><p> &nbsp;</p>
                <Link to="/donate">
                    <button className="Db">DONATE!</button>
                    </Link>
            </h1>
            </div>
            <div className="Pstat3">

            <h1 className="stat3">22 <br/> <p> &nbsp;</p> Average number of <br/>veteran suicides <br/>per day</h1>
            </div>
        </main>
            <Footer />

        </>
    )
}
}


export default Home;