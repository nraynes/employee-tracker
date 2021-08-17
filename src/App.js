import './styles/App/App.css';
import TopBar from "./components/TopBar/TopBar";
import SignInForm from "./components/SignInForm/SignInForm";

import {
  useState
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


  // .then(response => response.json())
  // .then(data => console.log(data));





function App() {
  const [managerDashboard, setManagerDashboard] = useState(false);
  const [loggedInUser, setloggedInUser] = useState({});


  function userLogInInfo(signIn, password) {
 //   console.log("inside app: ", signIn, password);
    async function checkUserLogIn(url = 'http://localhost/3000', 
      data = {signIn, password}) {
    
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
      return response.json();
    }
    
  }

  return (
    <Router>
    <div className="App">
      <TopBar />
      <Switch>
        <Route path='/home' />
        <Route path='/employees/:id' />
        <Route path='/employees' />
        <Route path='/timelogs' />

        <Route path='/signup'> 
          <SignInForm signup={true} />
        </Route>
        <Route path='/login'>
          <SignInForm signup={false} userLogInInfo={userLogInInfo}/>
        </Route>

        <Redirect to='/login' />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
