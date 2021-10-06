import Signup from './routes/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Transfers from './routes/Transfers';

function App() {
  return (
    <div className="App">
      <Transfers />
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
