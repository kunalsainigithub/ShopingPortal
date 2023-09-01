import { useState } from "react";
export default function Order() {
    const [select, setSelect] = useState("");
    const [select1, setSelect1] = useState("form");
    const [online, setOnline] = useState("on");
    const [online1, setOnline1] = useState("false");


    function method1() {
        (online === "on") ? setOnline1("on") : alert("select on or off")
    }

    function UPIid() {
        return (

            <div>
                UPI_ID 
                <br></br>
                <input type="text" placeholder="Enter UPI id"/>
                <a href="/Confirm">Confirm</a>
            </div>
        )

    }
    function OnlinePayment() {

        return (<>
            <fieldset className="online">
                <legend>Select a Payment Mode</legend>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}>GooglePay</button>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}>PhonePay</button>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}>Paytm</button>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}>NetBanking</button>
                {
                online1 === "on" ? UPIid() : null

            }
            </fieldset>
           
        </>
        )
    }

    function OffLinePayment() {
        return (
            <div>

                <h1>Cash On Delievery</h1>
                <a href="./Confirm">Confirm</a>
            </div>

        )
    }
    function method() {
      
        (select === "on") ? setSelect1("on") : (select === "off") ? setSelect1("off") : alert("select on or off")
        setOnline1(false)
    }


    return (
        <>
            <div className="order">
                <div>
                    <h1> Select Payment  Mode</h1>
                </div>
                <div>
                    <input type="radio" value="on" checked={select === "on"} onChange={d => setSelect(d.currentTarget.value)} />Online
                </div>
                <div>
                    <input type="radio" value="off" checked={select === "off"} onChange={d => setSelect(d.currentTarget.value)} />OffLine
                </div>

                <div>
                    <button onClick={method}>Order Now</button>
                </div>
            </div>
            {
                select1 === "on" ? OnlinePayment() : select1 === "off" ? OffLinePayment() : null
            }
        </>
    )


}