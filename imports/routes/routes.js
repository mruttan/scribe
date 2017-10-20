import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Session } from 'meteor/session';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const onEnterNotePage = (nextState) => {
	// Uses nextState object to assign selectedNoteId to Id in url, allowing note to be already selected on page enter/refresh
	Session.set('selectedNoteId', nextState.params.id);
};
const onLeaveNotePage = () => {
	// Clear session variable so when logging back in, no auto selected note
	Session.set('selectedNoteId', undefined);
};
export const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
	const isUnauthenticatedPage = currentPagePrivacy === 'unauth';
	const isAuthenticatedPage = currentPagePrivacy === 'auth';;
	// console.log('isAuthenticated', isAuthenticated);
	// logs true to browser if currently logged in, false otherwise, great for dev

	if (isUnauthenticatedPage && isAuthenticated) {
		browserHistory.replace('/dashboard');
	} else if (isAuthenticatedPage && !isAuthenticated) {
		browserHistory.replace('/');
	}
};
//use nextState object routes array to set privacy value of last page visited (lastRoute)
export const globalOnChange = (prevState, nextState) => {
	globalOnEnter(nextState);
};
export const globalOnEnter = (nextState) => {
	const lastRoute = nextState.routes[nextState.routes.length - 1];
	Session.set('currentPagePrivacy', lastRoute.privacy);
	//currentPagePrivacy is set to "privacy" prop of whatever Route it is on
}
//adding a custom "privacy" prop - we are making this up to set up authorization
export const routes = (
	<Router history={browserHistory}>
		<Route onEnter={globalOnEnter} onChange={globalOnChange}>
			<Route path="/" component={Login} privacy="unauth" />
			<Route path="/signup" component={Signup} privacy="unauth" />
			<Route path="/dashboard" component={Dashboard} privacy="auth" />
			<Route path="/dashboard/:id" component={Dashboard} privacy="auth" onEnter={onEnterNotePage} onLeave={onLeaveNotePage}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
);
