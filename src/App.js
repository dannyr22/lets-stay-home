import Nav from "./components/Nav";
import { GlobalStyles } from "./GlobalStyles";
import AboutUs from "./pages/AboutUs";
import { Route, Switch } from 'react-router-dom';
import FreshCocktails from "./pages/FreshCocktails";
import Faqs from "./pages/Faqs";
import Events from "./pages/Events";
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs/>
        </Route>
        <Route  path="/fresh-cocktails">
          <FreshCocktails/>
        </Route>
        <Route path="/faqs">
          <Faqs />
        </Route>
        <Route path="/events">
          <Events/>
        </Route>
        <Route path="/reviews">
          <Reviews/>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
