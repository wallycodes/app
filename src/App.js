import Navbar from "./components/Navbar";
import "./App.css";
import Title from "./components/Title";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Upcoming style={{ backgroundColor: "#fff" }} />
    </div>
  );
}

export default App;
