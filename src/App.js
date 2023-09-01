import Router from "./view/Router";
//import Product from "./view/screen/Product";
//import Home from "./view/screen/home";
import ImageSlider from "./view/component/Imageslider";
import { banner,data, total } from "./view/Data/data";
import { BrowserRouter } from "react-router-dom";
import "./view/style/style.css";
import { AuthContext } from "./view/Context/Context";
const App=()=>{
  console.log(data);
  var data1={
    data,total
  }
  return(
    <div>
      <AuthContext.Provider value={data1}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
      </AuthContext.Provider>
     
    </div>
 
  )
}
export default App;