import { useContext, useState } from "react"
import { AuthContext } from "../Context/Context";
import { total } from "../Data/data";
export default function Final(){
    const data1 = useContext(AuthContext)
    console.log(data1);
    const{data,total}= data1
    
    return (

        <div className="final"> 
            {
                data.map((d)=> (
                <>
                {d.rate}
                {total.rate}
                </>))
            }
        </div>
    )
}