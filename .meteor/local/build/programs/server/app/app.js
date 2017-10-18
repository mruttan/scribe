var require = meteorInstall({"imports":{"api":{"users.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// imports/api/users.js                                                  //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
var Meteor = void 0;                                                     // 1
module.watch(require("meteor/meteor"), {                                 // 1
	Meteor: function (v) {                                                  // 1
		Meteor = v;                                                            // 1
	}                                                                       // 1
}, 0);                                                                   // 1
var SimpleSchema = void 0;                                               // 1
module.watch(require("simpl-schema"), {                                  // 1
	"default": function (v) {                                               // 1
		SimpleSchema = v;                                                      // 1
	}                                                                       // 1
}, 1);                                                                   // 1
var Accounts = void 0;                                                   // 1
module.watch(require("meteor/accounts-base"), {                          // 1
	Accounts: function (v) {                                                // 1
		Accounts = v;                                                          // 1
	}                                                                       // 1
}, 2);                                                                   // 1
Accounts.validateNewUser(function (user) {                               // 5
	var email = user.emails[0].address;                                     // 6
	new SimpleSchema({                                                      // 8
		email: {                                                               // 9
			type: String,                                                         // 10
			regEx: SimpleSchema.RegEx.Email                                       // 11
		}                                                                      // 9
	}).validate({                                                           // 8
		email: email                                                           // 13
	});                                                                     // 13
	return true;                                                            // 16
});                                                                      // 17
///////////////////////////////////////////////////////////////////////////

}},"startup":{"simple-schema-configuration.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// imports/startup/simple-schema-configuration.js                        //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
var Meteor = void 0;                                                     // 1
module.watch(require("meteor/meteor"), {                                 // 1
	Meteor: function (v) {                                                  // 1
		Meteor = v;                                                            // 1
	}                                                                       // 1
}, 0);                                                                   // 1
var SimpleSchema = void 0;                                               // 1
module.watch(require("simpl-schema"), {                                  // 1
	"default": function (v) {                                               // 1
		SimpleSchema = v;                                                      // 1
	}                                                                       // 1
}, 1);                                                                   // 1
SimpleSchema.defineValidationErrorTransform(function (e) {               // 4
	return new Meteor.Error(400, e.message);                                // 5
});                                                                      // 6
///////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// server/main.js                                                        //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
var Meteor = void 0;                                                     // 1
module.watch(require("meteor/meteor"), {                                 // 1
  Meteor: function (v) {                                                 // 1
    Meteor = v;                                                          // 1
  }                                                                      // 1
}, 0);                                                                   // 1
var WebApp = void 0;                                                     // 1
module.watch(require("meteor/webapp"), {                                 // 1
  WebApp: function (v) {                                                 // 1
    WebApp = v;                                                          // 1
  }                                                                      // 1
}, 1);                                                                   // 1
module.watch(require("../imports/api/users"));                           // 1
module.watch(require("../imports/startup/simple-schema-configuration"));
Meteor.startup(function () {});                                          // 8
console.log('Log from /server/main.js');                                 // 13
///////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./server/main.js");
//# sourceMappingURL=app.js.map
