import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FirstSlider from './components/FirstSlider';
import CardSlider from './components/CardSlider';
import Premiere from './components/Premiere';
import AllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie';
import Register from './components/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Header/>
        <Switch>
          <Route exact path="/">
            <FirstSlider/>
            <CardSlider/>
            <Premiere/>
          </Route>
          <Route exact path="/movies">
            <AllMovies/>
          </Route>
          <Route exact path="/movie/:movid">
            <SingleMovie/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
   
  );
}

export default App;
