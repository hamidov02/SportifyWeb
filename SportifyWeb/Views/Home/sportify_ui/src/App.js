import './App.css';
import LogIn from './components/LogIn/LogIn';
import MainLogIn from './components/LogIn/MainLogIn/MainLogIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Card from './components/Home/Card';
import User from './components/User/User';
import Owner from './components/Owner/Owner';
import MainSignUp from './components/SignUp/MainSignUp/MainSignUp';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <MainLogIn /> */}
      {/* <Card /> */}
      {/* <User /> */}
      {/* <Owner /> */}
      {/* <MainSignUp /> */}
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/more" component={Card} />
        <Route path="/book" component={Card} />
        <Route path="/ownerlogin" component={MainLogIn} />
        <Route path="/userlogin" component={MainLogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signuptoowner" component={MainSignUp} />
        <Route path="/signuptouser" component={MainSignUp} />
        <Route path="/user" component={User} />
        <Route path="/owner" component={Owner} />
      </Switch>
    </div>
  );
}

export default App;
