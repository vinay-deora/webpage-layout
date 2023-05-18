import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Service from "./component/Service";

import "./Styles/App.scss";
import "./Styles/Headers.scss";
import "./Styles/Home.scss";
import"./Styles/Footer.scss";
import"./Styles/Contact.scss";
import"./Styles/mediaquery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path= "/" element={<Home/>}/>

        </Routes>
        <Contact/>
        <Service/>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
