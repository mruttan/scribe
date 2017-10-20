import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

export const NoteListItem =  (props) => {
  return (
    <li className="">
        <a href="#" onClick={() => {
          props.Session.set('selectedNoteId', props.note._id); // selectedNoteId is set to props.note._id
        }}><i className="fa fa-dashboard"></i>
        <span className="nav-label">
          <h5>{ props.note.title || 'Untitled note' }</h5>
          { props.note.selected ? 'selected' : undefined }
          <p>{ moment(props.note.updatedAt).format('M/DD/YY') }</p>
        </span></a>
    </li>
  );
};

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired,
  Session: PropTypes.object.isRequired
};

export default createContainer(() => {
  return { Session };
}, NoteListItem);
