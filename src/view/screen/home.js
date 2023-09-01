import axios from "axios"
import { useEffect, useState } from "react"
import { data, banner, addcart } from "../Data/data";
import Router from "../Router";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../component/Imageslider";
export default function Home() {
    const nav = useNavigate()
    const [product, setProduct] = useState('')
    const [cart, setcart] = useState('')
    useEffect(() => {
        function showProduct() {
            setProduct(data)
        }
        showProduct()
    }, [])


    // const [product, setProduct] = useState('')
    // useEffect(() => {
    //     async function showProduct() {
    //         const res = await axios.get("http://ankursingh.xyz/api/productshow.php")
    //         setProduct(res.data.body)
    //     }
    //     showProduct()
    // }, [])

    console.log(banner);
    console.log(product);
    function productdetails(d) {
        const data = {
            ...d,
            // cart,addcart
        }
        nav("/details", { state: data });
    }
    return (
        <>
            <ImageSlider slides={banner} />;

            <div style={{ padding: 30 }}>
                {
                    product && product.map(d => (
                        <>
                            <div onClick={() => productdetails(d)}
                                style={{
                                    padding: 0,
                                    width: 250,
                                    height: 250,
                                    backgroundColor: "gray",
                                    margin: 50,
                                    display: "inline-flex"
                                }}>

                                <div>
                                <img src={d.image} style={{ width: 250, height: 250 }} />
                                    <h5 className="label">{d.product_name}</h5>
                                </div>
                                {/* <img src={d.bannerimage} style={{width : 500}} /> */}
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}
