import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';

if (Meteor.isServer) {
	describe('users', function() {

		it('should allow valid email address', function() {
			const testUser = {
				emails: [
					{
						address: 'Test@example.com'
					}
				]
			};
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

		it('should update user', function () {
			const testUser = {
				_id: 'testid',
				emails: [
					{
						address: 'Test@example.com'
					}
				]
			};
			console.log(testUser);
			// Meteor.server.method_handlers['userUpdate'].apply({ 'updated@test.com' });
			console.log(testUser);

		});

		it('should throw error if extra updates provided');
		it('should not update user if not correct user');
		it('should not update user if unauthenticated');
	});
}
