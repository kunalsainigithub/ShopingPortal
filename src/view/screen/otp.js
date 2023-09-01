
import { useState } from "react"
import OTPInput from "react-otp-input"
import { useNavigate } from "react-router-dom";

export default function OTP() {
    const [otp, setOtp] = useState('')
    const nav = useNavigate();

    function OTP() {
        alert(otp);
        nav("/final")
    }
    return (
        // <div>
        //     <h3>Enter the OTP sent to Mobile</h3>
        //     <div className="otp-field">
        //         <input className = "space" type="text" maxLength="1"/>
        //         <input className = "space" type="text" maxLength="1"/>
        //         <input className = "space" type="text" maxLength="1"/>
        //         <input className = "space" type="text" maxLength="1"/>
        //     </div>
        //     <div>
        //         <a href="/final">Confirm</a>

        //     </div>
        // </div>
        <div>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            <div>
                <button onClick={OTP}>Confirm</button>
            </div>
        </div>

    )
}