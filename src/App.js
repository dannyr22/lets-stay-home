import Products from "./components/Products";
import { GlobalStyles } from "./GlobalStyles";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AboutUs />
      <Products />
    </div>
  );
}

export default App;
