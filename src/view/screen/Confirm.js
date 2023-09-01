export default function Confirm(){
    return(
        <>
        <div>
            <label for="phonr">Enter a mobile number:</label><br></br>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/><br></br>
            <small>Format: 123-45-678</small><br></br>
            <input type="submit"/>
            <a href="/otp">Confirm</a>
        </div>
        </>
    )
}