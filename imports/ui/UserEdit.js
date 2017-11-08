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

	// Deleting Accounts works!
	onConfirm(e) {
		e.preventDefault();

		let confirm = this.refs.confirm.value.trim();
		if (confirm === 'confirm') {
			this.props.users.remove(this.props.userId());
		}
	}
	// Editing Accounts works!
	onSubmit(e) {
		e.preventDefault();

		let email = this.refs.email.value.trim();
		console.log(this.props)
		console.log(this.props.users);
		console.log(this.props.user());
		console.log(this.props.userId());


		this.props.users.update({
			_id: this.props.userId()
		},
		{
			$set: {
				'emails.0.address': email
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
					<form onSubmit={this.onConfirm.bind(this)} className="boxed-view__form">
						<input type="confirm" ref="confirm" name="confirm" placeholder="confirm"/>
						<button className="btn btn-primary">Delete Account</button>
					</form>
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
