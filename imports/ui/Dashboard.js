import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';
import Footer from './Footer';

export default () => {
	return (
		<div id="wrapper">
			<div className="page-content">
				<div className="page-content__sidebar">
					<NoteList/>
				</div>
				<div id="page-wrapper" className="gray-bg page-content__main">
					<PrivateHeader title="Scribe"/>
					<Editor/>
					<Footer/>
				</div>
			</div>
		</div>
	);
};
