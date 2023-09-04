import { useContext, useState } from "react"
import { AuthContext } from "../Context/Context";

export default function Final(){
    const data1 = useContext(AuthContext)
    console.log(data1);
    const{addcart,total}= data1
  
    return (

        <div className="final"> 
            {
              /*   data.map((d)=> (
                <>
                {d.rate}
                {total.rate}
                </>)) */
            }
        </div>
    )
}