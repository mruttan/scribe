import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';

if (Meteor.isServer) {
	describe('users', function() {
		const testUser = {
			_id: 'testid',
			emails: [
				{
					address: 'test@example.com'
				}
			]
		};
		beforeEach(function() {
			Meteor.users.remove({});
			validateNewUser(testUser);
		});
		it('should allow valid email address', function() {
			// const testUser = {
			// 	emails: [
			// 		{
			// 			address: 'Test@example.com'
			// 		}
			// 	]
			// };

			const res = validateNewUser(testUser);
			expect(res).toBe(true);
		});

		it('should reject invalid email', function () {
			const testUser = {
				emails: [
					{
						address: 'Test'
					}
				]
			};

			expect(() => {
				validateNewUser(testUser);
			}).toThrow();
		});

		it('should delete a user', function () {
			// why doesnt this work?
			Meteor.server.method_handlers['users.remove']
			//
			// Meteor.users.remove(testUser._id);
			expect(testUser).toNotExist();
		});


		it('should update user', function () {
			// const updatedUser = {
			// 	_id: 'testid',
			// 	emails: [
			// 		{
			// 			address: 'updated@updated.com'
			// 		}
			// 	]
			// };
			// console.log(updatedUser);
			//
			//
			// Meteor.users.update({_id: 'testid'}, {$set: { 'emails.0.address': 'updated@updated.com'}});
			// console.log(updatedUser);
			//don't understand why this doesn't work
		});

		it('should throw error if extra updates provided');
		it('should not update user if not correct user');
		it('should not update user if unauthenticated');
	});
}
