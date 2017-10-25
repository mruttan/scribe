import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {
  return (
    <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
              <a id="navbar-minimalize" className="minimalize-styl-2 btn btn-primary " href="#" onClick={props.handleNavToggle}><i className="fa fa-bars"></i> </a>
            </div>
            <ul className="nav navbar-top-links navbar-right">
              <li>
                <h1>{props.title}</h1>
              </li>
              <li>
                <a href="/useredit">
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
    handleNavToggle: function(event) {

        event.preventDefault();

        // Toggle special class
        $("body").toggleClass("mini-navbar");

        // Enable smoothly hide/show menu
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
	};
}, PrivateHeader);
