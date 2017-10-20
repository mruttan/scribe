import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';

import { Notes } from '../api/notes';

export class Editor extends React.Component {
	render() {
		if(this.props.note) {
			return (
        <div>
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-12">
                <h2>Title</h2>
            </div>
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center m-t-lg">
                        <h1>
                            We got the note!
                        </h1>
                        <small>
                            It is an application skeleton for a typical Meteor web app. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.
                        </small>
                    </div>
                </div>
            </div>
          </div>
        </div>
			);
		} else {
			return (
        <div>
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-12">
                <h2>
                  { this.props.selectedNoteId ? 'Note not found.' : 'No Note Selected.' }
                </h2>
            </div>
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center m-t-lg">
                        <small>
                          {this.props.selectedNoteId ? 'The note you are looking for doesn\'t exist' : 'Please click Create Note to get started.'}
                        </small>
                    </div>
                </div>
            </div>
          </div>
        </div>
			);
    }
	}
};

Editor.propTypes = {
	note: PropTypes.object,
	selectedNoteId: PropTypes.string
}

export default createContainer(() => {
	const selectedNoteId = Session.get('selectedNoteId');

	return {
		selectedNoteId,
		note: Notes.findOne(selectedNoteId)
	};
}, Editor);
