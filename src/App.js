import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Toggle from './pages/sathiart/toggle/Toggle'
 import Home from './pages/sathiart/saatchihome/Home' 
import hom from './pages/home/Home'

function App() {
  return (
<Router>
  <Switch>
     <Route exact path='/' component={hom} /> 
    {/* <Route exact path='/' component={Toggle} />  */}
      {/* <Route exact path='/' component={Home} / */}>   
    {/* <Route exact path='/videos' component={Videos}/>
    <Route exact path='/' component={Navbar} />
    
    <Route exact path='/career' component={Career} />
    <Route exact path='/photos' component={Photos} />
    <Route exact path='/about' component={About} />  */}



  </Switch>
</Router>  
  );
}

export default App;
