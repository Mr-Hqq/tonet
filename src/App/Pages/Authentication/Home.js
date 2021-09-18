import React from 'react';
import logo from '../../Assets/Images/logo.svg';
import flag from '../../Assets/Images/flag.svg';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <div className="Rectangle-23">
                <img src={logo}
                     className="Group-93"/>
                <p className="welcome-to-Tonet">
                    welcome to Tonet
                </p>
                <p className="sign-in-or-sign-up-whit-your-phone-numbers-to-manage-your-tonet-account">sign in or sign
                    up whit your phone numbers to manage your tonet account</p>
                <div className="Rectangle-12">
                    <div style={{position: "relative"}}>
                        <img style={{position: "absolute", top: "40%", left: "5%"}} src={flag}
                             className="Mask-Group-7"/>
                        <input type="text" placeholder={"enter your phone number..."} className="Rectangle-132"/>
                    </div>
                    <Link to="/otp"><button class="Rectangle-16">continue</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
