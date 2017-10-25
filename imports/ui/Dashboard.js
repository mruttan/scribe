import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';
import Footer from './Footer';

export default () => {
	return (
		<div id="wrapper">
			<NoteList/>
			<div id="page-wrapper" className="gray-bg">
				<PrivateHeader title="Scribe"/>
				<Editor/>
				<Footer/>
			</div>
		</div>
	);
};
