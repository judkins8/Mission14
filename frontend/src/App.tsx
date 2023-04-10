import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHeader from "./myHeader";
// import MovieList from "./Movies";
import MovieList from "./Movie/MovieList";
import Home from "./Home";
import Podcasts from "./Podcasts";

function App() {
  return (
    <div className="App">
      <Router>
        <MyHeader />
        <div style={{ paddingTop: "25px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Podcasts" element={<Podcasts />} />
            <Route path="/MovieCollection" element={<MovieList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.incrementGo}>Go!</button>
//       <br></br>
//       <label>{props.count}</label>
//     </div>
//   );
// }

// function AmountOfGo(props: any) {
//   return <label>{props.count}</label>;
// }
