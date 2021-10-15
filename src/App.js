import Signup from './routes/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Router>
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
