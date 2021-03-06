import Nav from "./components/Nav";
import { GlobalStyles } from "./GlobalStyles";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
