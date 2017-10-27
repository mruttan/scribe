import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

export class UserEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}
	onClick() {
		// preventDefault();
		//
		// this.props.users.remove(this.props.userId());
	}
	onSubmit(e) {
		e.preventDefault();

		let email = this.refs.email.value.trim();

		console.log(this.props.users);
		console.log(this.props.user());
		console.log(this.props.userId());

		Meteor.users.allow({ update: () => true });
		this.props.users.update({
			_id: this.props.userId()
		},
		{
			$set: {
				'emails.0.address': email
				// 'profile.email': email  - able to set the profile field, not the users email
			}
		});
	}
	render() {
		return(
			<div className="boxed-view">
				<div className="boxed-view__box">
					<h1>Edit User</h1>

					{this.state.error ? <p>{this.state.error}</p> : undefined}

					<form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
						<input type="email" ref="email" name="email" placeholder="Email"/>
						<button className="btn btn-primary">Edit</button>
					</form>

					<Link to="/dashboard">Back to Dashboard</Link>
					<button onClick={this.onClick()} className="btn btn-primary">Delete Account</button>
				</div>
			</div>
		);
	}
}

UserEdit.propTypes = {
	user: PropTypes.func.isRequired,
	userId: PropTypes.func.isRequired,
	users: PropTypes.object.isRequired
};

export default createContainer(() => {
	return {
		user: Meteor.user,
		userId: Meteor.userId,
		users: Meteor.users
	};
}, UserEdit);
