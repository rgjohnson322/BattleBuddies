
import React from "react";
import {Switch, Route} from "react-router-dom";
import VolProfile from "./component/VolProfile/VolProfile";
import MiliProfile from "./component/MiliProfile/MiliProfile";
import LoginAndRegister from "./component/LoginAndRegister/LoginAndRegister";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";
import Donate from "./component/Donate/Donate";
import HowitWorks from "./component/HowitWorks/HowitWorks";
import PetListings from "./component/PetListings/PetListings";
import Shop from "./component/Shop/Shop";
import Chat from "./component/Chat/Chat"

export default (
    <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/pets" component={PetListings} />
        <Route path="/mili" component={MiliProfile} />
        <Route path="/vol" component={VolProfile} />
        <Route path="/shop" component={Shop} />

        <Route path="/donate" component={Donate} />
        <Route path="/steps" component={HowitWorks} />
        <Route path="/login" component={LoginAndRegister} />
        <Route exact path="/" component={Home} />
    </Switch>
)