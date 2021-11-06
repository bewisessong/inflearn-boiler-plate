import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

// 11/06(토) : HOC 구현
// export default function은 import { Auth } 형태가 아니라 import Auth 형태로 삽입해야한다..
import Auth from './hoc/auth';

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
          <Route exact path="/" component={ Auth(LandingPage, null) } />
          <Route exact path="/login" component={ Auth(LoginPage, false) } />
          <Route exact path="/register" component={ Auth(RegisterPage, false) } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;