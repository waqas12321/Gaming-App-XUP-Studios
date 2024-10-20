import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

import Footer from "./Components/Footer";




function App() {
  return (

    <>
    
  <Router>

  <Routes>
  <Route path="/" element={ <Main/>} />
 

 
  </Routes>
  <Footer/>


</Router>
    </>
  );
}

export default App;
