import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
  return (
    <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
                <a id="navbar-minimalize" className="minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
            </div>
            <div className="nav navbar-top-links navbar-left">
                <a>{props.title} TITLE CSS NEEDED</a>
            </div>
            <ul className="nav navbar-top-links navbar-right">
              <li>
                <a href="#">
                  Sign Up
                </a>
              </li>
                <li>
                    <button onClick={() => Accounts.logout()}>
                        <i className="fa fa-sign-out"></i> Log out
                    </button>
                </li>

            </ul>

        </nav>
    </div>
  );
}

PrivateHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default PrivateHeader;
