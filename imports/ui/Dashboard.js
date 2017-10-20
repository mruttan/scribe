import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';
import Footer from './Footer';

export default () => {
	return (
		<div id="wrapper">
			<PrivateHeader title="Scribe"/>
			<div className="page-content">
				<NoteList/>
				<div id="page-wrapper" className="gray-bg">
					<Editor/>
					<Footer/>
				</div>
			</div>
		</div>
	);
};
