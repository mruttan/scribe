import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

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
                { props.notes.length === 0 ? <NoteListEmptyItem/> : undefined }
                { props.notes.map((note) => {
                    return <NoteListItem key={note._id} note={note}/>;
                })}
                NoteList { props.notes.length }
            </ul>
        </div>
    </nav>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  Meteor.subscribe('notes');
  // Setting up code to pass in the users notes as the notes prop
  return {
    notes: Notes.find({}, {
      sort: {
        updatedAt: -1
      }
    }).fetch().map((note) => {
      return {
        ...note,
        selected: note._id === selectedNoteId
      };
    })
  };
}, NoteList);
