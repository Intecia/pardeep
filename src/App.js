import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Career from "./pages/career/career"
import Home from './pages/sathiart/Home';
import Photos from './pages/photos/photos';
import About from './pages/about/about';

function App() {
  return (
<Router>
  <Switch>
    <Route exact path='/' component={Home} />
   {/*  <Route exact path='/career' component={Career} />
    <Route exact path='/photos' component={Photos} />
    <Route exact path='/about' component={About} />  */}



  </Switch>
</Router>  
  );
}

export default App;
