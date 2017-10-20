import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import { Notes } from '../api/notes';


export class Editor extends React.Component {
  handleBodyChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      body: e.target.value
    });
  }
  handleTitleChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      title: e.target.value
    });
  }
	render() {
		if(this.props.note) {
			return (
        <div>
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-12">
                <h2>
                  <input value={this.props.note.title} placeholder="Your title here" onChange={this.handleTitleChange.bind(this)}/>
                </h2>
            </div>
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center m-t-lg">
                      <p>
                        <textarea value={this.props.note.body} placeholder="Your note here" onChange={this.handleBodyChange.bind(this)}></textarea>
                      </p>
                      <button>Delete Note</button>
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
		note: Notes.findOne(selectedNoteId),
    call: Meteor.call
	};
}, Editor);
