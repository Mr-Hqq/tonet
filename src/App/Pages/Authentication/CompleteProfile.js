import React from 'react';
import avatar from "../../Assets/Images/avatar.svg";
import OtpInput from "react-otp-input";
import user from "../../Assets/Images/user.svg";
import mail from "../../Assets/Images/mail.svg";
import check from "../../Assets/Images/check.svg";

function CompleteProfile() {
    return (
        <div className="App">
            <div className="Rectangle-23">
                <span className="complete-your-infomation">complete your information</span>
                <span
                    className="enter-the-5-digit-code-send-toenter-the-5-digit-code-send-toenter-the-5-digit-code-send-toenter-the">
                    enter the 5 digit code send toenter the 5 digit code send toenter the<br/>5 digit code send toenter the
                </span>
                <div className="Rectangle-1222">
                    <div style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={avatar}
                             className="Group-97"/>

                    </div>
                    <div style={{position: "relative"}}>
                        <img style={{position: "absolute", top: "40%", left: "13%"}} src={user}
                             className="Mask-Group-7"/>
                        <input type="text" placeholder={"enter your title..."} className="Rectangle-132"/>
                    </div>
                    <div style={{position: "relative"}}>
                        <img style={{position: "absolute", top: "40%", left: "13%"}} src={mail}
                             className="Mask-Group-7"/>
                        <input type="text" placeholder={"enter the user name..."} className="Rectangle-132"/>
                    </div>
                    <button className="Rectangle-16-absolute">LETS START</button>
                    <p
                        className="By-logging-in-or-registering-with-Torrent-you-agree-to-the-terms-and-conditions-of-use-of-Torrent-Site-Services-and-its-privacy-policy">By logging in or registering with Torrent, you agree to the <span
                        className="text-style-1">terms and conditions </span>of use of Torrent Site Services and its privacy policy.</p>
                </div>

            </div>
        </div>
    );
}

export default CompleteProfile;
