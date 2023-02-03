import React from "react"; 
import "./App.scss"; 
import Navbar from "./components/Navbar/Navbar";
import BodyContent from "./components/BodyContent/BodyContent"
import Footer from "./components/Footer/Footer"

function App() { 
    return (
        <div className="wrapper">
             <Navbar />
             <BodyContent />
            <Footer />
        </div>
    ); 
} 
export default App;
