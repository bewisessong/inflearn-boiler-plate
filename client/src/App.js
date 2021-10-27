import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


// 10/27(수) : React Router Dom
function App() {
  return (
    <Router>
      <div>
        {/* 1. 한 줄에
              <Route exact path="/" component= { LandingPage } />
              2. 여러 줄에
              <Route path="/">
                <LandingPage />
              </Route>
           */}
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/register" component={ RegisterPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;