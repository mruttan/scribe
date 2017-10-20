import React from 'react';

const NoteListEmptyItem = () => {
	return (
    <li className="">
        <a><i className="fa fa-dashboard"></i>
        <span className="nav-label">
          <h5>You have no notes</h5>
    			<p>Create a note to get started!</p>
        </span></a>
    </li>
	);
}

export default NoteListEmptyItem;
