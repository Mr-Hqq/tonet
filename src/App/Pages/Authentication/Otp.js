import React, {useCallback, useEffect, useState} from 'react';
import logo from "../../Assets/Images/logo.svg";
import OtpInput from 'react-otp-input';
import axios from "axios"
import {Link, Redirect} from "react-router-dom";
import flag from "../../Assets/Images/flag.svg";
import NumberFormat from 'react-number-format';

function Otp() {
    const [isOtp, setIsOtp] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const sendRequest = useCallback(async () => {
        if (isLoading) return
        setIsLoading(true)
        await axios.post("/auth/otp-make", {phoneNumber: phoneNumber})
        setIsLoading(false)
        setIsOtp(true)
    }, [isLoading])
    const sendRequestOtp = useCallback(async () => {
        if (isLoading) return
        setIsLoading(true)
        const token = await axios.post("/auth/otp-login", {phoneNumber: phoneNumber})
        const decodedToken = parseJwt(token.data)
        const isCompleted = decodedToken.status === "COMPLETED"
        setIsLoading(false)
        if(!isCompleted) {
            return <Redirect to='/complete'/>;
        }else{
            // do something
        }
    }, [isLoading])
    return (
        <div className="App">
            <div className="Rectangle-23">
                <img src={logo}
                     className="Group-93"/>
                {isOtp ? <p className="welcome-to-Tonet">verification</p> :
                    <p className="welcome-to-Tonet">welcome to Tonet</p>}
                {isOtp ? <p className="enter-the-5-digit-code-send-to-98903-094-9095">
                    enter the 5 digit code send to <br/>
                    <NumberFormat value={phoneNumber} format="(+98) ###-###-####" displayType={'text'}
                                  thousandSeparator={true} prefix={'(+98)-'}/>
                </p> : <p className="sign-in-or-sign-up-whit-your-phone-numbers-to-manage-your-tonet-account">sign in or
                    sign
                    up whit your phone numbers to <br/> manage your tonet account</p>}
                <div className="Rectangle-12" style={{marginBottom: 15}}>
                    {isOtp ? otpView(setOtp, otp, sendRequestOtp) : phoneNumberView(setIsOtp, setPhoneNumber, phoneNumber, sendRequest)}
                </div>
                {
                    isOtp ? <a onClick={() => {
                        setIsOtp(false)
                    }}><span style={{cursor: "pointer"}}
                             className="back-to-change-phone-numbers">&lt; back to change phone numbers</span></a> : null
                }

            </div>
        </div>
    );
}
function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
const otpView = (setOtp, otp, sendRequestOtp) => {
    return (
        <div>
            <OtpInput
                onChange={(otp) => {
                    setOtp(otp)
                }}
                numInputs={5}
                inputStyle={{
                    border: "none",
                    borderBottom: "2px solid #000",
                    width: 40,
                    borderColor: "#ccc",
                    height: 50,
                    marginBottom: 10,
                    color: "#1d1a1a"
                }}
                containerStyle={{
                    marginLeft: 5, marginBottom: 20, alignItems: 'center',
                    justifyContent: 'center'
                }}
                value={otp}
                separator={<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
            />
            <button onClick={() => {
                sendRequestOtp()
            }} className="Rectangle-16">continue
            </button>
        </div>
    )
}

const phoneNumberView = (setOtp, setPhoneNumber, phoneNumber, sendRequest) => {
    return (
        <div>
            <div style={{position: "relative"}}>
                <img style={{position: "absolute", top: "35%", left: "7%"}} src={flag}
                     className="Mask-Group-7"/>
                <span style={{position: "absolute", top: "39%", left: "14.5%", fontSize: 12}}
                      className="Mask-Group-7">(+98)</span>
                <input type="text" placeholder={"enter your phone number..."} onChange={(event => {
                    setPhoneNumber(event.target.value)
                })} value={phoneNumber} className="login-input"/>
            </div>
            <button onClick={() => {
                sendRequest()
            }} className="Rectangle-16">CONTINUE
            </button>
        </div>
    );
}


export default Otp;
