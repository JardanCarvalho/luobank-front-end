import Signup from './routes/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/cadastro">Cadastro</Link>
        <Switch>
          <Route path="/cadastro">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
