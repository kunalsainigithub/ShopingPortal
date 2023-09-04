import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";



export default function Confirm(){
    const data1 = useContext(AuthContext)
    console.log(data1);
    const nav = useNavigate();

    function otp(){
        nav ("/otp");
    }
    return(
        <>
        <div>
            <label for="phonr">Enter a mobile number:</label><br></br>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/><br></br>
            <small>Format: 123-45-678</small><br></br>
            <input type="submit"/>
            <button onClick={otp}>Confirm</button>
            
        </div>
        </>
    )
}