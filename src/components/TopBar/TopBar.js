import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const TopBar = ({managerDashboard,loggedInUser}) => {
  const history = useHistory();
  const path = useLocation().pathname;

  const showLeftSide = () => {
    if(managerDashboard) {
      return (<select>
          <option></option>
          <option></option>
      </select>);
    }
    return null;
  }
  const showRightSide = () => {
    if (managerDashboard) {
        return (
            <div>
                <div>
                    <button>Back</button>
                    <button>Logout</button>
                </div>
                <p>MANAGER VIEW USER: {`${loggedInUser}}`}</p>
            </div>
        );
    } else if (path === '/home') {
        return (
            <div>
                <button>Logout</button>
                <p>MANAGER VIEW USER: {`${loggedInUser}}`}</p>
            </div>
        );
    } else if (path === /signup/i) {
        return (
            <button>Back</button>
        );
    };
  };

  return (
    <nav>
      {showLeftSide()}
      <h1>Employee Tracker</h1>
      {showRightSide()}
    </nav>
  );
}

export default TopBar;