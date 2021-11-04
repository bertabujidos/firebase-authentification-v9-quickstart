import Signup from './Signup'
import Login from './Login';
import Dashboard from './Dashboard';
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import PublicRouteOnly from './PublicRouteOnly';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PublicRouteOnly path="/signup" component={Signup} />
                <PublicRouteOnly path="/login" component={Login} />
                <PublicRouteOnly path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  )
}

export default App;
