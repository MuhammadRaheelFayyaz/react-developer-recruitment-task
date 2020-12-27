import { Route,Router, Switch,Redirect,useHistory } from 'react-router-dom';
import Navbar from './components/navbar'
import HomePage from './pages/home'
import ContactMePage from'./pages/contactMe';
import './assets/styles.css';

function App() {
  return (
    <Router history={useHistory()}>
      <Navbar  />
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
          </Route>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/contact" component={ContactMePage} />
      </Switch>
    </Router>
  );
}

export default App;
