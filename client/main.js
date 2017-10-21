import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const currentPagePrivacy = Session.get('currentPagePrivacy');

  onAuthChange(isAuthenticated, currentPagePrivacy);
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId'); // code to set variable in NoteListItem
  Session.set('isNavOpen', false); // close the navbar when noteId is updated (new note was selected)

  if (selectedNoteId) {
    browserHistory.replace(`/dashboard/${selectedNoteId}`); // using `` to inject
  }
});

Tracker.autorun(() => {
	const isNavOpen = Session.get('isNavOpen');
	// Although image is toggled, the class is not applied until this code is run
	// Able to manipulate with css by having a class assigned to body
	document.body.classList.toggle('is-nav-open', isNavOpen);
});

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  Session.set('isNavOpen', false);
  ReactDOM.render(routes, document.getElementById('app'));
});
