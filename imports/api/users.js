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
	// This enables update and remove to be run on client, still don't know how to test
	Meteor.users.allow({
		update: () => true,
		remove: () => true
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
	// 'users.remove'(_id) {
  //   if (!this.userId) {
  //     throw new Meteor.Error('not-authorized');
  //   }
	//
  //   new SimpleSchema({
  //     _id: {
  //       type: String,
  //       min: 1
  //     }
  //   }).validate({ _id });
	//
  //   users.remove({ _id, userId: this.userId });
	// }
  // 'userUpdate'(userId, email) {
  //   if(this.userId)
  //     Meteor.users.update(this.userId, {$set : { 'emails.0.address': email }});
  // }
});
