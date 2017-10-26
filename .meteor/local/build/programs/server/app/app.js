var require = meteorInstall({"imports":{"api":{"notes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/notes.js                                                                           //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _extends2 = require("babel-runtime/helpers/extends");                                         //
                                                                                                  //
var _extends3 = _interopRequireDefault(_extends2);                                                //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
  Notes: function () {                                                                            // 1
    return Notes;                                                                                 // 1
  }                                                                                               // 1
});                                                                                               // 1
var Mongo = void 0;                                                                               // 1
module.watch(require("meteor/mongo"), {                                                           // 1
  Mongo: function (v) {                                                                           // 1
    Mongo = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var moment = void 0;                                                                              // 1
module.watch(require("moment"), {                                                                 // 1
  "default": function (v) {                                                                       // 1
    moment = v;                                                                                   // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("simpl-schema"), {                                                           // 1
  "default": function (v) {                                                                       // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
var Notes = new Mongo.Collection('notes');                                                        // 6
                                                                                                  //
if (Meteor.isServer) {                                                                            // 8
  Meteor.publish('notes', function () {                                                           // 9
    return Notes.find({                                                                           // 10
      userId: this.userId                                                                         // 10
    });                                                                                           // 10
  });                                                                                             // 11
}                                                                                                 // 12
                                                                                                  //
Meteor.methods({                                                                                  // 14
  'notes.insert': function () {                                                                   // 15
    if (!this.userId) {                                                                           // 16
      throw new Meteor.Error('not-authorized');                                                   // 17
    }                                                                                             // 18
                                                                                                  //
    return Notes.insert({                                                                         // 20
      title: '',                                                                                  // 21
      body: '',                                                                                   // 22
      userId: this.userId,                                                                        // 23
      updatedAt: moment().valueOf()                                                               // 24
    });                                                                                           // 20
  },                                                                                              // 26
  'notes.remove': function (_id) {                                                                // 27
    if (!this.userId) {                                                                           // 28
      throw new Meteor.Error('not-authorized');                                                   // 29
    }                                                                                             // 30
                                                                                                  //
    new SimpleSchema({                                                                            // 32
      _id: {                                                                                      // 33
        type: String,                                                                             // 34
        min: 1                                                                                    // 35
      }                                                                                           // 33
    }).validate({                                                                                 // 32
      _id: _id                                                                                    // 37
    }); //ensures that note._id's userId is equal to the current userId                           // 37
                                                                                                  //
    Notes.remove({                                                                                // 39
      _id: _id,                                                                                   // 39
      userId: this.userId                                                                         // 39
    });                                                                                           // 39
  },                                                                                              // 40
  'notes.update': function (_id, updates) {                                                       // 41
    if (!this.userId) {                                                                           // 42
      throw new Meteor.Error('not-authorized');                                                   // 43
    }                                                                                             // 44
                                                                                                  //
    new SimpleSchema({                                                                            // 46
      _id: {                                                                                      // 47
        type: String,                                                                             // 48
        min: 1                                                                                    // 49
      },                                                                                          // 47
      title: {                                                                                    // 51
        type: String,                                                                             // 52
        optional: true                                                                            // 53
      },                                                                                          // 51
      body: {                                                                                     // 55
        type: String,                                                                             // 56
        optional: true                                                                            // 57
      }                                                                                           // 55
    }).validate((0, _extends3.default)({                                                          // 46
      _id: _id                                                                                    // 60
    }, updates));                                                                                 // 46
    Notes.update({                                                                                // 64
      _id: _id,                                                                                   // 65
      userId: this.userId                                                                         // 66
    }, {                                                                                          // 64
      $set: (0, _extends3.default)({                                                              // 68
        updatedAt: moment().valueOf()                                                             // 69
      }, updates)                                                                                 // 68
    });                                                                                           // 67
  }                                                                                               // 73
});                                                                                               // 14
////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/users.js                                                                           //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
	validateNewUser: function () {                                                                   // 1
		return validateNewUser;                                                                         // 1
	}                                                                                                // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
	Meteor: function (v) {                                                                           // 1
		Meteor = v;                                                                                     // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("simpl-schema"), {                                                           // 1
	"default": function (v) {                                                                        // 1
		SimpleSchema = v;                                                                               // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
var Accounts = void 0;                                                                            // 1
module.watch(require("meteor/accounts-base"), {                                                   // 1
	Accounts: function (v) {                                                                         // 1
		Accounts = v;                                                                                   // 1
	}                                                                                                // 1
}, 2);                                                                                            // 1
                                                                                                  //
var validateNewUser = function (user) {                                                           // 5
	var email = user.emails[0].address;                                                              // 6
	new SimpleSchema({                                                                               // 8
		email: {                                                                                        // 9
			type: String,                                                                                  // 10
			regEx: SimpleSchema.RegEx.Email                                                                // 11
		}                                                                                               // 9
	}).validate({                                                                                    // 8
		email: email                                                                                    // 13
	});                                                                                              // 13
	return true;                                                                                     // 16
};                                                                                                // 17
                                                                                                  //
if (Meteor.isServer) {                                                                            // 19
	Accounts.validateNewUser(validateNewUser);                                                       // 20
}                                                                                                 // 21
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"simple-schema-configuration.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/startup/simple-schema-configuration.js                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
	Meteor: function (v) {                                                                           // 1
		Meteor = v;                                                                                     // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("simpl-schema"), {                                                           // 1
	"default": function (v) {                                                                        // 1
		SimpleSchema = v;                                                                               // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
SimpleSchema.defineValidationErrorTransform(function (e) {                                        // 4
	return new Meteor.Error(400, e.message);                                                         // 5
});                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var WebApp = void 0;                                                                              // 1
module.watch(require("meteor/webapp"), {                                                          // 1
  WebApp: function (v) {                                                                          // 1
    WebApp = v;                                                                                   // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
module.watch(require("../imports/api/users"));                                                    // 1
module.watch(require("../imports/api/notes"));                                                    // 1
module.watch(require("../imports/startup/simple-schema-configuration"));                          // 1
Meteor.startup(function () {});                                                                   // 9
console.log('Log from /server/main.js');                                                          // 14
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});
require("./server/main.js");
//# sourceMappingURL=app.js.map
