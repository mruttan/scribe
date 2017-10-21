import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import { Notes } from '../api/notes';


export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }
  handleBodyChange(e) {
    const body = e.target.value;
    this.setState({ body })
    this.props.call('notes.update', this.props.note._id, { body });
  }
  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({ title });
    this.props.call('notes.update', this.props.note._id, { title });
  }
  handleRemoval() {
    this.props.call('notes.remove', this.props.note._id);
    this.props.browserHistory.push('/dashboard');
  }
  componentDidUpdate(prevProps, prevState) {
    const currentNoteId = this.props.note ? this.props.note._id : undefined;
    const prevNoteId = prevProps.note ? prevProps.note._id : undefined;

    if (currentNoteId && currentNoteId !== prevNoteId) {
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body
      });
    }
  }
	render() {
		if(this.props.note) {
     // switching from props to state to fix a cursor bug where
     // react is able to preserve cursor position on update
			return (
        <div>
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-12">
                <h2>
                  <input value={this.state.title} placeholder="Your title here" onChange={this.handleTitleChange.bind(this)}/>
                </h2>
            </div>
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="editor">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center m-t-lg">
                      <p>
                        <textarea value={this.state.body} placeholder="Your note here" onChange={this.handleBodyChange.bind(this)}></textarea>
                      </p>
                      <button onClick={this.handleRemoval.bind(this)}>Delete Note</button>
                    </div>
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
                          {this.props.selectedNoteId ? 'The note you are looking for doesn\'t exist' : 'Select or Create a Note to get started.'}
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
	selectedNoteId: PropTypes.string,
  call: PropTypes.func.isRequired,
  browserHistory: PropTypes.object.isRequired
}

export default createContainer(() => {
	const selectedNoteId = Session.get('selectedNoteId');

	return {
		selectedNoteId,
		note: Notes.findOne(selectedNoteId),
    call: Meteor.call,
    browserHistory
	};
}, Editor);
