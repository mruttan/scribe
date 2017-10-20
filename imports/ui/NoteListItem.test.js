import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import { notes } from '../fixtures/fixtures';
import { NoteListItem } from './NoteListItem';
// NoteListItem switched to a Named Export as opposed to a Containerized export
// to allow us to inject a Session, then we will be able to spy on it,
// making sure it is called appropriately
if (Meteor.isClient) {
	describe('NoteListItem', function () {
		let Session;

		beforeEach(() => {
			Session = {
				set: expect.createSpy()
			};
		});

    it('should render title and timestamp', function () {
			const wrapper = mount( <NoteListItem note={notes[0]} Session={Session}/> );

			expect(wrapper.find('h5').text()).toBe(notes[0].title);
			expect(wrapper.find('p').text()).toBe('10/20/17');
		});

    it('should set default title if no title set', function () {
			const wrapper = mount( <NoteListItem note={notes[1]} Session={Session}/> );

			expect(wrapper.find('h5').text()).toBe('Untitled note');
		});

		it('should call set on click', function() {
			const wrapper = mount( <NoteListItem note={notes[0]} Session={Session}/> );

			wrapper.find('a').simulate('click');

			expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);
		});
  });
};
