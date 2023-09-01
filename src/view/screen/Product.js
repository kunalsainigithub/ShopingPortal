import React,{useState} from "react"

const Product=()=>{
    const [ProductName,setprodname]=useState("");
    const [quantity,qty]=useState("");
    const [Rate,setrate]=useState("");
    const [description,desc]=useState("");

    function Product(){
        console.log(ProductName);
        console.log(quantity);
        console.log(Rate);
        console.log(description);
    }

    return(
    <>
    <div>
    <h1>Product</h1>
    <input value={ProductName} onChange={(d=>setprodname(d.target.value))} placeholder="Product Name" className="product"></input><br></br>
    <input value={quantity} onChange={(d=>qty(d.target.value))} placeholder="Quantity" className="product"></input><br></br>
    <input value={Rate} onChange={(d=>setrate(d.target.value))} placeholder="Rate" className="product"></input><br></br>
    <input value={description} onChange={(d=>desc(d.target.value))} placeholder="Description" className="product"></input><br></br>
    <button onClick={Product}>Submit</button>

    </div>
    </>
    )
}
export default Product;