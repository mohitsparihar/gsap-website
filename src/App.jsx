import "./App.css";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

export default App;
