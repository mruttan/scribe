import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export const PrivateHeader = (props) => {
  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg' ;
  return (
    <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
              <a id="navbar-minimalize" className="minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
            </div>
            <ul className="nav navbar-top-links navbar-right">
              <li>
                <h1>{props.title}</h1>
              </li>
              <li>
                <a href="#">
                  Edit Account
                </a>
              </li>
                <li>
                    <button className="btn btn.primary"
                      onClick={() => props.handleLogout()}>
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
  handleLogout: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  handleNavToggle: PropTypes.func.isRequired
};

// Think of createContainer functions as Tracker autorun calls,
// The first argument (a function) supplies what the second argument (a component)
// will need when it is rendered
// This function is ran first in this file so that the function handleLogout exists
// for the button
export default createContainer(() => {
	return {
		handleLogout: () => Accounts.logout(),
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
	};
}, PrivateHeader);
