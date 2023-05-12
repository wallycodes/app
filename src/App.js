import Navbar from "./components/Navbar";
import "./App.css";
import Title from "./components/Title";
import Upcoming from "./components/Upcoming";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Upcoming style={{ backgroundColor: "#fff" }} />

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Display setEventList={setEventList} eventList={eventList}/>}/>
          <Route path='/events/new' element={<Navbar setEventList={setEventList} eventList={eventList}/>}/>
          
          
        </Routes>
        
        
      </BrowserRouter> */}
    </div>
  );
}

export default App;
