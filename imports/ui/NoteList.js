import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';

// Need to update button css, but everything works!
export const NoteList = (props) => {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">

            <a className="close-canvas-menu"><i className="fa fa-times"></i></a>

            <ul className="nav" id="side-menu">
                <li className="nav-header">
                    <div className="profile-element">
                        <a>
                            <span className="clear block m-t-xs"> <strong className="font-bold">
                              <NoteListHeader/>
                            </strong></span>
                        </a>
                    </div>
                    <div className="logo-element">
                        IN+
                    </div>
                </li>
                <li className="">
                    <a href=""><i className="fa fa-dashboard"></i>
                    <span className="nav-label">
                      NoteList { props.notes.length }
                    </span> </a>
                </li>
            </ul>

        </div>
    </nav>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');
  // Setting up code to pass in the users notes as the notes prop
  return {
    notes: Notes.find().fetch()
  };
}, NoteList);
