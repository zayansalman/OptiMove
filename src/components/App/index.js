import React from 'react';
import { BrowserRouter as Router,
Route,
 } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import FindProperty from '../FindProperty';
import TC from '../TC';

import * as ROUTES from '../../constants/routes';

import NavBar from '../NavBar'; 
import OptLoc from '../OptLoc'; 
import CrimeRate from '../CrimeRate';
import PtoGeoCord from '../PtoGeoCord';
//<ROUTES path={ROUTES.CrimeRate} component={CrimeRate} />

const App = () => (
  <Router>
    <div>
    <Navigation />
    <NavBar />
  
    <hr/>
    {/*  */}
    {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
    <Route path={ROUTES.TC} component={TC} />

    <Route path={ROUTES.FINDPROPERTY} component={FindProperty} />

    <Route path={ROUTES.CrimeRate} component={CrimeRate} />
    <Route path={ROUTES.PtoGeoCord} component={PtoGeoCord} />
    
    </div>
    
  </Router>
);
export default App;