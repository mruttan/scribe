import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

export const validateNewUser = (user) => {
	const email = user.emails[0].address;

	new SimpleSchema({
		email: {
			type: String,
			regEx: SimpleSchema.RegEx.Email
		}
	}).validate({ email });


	return true;
};

if (Meteor.isServer) {
	Accounts.validateNewUser(validateNewUser);
	Meteor.publish('users', function () {
    return Meteor.users.find({ userId: this.userId });
  });
}

// Meteor.methods({
// 	'userUpdate': function(email) {
// 		Meteor.users.update({
// 			_id: this.props.userId()
// 		},
// 		{
// 			$set: {
// 			'emails.0.address': email
// 		}
// 	}
// });

Meteor.methods({
  'userUpdate'(userId, email) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : { 'emails.0.address': email }});
  }
});
