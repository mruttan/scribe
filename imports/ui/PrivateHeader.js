import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {
  return (
    <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
                <a id="navbar-minimalize" className="minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
            </div>
            <div className="nav navbar-top-links navbar-left">
                <h1>{props.title}</h1>
            </div>
            <ul className="nav navbar-top-links navbar-right">
              <li>
                <a href="#">
                  Edit Account
                </a>
              </li>
                <li>
                    <button onClick={() => props.handleLogout()}>
                        <i className="fa fa-sign-out">Logout</i>
                    </button>
                </li>

            </ul>

        </nav>
    </div>
  );
}



PrivateHeader.propTypes = {
	title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired
};
// Think of createContainer functions as Tracker autorun calls,
// The first argument (a function) supplies what the second argument (a component)
// will need when it is rendered
// This function is ran first in this file so that the function handleLogout exists
// for the button
export default createContainer(() => {
	return {
		handleLogout: () => Accounts.logout()
	};
}, PrivateHeader);
