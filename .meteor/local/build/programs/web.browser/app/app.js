var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/template.main.js                                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
                                                                                                          // 1
Template.body.addContent((function() {                                                                    // 2
  var view = this;                                                                                        // 3
  return HTML.Raw('<div id="app"></div>');                                                                // 4
}));                                                                                                      // 5
Meteor.startup(Template.body.renderToDocument);                                                           // 6
                                                                                                          // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/main.js                                                                                         //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
  "default": function (v) {                                                                               // 1
    React = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var ReactDOM = void 0;                                                                                    // 1
module.watch(require("react-dom"), {                                                                      // 1
  "default": function (v) {                                                                               // 1
    ReactDOM = v;                                                                                         // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
var Tracker = void 0;                                                                                     // 1
module.watch(require("meteor/tracker"), {                                                                 // 1
  Tracker: function (v) {                                                                                 // 1
    Tracker = v;                                                                                          // 1
  }                                                                                                       // 1
}, 2);                                                                                                    // 1
var Session = void 0;                                                                                     // 1
module.watch(require("meteor/session"), {                                                                 // 1
  Session: function (v) {                                                                                 // 1
    Session = v;                                                                                          // 1
  }                                                                                                       // 1
}, 3);                                                                                                    // 1
var browserHistory = void 0;                                                                              // 1
module.watch(require("react-router"), {                                                                   // 1
  browserHistory: function (v) {                                                                          // 1
    browserHistory = v;                                                                                   // 1
  }                                                                                                       // 1
}, 4);                                                                                                    // 1
var routes = void 0,                                                                                      // 1
    onAuthChange = void 0;                                                                                // 1
module.watch(require("../imports/routes/routes"), {                                                       // 1
  routes: function (v) {                                                                                  // 1
    routes = v;                                                                                           // 1
  },                                                                                                      // 1
  onAuthChange: function (v) {                                                                            // 1
    onAuthChange = v;                                                                                     // 1
  }                                                                                                       // 1
}, 5);                                                                                                    // 1
module.watch(require("../imports/startup/simple-schema-configuration"));                                  // 1
Tracker.autorun(function () {                                                                             // 10
  var isAuthenticated = !!Meteor.userId();                                                                // 11
  var currentPagePrivacy = Session.get('currentPagePrivacy');                                             // 12
  onAuthChange(isAuthenticated, currentPagePrivacy);                                                      // 14
});                                                                                                       // 15
Tracker.autorun(function () {                                                                             // 17
  var selectedNoteId = Session.get('selectedNoteId'); // code to set variable in NoteListItem             // 18
                                                                                                          //
  Session.set('isNavOpen', false); // close the navbar when noteId is updated (new note was selected)     // 19
                                                                                                          //
  if (selectedNoteId) {                                                                                   // 21
    browserHistory.replace("/dashboard/" + selectedNoteId); // using `` to inject                         // 22
  }                                                                                                       // 23
});                                                                                                       // 24
Tracker.autorun(function () {                                                                             // 26
  var isNavOpen = Session.get('isNavOpen'); // Although image is toggled, the class is not applied until this code is run
  // Able to manipulate with css by having a class assigned to body                                       // 29
                                                                                                          //
  document.body.classList.toggle('is-nav-open', isNavOpen);                                               // 30
});                                                                                                       // 31
Meteor.startup(function () {                                                                              // 33
  Session.set('selectedNoteId', undefined);                                                               // 34
  Session.set('isNavOpen', false);                                                                        // 35
  ReactDOM.render(routes, document.getElementById('app'));                                                // 36
});                                                                                                       // 37
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"notes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/api/notes.js                                                                                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _extends2 = require("babel-runtime/helpers/extends");                                                 //
                                                                                                          //
var _extends3 = _interopRequireDefault(_extends2);                                                        //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
  Notes: function () {                                                                                    // 1
    return Notes;                                                                                         // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var Mongo = void 0;                                                                                       // 1
module.watch(require("meteor/mongo"), {                                                                   // 1
  Mongo: function (v) {                                                                                   // 1
    Mongo = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
  Meteor: function (v) {                                                                                  // 1
    Meteor = v;                                                                                           // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
var moment = void 0;                                                                                      // 1
module.watch(require("moment"), {                                                                         // 1
  "default": function (v) {                                                                               // 1
    moment = v;                                                                                           // 1
  }                                                                                                       // 1
}, 2);                                                                                                    // 1
var SimpleSchema = void 0;                                                                                // 1
module.watch(require("simpl-schema"), {                                                                   // 1
  "default": function (v) {                                                                               // 1
    SimpleSchema = v;                                                                                     // 1
  }                                                                                                       // 1
}, 3);                                                                                                    // 1
var Notes = new Mongo.Collection('notes');                                                                // 6
                                                                                                          //
if (Meteor.isServer) {                                                                                    // 8
  Meteor.publish('notes', function () {                                                                   // 9
    return Notes.find({                                                                                   // 10
      userId: this.userId                                                                                 // 10
    });                                                                                                   // 10
  });                                                                                                     // 11
}                                                                                                         // 12
                                                                                                          //
Meteor.methods({                                                                                          // 14
  'notes.insert': function () {                                                                           // 15
    if (!this.userId) {                                                                                   // 16
      throw new Meteor.Error('not-authorized');                                                           // 17
    }                                                                                                     // 18
                                                                                                          //
    return Notes.insert({                                                                                 // 20
      title: '',                                                                                          // 21
      body: '',                                                                                           // 22
      userId: this.userId,                                                                                // 23
      updatedAt: moment().valueOf()                                                                       // 24
    });                                                                                                   // 20
  },                                                                                                      // 26
  'notes.remove': function (_id) {                                                                        // 27
    if (!this.userId) {                                                                                   // 28
      throw new Meteor.Error('not-authorized');                                                           // 29
    }                                                                                                     // 30
                                                                                                          //
    new SimpleSchema({                                                                                    // 32
      _id: {                                                                                              // 33
        type: String,                                                                                     // 34
        min: 1                                                                                            // 35
      }                                                                                                   // 33
    }).validate({                                                                                         // 32
      _id: _id                                                                                            // 37
    }); //ensures that note._id's userId is equal to the current userId                                   // 37
                                                                                                          //
    Notes.remove({                                                                                        // 39
      _id: _id,                                                                                           // 39
      userId: this.userId                                                                                 // 39
    });                                                                                                   // 39
  },                                                                                                      // 40
  'notes.update': function (_id, updates) {                                                               // 41
    if (!this.userId) {                                                                                   // 42
      throw new Meteor.Error('not-authorized');                                                           // 43
    }                                                                                                     // 44
                                                                                                          //
    new SimpleSchema({                                                                                    // 46
      _id: {                                                                                              // 47
        type: String,                                                                                     // 48
        min: 1                                                                                            // 49
      },                                                                                                  // 47
      title: {                                                                                            // 51
        type: String,                                                                                     // 52
        optional: true                                                                                    // 53
      },                                                                                                  // 51
      body: {                                                                                             // 55
        type: String,                                                                                     // 56
        optional: true                                                                                    // 57
      }                                                                                                   // 55
    }).validate((0, _extends3.default)({                                                                  // 46
      _id: _id                                                                                            // 60
    }, updates));                                                                                         // 46
    Notes.update({                                                                                        // 64
      _id: _id,                                                                                           // 65
      userId: this.userId                                                                                 // 66
    }, {                                                                                                  // 64
      $set: (0, _extends3.default)({                                                                      // 68
        updatedAt: moment().valueOf()                                                                     // 69
      }, updates)                                                                                         // 68
    });                                                                                                   // 67
  }                                                                                                       // 73
});                                                                                                       // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes":{"routes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/routes/routes.js                                                                               //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
	onAuthChange: function () {                                                                              // 1
		return onAuthChange;                                                                                    // 1
	},                                                                                                       // 1
	globalOnChange: function () {                                                                            // 1
		return globalOnChange;                                                                                  // 1
	},                                                                                                       // 1
	globalOnEnter: function () {                                                                             // 1
		return globalOnEnter;                                                                                   // 1
	},                                                                                                       // 1
	routes: function () {                                                                                    // 1
		return routes;                                                                                          // 1
	}                                                                                                        // 1
});                                                                                                       // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
	Meteor: function (v) {                                                                                   // 1
		Meteor = v;                                                                                             // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
	"default": function (v) {                                                                                // 1
		React = v;                                                                                              // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
var Router = void 0,                                                                                      // 1
    Route = void 0,                                                                                       // 1
    browserHistory = void 0;                                                                              // 1
module.watch(require("react-router"), {                                                                   // 1
	Router: function (v) {                                                                                   // 1
		Router = v;                                                                                             // 1
	},                                                                                                       // 1
	Route: function (v) {                                                                                    // 1
		Route = v;                                                                                              // 1
	},                                                                                                       // 1
	browserHistory: function (v) {                                                                           // 1
		browserHistory = v;                                                                                     // 1
	}                                                                                                        // 1
}, 2);                                                                                                    // 1
var Session = void 0;                                                                                     // 1
module.watch(require("meteor/session"), {                                                                 // 1
	Session: function (v) {                                                                                  // 1
		Session = v;                                                                                            // 1
	}                                                                                                        // 1
}, 3);                                                                                                    // 1
var Signup = void 0;                                                                                      // 1
module.watch(require("../ui/Signup"), {                                                                   // 1
	"default": function (v) {                                                                                // 1
		Signup = v;                                                                                             // 1
	}                                                                                                        // 1
}, 4);                                                                                                    // 1
var Dashboard = void 0;                                                                                   // 1
module.watch(require("../ui/Dashboard"), {                                                                // 1
	"default": function (v) {                                                                                // 1
		Dashboard = v;                                                                                          // 1
	}                                                                                                        // 1
}, 5);                                                                                                    // 1
var NotFound = void 0;                                                                                    // 1
module.watch(require("../ui/NotFound"), {                                                                 // 1
	"default": function (v) {                                                                                // 1
		NotFound = v;                                                                                           // 1
	}                                                                                                        // 1
}, 6);                                                                                                    // 1
var Login = void 0;                                                                                       // 1
module.watch(require("../ui/Login"), {                                                                    // 1
	"default": function (v) {                                                                                // 1
		Login = v;                                                                                              // 1
	}                                                                                                        // 1
}, 7);                                                                                                    // 1
var UserEdit = void 0;                                                                                    // 1
module.watch(require("../ui/UserEdit"), {                                                                 // 1
	"default": function (v) {                                                                                // 1
		UserEdit = v;                                                                                           // 1
	}                                                                                                        // 1
}, 8);                                                                                                    // 1
                                                                                                          //
var onEnterNotePage = function (nextState) {                                                              // 12
	// Uses nextState object to assign selectedNoteId to Id in url, allowing note to be already selected on page enter/refresh
	Session.set('selectedNoteId', nextState.params.id);                                                      // 14
};                                                                                                        // 15
                                                                                                          //
var onLeaveNotePage = function () {                                                                       // 16
	// Clear session variable so when logging back in, no auto selected note                                 // 17
	Session.set('selectedNoteId', undefined);                                                                // 18
};                                                                                                        // 19
                                                                                                          //
var onAuthChange = function (isAuthenticated, currentPagePrivacy) {                                       // 20
	var isUnauthenticatedPage = currentPagePrivacy === 'unauth';                                             // 21
	var isAuthenticatedPage = currentPagePrivacy === 'auth';                                                 // 22
	; // console.log('isAuthenticated', isAuthenticated);                                                    // 22
	// logs true to browser if currently logged in, false otherwise, great for dev                           // 24
                                                                                                          //
	if (isUnauthenticatedPage && isAuthenticated) {                                                          // 26
		browserHistory.replace('/dashboard');                                                                   // 27
	} else if (isAuthenticatedPage && !isAuthenticated) {                                                    // 28
		browserHistory.replace('/');                                                                            // 29
	}                                                                                                        // 30
};                                                                                                        // 31
                                                                                                          //
var globalOnChange = function (prevState, nextState) {                                                    // 33
	globalOnEnter(nextState);                                                                                // 34
};                                                                                                        // 35
                                                                                                          //
var globalOnEnter = function (nextState) {                                                                // 36
	var lastRoute = nextState.routes[nextState.routes.length - 1];                                           // 37
	Session.set('currentPagePrivacy', lastRoute.privacy); //currentPagePrivacy is set to "privacy" prop of whatever Route it is on
};                                                                                                        // 40
                                                                                                          //
var routes = React.createElement(                                                                         // 42
	Router,                                                                                                  // 43
	{                                                                                                        // 43
		history: browserHistory                                                                                 // 43
	},                                                                                                       // 43
	React.createElement(                                                                                     // 44
		Route,                                                                                                  // 44
		{                                                                                                       // 44
			onEnter: globalOnEnter,                                                                                // 44
			onChange: globalOnChange                                                                               // 44
		},                                                                                                      // 44
		React.createElement(Route, {                                                                            // 45
			path: "/",                                                                                             // 45
			component: Login,                                                                                      // 45
			privacy: "unauth"                                                                                      // 45
		}),                                                                                                     // 45
		React.createElement(Route, {                                                                            // 46
			path: "/signup",                                                                                       // 46
			component: Signup,                                                                                     // 46
			privacy: "unauth"                                                                                      // 46
		}),                                                                                                     // 46
		React.createElement(Route, {                                                                            // 47
			path: "/dashboard",                                                                                    // 47
			component: Dashboard,                                                                                  // 47
			privacy: "auth"                                                                                        // 47
		}),                                                                                                     // 47
		React.createElement(Route, {                                                                            // 48
			path: "/dashboard/:id",                                                                                // 48
			component: Dashboard,                                                                                  // 48
			privacy: "auth",                                                                                       // 48
			onEnter: onEnterNotePage,                                                                              // 48
			onLeave: onLeaveNotePage                                                                               // 48
		}),                                                                                                     // 48
		React.createElement(Route, {                                                                            // 49
			path: "/useredit",                                                                                     // 49
			component: UserEdit,                                                                                   // 49
			privacy: "auth"                                                                                        // 49
		}),                                                                                                     // 49
		React.createElement(Route, {                                                                            // 50
			path: "*",                                                                                             // 50
			component: NotFound                                                                                    // 50
		})                                                                                                      // 50
	)                                                                                                        // 44
);                                                                                                        // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"simple-schema-configuration.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/startup/simple-schema-configuration.js                                                         //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
	Meteor: function (v) {                                                                                   // 1
		Meteor = v;                                                                                             // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var SimpleSchema = void 0;                                                                                // 1
module.watch(require("simpl-schema"), {                                                                   // 1
	"default": function (v) {                                                                                // 1
		SimpleSchema = v;                                                                                       // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
SimpleSchema.defineValidationErrorTransform(function (e) {                                                // 4
	return new Meteor.Error(400, e.message);                                                                 // 5
});                                                                                                       // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"Dashboard.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/Dashboard.js                                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
	"default": function (v) {                                                                                // 1
		React = v;                                                                                              // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var PrivateHeader = void 0;                                                                               // 1
module.watch(require("./PrivateHeader"), {                                                                // 1
	"default": function (v) {                                                                                // 1
		PrivateHeader = v;                                                                                      // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
var NoteList = void 0;                                                                                    // 1
module.watch(require("./NoteList"), {                                                                     // 1
	"default": function (v) {                                                                                // 1
		NoteList = v;                                                                                           // 1
	}                                                                                                        // 1
}, 2);                                                                                                    // 1
var Editor = void 0;                                                                                      // 1
module.watch(require("./Editor"), {                                                                       // 1
	"default": function (v) {                                                                                // 1
		Editor = v;                                                                                             // 1
	}                                                                                                        // 1
}, 3);                                                                                                    // 1
var Footer = void 0;                                                                                      // 1
module.watch(require("./Footer"), {                                                                       // 1
	"default": function (v) {                                                                                // 1
		Footer = v;                                                                                             // 1
	}                                                                                                        // 1
}, 4);                                                                                                    // 1
module.exportDefault(function () {                                                                        // 1
	return React.createElement(                                                                              // 9
		"div",                                                                                                  // 10
		{                                                                                                       // 10
			id: "wrapper"                                                                                          // 10
		},                                                                                                      // 10
		React.createElement(NoteList, null),                                                                    // 11
		React.createElement(                                                                                    // 12
			"div",                                                                                                 // 12
			{                                                                                                      // 12
				id: "page-wrapper",                                                                                   // 12
				className: "gray-bg"                                                                                  // 12
			},                                                                                                     // 12
			React.createElement(PrivateHeader, {                                                                   // 13
				title: "Scribe"                                                                                       // 13
			}),                                                                                                    // 13
			React.createElement(Editor, null),                                                                     // 14
			React.createElement(Footer, null)                                                                      // 15
		)                                                                                                       // 12
	);                                                                                                       // 10
});                                                                                                       // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Editor.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/Editor.js                                                                                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                   //
                                                                                                          //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                          //
                                                                                                          //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");             //
                                                                                                          //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                    //
                                                                                                          //
var _inherits2 = require("babel-runtime/helpers/inherits");                                               //
                                                                                                          //
var _inherits3 = _interopRequireDefault(_inherits2);                                                      //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
  Editor: function () {                                                                                   // 1
    return Editor;                                                                                        // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
  "default": function (v) {                                                                               // 1
    React = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
  createContainer: function (v) {                                                                         // 1
    createContainer = v;                                                                                  // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
var Session = void 0;                                                                                     // 1
module.watch(require("meteor/session"), {                                                                 // 1
  Session: function (v) {                                                                                 // 1
    Session = v;                                                                                          // 1
  }                                                                                                       // 1
}, 2);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
  "default": function (v) {                                                                               // 1
    PropTypes = v;                                                                                        // 1
  }                                                                                                       // 1
}, 3);                                                                                                    // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
  Meteor: function (v) {                                                                                  // 1
    Meteor = v;                                                                                           // 1
  }                                                                                                       // 1
}, 4);                                                                                                    // 1
var browserHistory = void 0;                                                                              // 1
module.watch(require("react-router"), {                                                                   // 1
  browserHistory: function (v) {                                                                          // 1
    browserHistory = v;                                                                                   // 1
  }                                                                                                       // 1
}, 5);                                                                                                    // 1
var Notes = void 0;                                                                                       // 1
module.watch(require("../api/notes"), {                                                                   // 1
  Notes: function (v) {                                                                                   // 1
    Notes = v;                                                                                            // 1
  }                                                                                                       // 1
}, 6);                                                                                                    // 1
                                                                                                          //
var Editor = function (_React$Component) {                                                                //
  (0, _inherits3.default)(Editor, _React$Component);                                                      //
                                                                                                          //
  function Editor(props) {                                                                                // 12
    (0, _classCallCheck3.default)(this, Editor);                                                          // 12
                                                                                                          //
    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));       // 12
                                                                                                          //
    _this.state = {                                                                                       // 14
      title: '',                                                                                          // 15
      body: ''                                                                                            // 16
    };                                                                                                    // 14
    return _this;                                                                                         // 12
  }                                                                                                       // 18
                                                                                                          //
  Editor.prototype.handleBodyChange = function () {                                                       //
    function handleBodyChange(e) {                                                                        //
      var body = e.target.value;                                                                          // 20
      this.setState({                                                                                     // 21
        body: body                                                                                        // 21
      });                                                                                                 // 21
      this.props.call('notes.update', this.props.note._id, {                                              // 22
        body: body                                                                                        // 22
      });                                                                                                 // 22
    }                                                                                                     // 23
                                                                                                          //
    return handleBodyChange;                                                                              //
  }();                                                                                                    //
                                                                                                          //
  Editor.prototype.handleTitleChange = function () {                                                      //
    function handleTitleChange(e) {                                                                       //
      var title = e.target.value;                                                                         // 25
      this.setState({                                                                                     // 26
        title: title                                                                                      // 26
      });                                                                                                 // 26
      this.props.call('notes.update', this.props.note._id, {                                              // 27
        title: title                                                                                      // 27
      });                                                                                                 // 27
    }                                                                                                     // 28
                                                                                                          //
    return handleTitleChange;                                                                             //
  }();                                                                                                    //
                                                                                                          //
  Editor.prototype.handleRemoval = function () {                                                          //
    function handleRemoval() {                                                                            //
      this.props.call('notes.remove', this.props.note._id);                                               // 30
      this.props.browserHistory.push('/dashboard');                                                       // 31
    }                                                                                                     // 32
                                                                                                          //
    return handleRemoval;                                                                                 //
  }();                                                                                                    //
                                                                                                          //
  Editor.prototype.componentDidUpdate = function () {                                                     //
    function componentDidUpdate(prevProps, prevState) {                                                   //
      var currentNoteId = this.props.note ? this.props.note._id : undefined;                              // 34
      var prevNoteId = prevProps.note ? prevProps.note._id : undefined;                                   // 35
                                                                                                          //
      if (currentNoteId && currentNoteId !== prevNoteId) {                                                // 37
        this.setState({                                                                                   // 38
          title: this.props.note.title,                                                                   // 39
          body: this.props.note.body                                                                      // 40
        });                                                                                               // 38
      }                                                                                                   // 42
    }                                                                                                     // 43
                                                                                                          //
    return componentDidUpdate;                                                                            //
  }();                                                                                                    //
                                                                                                          //
  Editor.prototype.render = function () {                                                                 //
    function render() {                                                                                   //
      if (this.props.note) {                                                                              // 45
        // switching from props to state to fix a cursor bug where                                        // 46
        // react is able to preserve cursor position on update                                            // 47
        return React.createElement(                                                                       // 48
          "div",                                                                                          // 49
          null,                                                                                           // 49
          React.createElement(                                                                            // 50
            "div",                                                                                        // 50
            {                                                                                             // 50
              className: "row wrapper border-bottom white-bg page-heading"                                // 50
            },                                                                                            // 50
            React.createElement(                                                                          // 51
              "div",                                                                                      // 51
              {                                                                                           // 51
                className: "col-lg-12"                                                                    // 51
              },                                                                                          // 51
              React.createElement(                                                                        // 52
                "h2",                                                                                     // 52
                null,                                                                                     // 52
                React.createElement("input", {                                                            // 53
                  value: this.state.title,                                                                // 53
                  placeholder: "Your title here",                                                         // 53
                  onChange: this.handleTitleChange.bind(this)                                             // 53
                })                                                                                        // 53
              )                                                                                           // 52
            )                                                                                             // 51
          ),                                                                                              // 50
          React.createElement(                                                                            // 57
            "div",                                                                                        // 57
            {                                                                                             // 57
              className: "wrapper wrapper-content animated fadeInRight"                                   // 57
            },                                                                                            // 57
            React.createElement(                                                                          // 58
              "div",                                                                                      // 58
              {                                                                                           // 58
                className: "editor"                                                                       // 58
              },                                                                                          // 58
              React.createElement(                                                                        // 59
                "div",                                                                                    // 59
                {                                                                                         // 59
                  className: "row"                                                                        // 59
                },                                                                                        // 59
                React.createElement(                                                                      // 60
                  "div",                                                                                  // 60
                  {                                                                                       // 60
                    className: "col-lg-12"                                                                // 60
                  },                                                                                      // 60
                  React.createElement(                                                                    // 61
                    "div",                                                                                // 61
                    {                                                                                     // 61
                      className: "text-center m-t-lg"                                                     // 61
                    },                                                                                    // 61
                    React.createElement(                                                                  // 62
                      "p",                                                                                // 62
                      null,                                                                               // 62
                      React.createElement("textarea", {                                                   // 63
                        value: this.state.body,                                                           // 63
                        placeholder: "Your note here",                                                    // 63
                        onChange: this.handleBodyChange.bind(this)                                        // 63
                      })                                                                                  // 63
                    ),                                                                                    // 62
                    React.createElement(                                                                  // 65
                      "button",                                                                           // 65
                      {                                                                                   // 65
                        className: "btn btn.primary",                                                     // 65
                        onClick: this.handleRemoval.bind(this)                                            // 66
                      },                                                                                  // 65
                      "Delete Note"                                                                       // 65
                    )                                                                                     // 65
                  )                                                                                       // 61
                )                                                                                         // 60
              )                                                                                           // 59
            )                                                                                             // 58
          )                                                                                               // 57
        );                                                                                                // 49
      } else {                                                                                            // 74
        return React.createElement(                                                                       // 75
          "div",                                                                                          // 76
          null,                                                                                           // 76
          React.createElement(                                                                            // 77
            "div",                                                                                        // 77
            {                                                                                             // 77
              className: "row wrapper border-bottom white-bg page-heading"                                // 77
            },                                                                                            // 77
            React.createElement(                                                                          // 78
              "div",                                                                                      // 78
              {                                                                                           // 78
                className: "col-lg-12"                                                                    // 78
              },                                                                                          // 78
              React.createElement(                                                                        // 79
                "h2",                                                                                     // 79
                null,                                                                                     // 79
                this.props.selectedNoteId ? 'Note not found.' : 'No Note Selected.'                       // 80
              )                                                                                           // 79
            )                                                                                             // 78
          ),                                                                                              // 77
          React.createElement(                                                                            // 84
            "div",                                                                                        // 84
            {                                                                                             // 84
              className: "wrapper wrapper-content animated fadeInRight"                                   // 84
            },                                                                                            // 84
            React.createElement(                                                                          // 85
              "div",                                                                                      // 85
              {                                                                                           // 85
                className: "row"                                                                          // 85
              },                                                                                          // 85
              React.createElement(                                                                        // 86
                "div",                                                                                    // 86
                {                                                                                         // 86
                  className: "col-lg-12"                                                                  // 86
                },                                                                                        // 86
                React.createElement(                                                                      // 87
                  "div",                                                                                  // 87
                  {                                                                                       // 87
                    className: "text-center m-t-lg"                                                       // 87
                  },                                                                                      // 87
                  React.createElement(                                                                    // 88
                    "small",                                                                              // 88
                    null,                                                                                 // 88
                    this.props.selectedNoteId ? 'The note you are looking for doesn\'t exist' : 'Select or Create a Note to get started.'
                  )                                                                                       // 88
                )                                                                                         // 87
              )                                                                                           // 86
            )                                                                                             // 85
          )                                                                                               // 84
        );                                                                                                // 76
      }                                                                                                   // 97
    }                                                                                                     // 98
                                                                                                          //
    return render;                                                                                        //
  }();                                                                                                    //
                                                                                                          //
  return Editor;                                                                                          //
}(React.Component);                                                                                       //
                                                                                                          //
;                                                                                                         // 99
Editor.propTypes = {                                                                                      // 101
  note: PropTypes.object,                                                                                 // 102
  selectedNoteId: PropTypes.string,                                                                       // 103
  call: PropTypes.func.isRequired,                                                                        // 104
  browserHistory: PropTypes.object.isRequired                                                             // 105
};                                                                                                        // 101
module.exportDefault(createContainer(function () {                                                        // 1
  var selectedNoteId = Session.get('selectedNoteId');                                                     // 109
  return {                                                                                                // 111
    selectedNoteId: selectedNoteId,                                                                       // 112
    note: Notes.findOne(selectedNoteId),                                                                  // 113
    call: Meteor.call,                                                                                    // 114
    browserHistory: browserHistory                                                                        // 115
  };                                                                                                      // 111
}, Editor));                                                                                              // 117
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Footer.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/Footer.js                                                                                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                   //
                                                                                                          //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                          //
                                                                                                          //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");             //
                                                                                                          //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                    //
                                                                                                          //
var _inherits2 = require("babel-runtime/helpers/inherits");                                               //
                                                                                                          //
var _inherits3 = _interopRequireDefault(_inherits2);                                                      //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
  "default": function () {                                                                                // 1
    return Footer;                                                                                        // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
  "default": function (v) {                                                                               // 1
    React = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
                                                                                                          //
var Footer = function (_React$Component) {                                                                //
  (0, _inherits3.default)(Footer, _React$Component);                                                      //
                                                                                                          //
  function Footer() {                                                                                     //
    (0, _classCallCheck3.default)(this, Footer);                                                          //
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));       //
  }                                                                                                       //
                                                                                                          //
  Footer.prototype.render = function () {                                                                 //
    function render() {                                                                                   //
      return React.createElement(                                                                         // 5
        "div",                                                                                            // 6
        {                                                                                                 // 6
          className: "footer"                                                                             // 6
        },                                                                                                // 6
        React.createElement(                                                                              // 7
          "div",                                                                                          // 7
          {                                                                                               // 7
            className: "pull-right"                                                                       // 7
          },                                                                                              // 7
          "10GB of ",                                                                                     // 7
          React.createElement(                                                                            // 8
            "strong",                                                                                     // 8
            null,                                                                                         // 8
            "250GB"                                                                                       // 8
          ),                                                                                              // 8
          " Free."                                                                                        // 7
        ),                                                                                                // 7
        React.createElement(                                                                              // 10
          "div",                                                                                          // 10
          null,                                                                                           // 10
          React.createElement(                                                                            // 11
            "strong",                                                                                     // 11
            null,                                                                                         // 11
            "Copyright"                                                                                   // 11
          ),                                                                                              // 11
          " Example Company \xA9 2014-2015"                                                               // 10
        )                                                                                                 // 10
      );                                                                                                  // 6
    }                                                                                                     // 15
                                                                                                          //
    return render;                                                                                        //
  }();                                                                                                    //
                                                                                                          //
  return Footer;                                                                                          //
}(React.Component);                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Login.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/Login.js                                                                                    //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                   //
                                                                                                          //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                          //
                                                                                                          //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");             //
                                                                                                          //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                    //
                                                                                                          //
var _inherits2 = require("babel-runtime/helpers/inherits");                                               //
                                                                                                          //
var _inherits3 = _interopRequireDefault(_inherits2);                                                      //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
	Login: function () {                                                                                     // 1
		return Login;                                                                                           // 1
	}                                                                                                        // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
	"default": function (v) {                                                                                // 1
		React = v;                                                                                              // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var Link = void 0;                                                                                        // 1
module.watch(require("react-router"), {                                                                   // 1
	Link: function (v) {                                                                                     // 1
		Link = v;                                                                                               // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
	Meteor: function (v) {                                                                                   // 1
		Meteor = v;                                                                                             // 1
	}                                                                                                        // 1
}, 2);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
	"default": function (v) {                                                                                // 1
		PropTypes = v;                                                                                          // 1
	}                                                                                                        // 1
}, 3);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
	createContainer: function (v) {                                                                          // 1
		createContainer = v;                                                                                    // 1
	}                                                                                                        // 1
}, 4);                                                                                                    // 1
                                                                                                          //
var Login = function (_React$Component) {                                                                 //
	(0, _inherits3.default)(Login, _React$Component);                                                        //
                                                                                                          //
	function Login(props) {                                                                                  // 8
		(0, _classCallCheck3.default)(this, Login);                                                             // 8
                                                                                                          //
		var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));         // 8
                                                                                                          //
		_this.state = {                                                                                         // 10
			error: ''                                                                                              // 11
		};                                                                                                      // 10
		return _this;                                                                                           // 8
	}                                                                                                        // 13
                                                                                                          //
	Login.prototype.onSubmit = function () {                                                                 //
		function onSubmit(e) {                                                                                  //
			var _this2 = this;                                                                                     // 14
                                                                                                          //
			e.preventDefault();                                                                                    // 15
			var email = this.refs.email.value.trim();                                                              // 17
			var password = this.refs.password.value.trim();                                                        // 18
			this.props.loginWithPassword({                                                                         // 20
				email: email                                                                                          // 20
			}, password, function (err) {                                                                          // 20
				if (err) {                                                                                            // 21
					_this2.setState({                                                                                    // 22
						error: 'Unable to login. Check email and password.'                                                 // 22
					});                                                                                                  // 22
				} else {                                                                                              // 23
					_this2.setState({                                                                                    // 24
						error: ''                                                                                           // 24
					});                                                                                                  // 24
				}                                                                                                     // 25
			});                                                                                                    // 26
		}                                                                                                       // 27
                                                                                                          //
		return onSubmit;                                                                                        //
	}();                                                                                                     //
                                                                                                          //
	Login.prototype.render = function () {                                                                   //
		function render() {                                                                                     //
			return React.createElement(                                                                            // 29
				"div",                                                                                                // 30
				{                                                                                                     // 30
					className: "boxed-view"                                                                              // 30
				},                                                                                                    // 30
				React.createElement(                                                                                  // 31
					"div",                                                                                               // 31
					{                                                                                                    // 31
						className: "boxed-view__box"                                                                        // 31
					},                                                                                                   // 31
					React.createElement(                                                                                 // 32
						"h1",                                                                                               // 32
						null,                                                                                               // 32
						"Login"                                                                                             // 32
					),                                                                                                   // 32
					this.state.error ? React.createElement(                                                              // 34
						"p",                                                                                                // 34
						null,                                                                                               // 34
						this.state.error                                                                                    // 34
					) : undefined,                                                                                       // 34
					React.createElement(                                                                                 // 36
						"form",                                                                                             // 36
						{                                                                                                   // 36
							onSubmit: this.onSubmit.bind(this),                                                                // 36
							noValidate: true,                                                                                  // 36
							className: "boxed-view__form"                                                                      // 36
						},                                                                                                  // 36
						React.createElement("input", {                                                                      // 37
							type: "email",                                                                                     // 37
							ref: "email",                                                                                      // 37
							name: "email",                                                                                     // 37
							placeholder: "Email"                                                                               // 37
						}),                                                                                                 // 37
						React.createElement("input", {                                                                      // 38
							type: "password",                                                                                  // 38
							ref: "password",                                                                                   // 38
							name: "password",                                                                                  // 38
							placeholder: "Password"                                                                            // 38
						}),                                                                                                 // 38
						React.createElement(                                                                                // 39
							"button",                                                                                          // 39
							{                                                                                                  // 39
								className: "btn btn-primary"                                                                      // 39
							},                                                                                                 // 39
							"Login"                                                                                            // 39
						)                                                                                                   // 39
					),                                                                                                   // 36
					React.createElement(                                                                                 // 42
						Link,                                                                                               // 42
						{                                                                                                   // 42
							to: "/signup"                                                                                      // 42
						},                                                                                                  // 42
						"Need an account?"                                                                                  // 42
					)                                                                                                    // 42
				)                                                                                                     // 31
			);                                                                                                     // 30
		}                                                                                                       // 46
                                                                                                          //
		return render;                                                                                          //
	}();                                                                                                     //
                                                                                                          //
	return Login;                                                                                            //
}(React.Component);                                                                                       //
                                                                                                          //
Login.propTypes = {                                                                                       // 49
	loginWithPassword: PropTypes.func.isRequired                                                             // 50
};                                                                                                        // 49
module.exportDefault(createContainer(function () {                                                        // 1
	return {                                                                                                 // 54
		loginWithPassword: Meteor.loginWithPassword                                                             // 55
	};                                                                                                       // 54
}, Login));                                                                                               // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NotFound.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/NotFound.js                                                                                 //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
	"default": function (v) {                                                                                // 1
		React = v;                                                                                              // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var Link = void 0;                                                                                        // 1
module.watch(require("react-router"), {                                                                   // 1
	Link: function (v) {                                                                                     // 1
		Link = v;                                                                                               // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
module.exportDefault(function () {                                                                        // 1
	return React.createElement(                                                                              // 5
		"div",                                                                                                  // 6
		{                                                                                                       // 6
			className: "boxed-view"                                                                                // 6
		},                                                                                                      // 6
		React.createElement(                                                                                    // 7
			"div",                                                                                                 // 7
			{                                                                                                      // 7
				className: "boxed-view__box"                                                                          // 7
			},                                                                                                     // 7
			React.createElement(                                                                                   // 8
				"h1",                                                                                                 // 8
				null,                                                                                                 // 8
				"Page Not Found"                                                                                      // 8
			),                                                                                                     // 8
			React.createElement(                                                                                   // 9
				"p",                                                                                                  // 9
				null,                                                                                                 // 9
				"Hmm, we are unable to find that page."                                                               // 9
			),                                                                                                     // 9
			React.createElement(                                                                                   // 10
				Link,                                                                                                 // 10
				{                                                                                                     // 10
					to: "/",                                                                                             // 10
					className: "button button--link"                                                                     // 10
				},                                                                                                    // 10
				"HEAD HOME"                                                                                           // 10
			)                                                                                                      // 10
		)                                                                                                       // 7
	);                                                                                                       // 6
});                                                                                                       // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NoteList.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/NoteList.js                                                                                 //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _extends2 = require("babel-runtime/helpers/extends");                                                 //
                                                                                                          //
var _extends3 = _interopRequireDefault(_extends2);                                                        //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
  NoteList: function () {                                                                                 // 1
    return NoteList;                                                                                      // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
  "default": function (v) {                                                                               // 1
    React = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
  Meteor: function (v) {                                                                                  // 1
    Meteor = v;                                                                                           // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
  "default": function (v) {                                                                               // 1
    PropTypes = v;                                                                                        // 1
  }                                                                                                       // 1
}, 2);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
  createContainer: function (v) {                                                                         // 1
    createContainer = v;                                                                                  // 1
  }                                                                                                       // 1
}, 3);                                                                                                    // 1
var Session = void 0;                                                                                     // 1
module.watch(require("meteor/session"), {                                                                 // 1
  Session: function (v) {                                                                                 // 1
    Session = v;                                                                                          // 1
  }                                                                                                       // 1
}, 4);                                                                                                    // 1
var Notes = void 0;                                                                                       // 1
module.watch(require("../api/notes"), {                                                                   // 1
  Notes: function (v) {                                                                                   // 1
    Notes = v;                                                                                            // 1
  }                                                                                                       // 1
}, 5);                                                                                                    // 1
var NoteListHeader = void 0;                                                                              // 1
module.watch(require("./NoteListHeader"), {                                                               // 1
  "default": function (v) {                                                                               // 1
    NoteListHeader = v;                                                                                   // 1
  }                                                                                                       // 1
}, 6);                                                                                                    // 1
var NoteListItem = void 0;                                                                                // 1
module.watch(require("./NoteListItem"), {                                                                 // 1
  "default": function (v) {                                                                               // 1
    NoteListItem = v;                                                                                     // 1
  }                                                                                                       // 1
}, 7);                                                                                                    // 1
var NoteListEmptyItem = void 0;                                                                           // 1
module.watch(require("./NoteListEmptyItem"), {                                                            // 1
  "default": function (v) {                                                                               // 1
    NoteListEmptyItem = v;                                                                                // 1
  }                                                                                                       // 1
}, 8);                                                                                                    // 1
                                                                                                          //
var NoteList = function (props) {                                                                         // 12
  return React.createElement(                                                                             // 13
    "nav",                                                                                                // 14
    {                                                                                                     // 14
      className: "navbar-default navbar-static-side",                                                     // 14
      role: "navigation"                                                                                  // 14
    },                                                                                                    // 14
    React.createElement(                                                                                  // 15
      "div",                                                                                              // 15
      {                                                                                                   // 15
        className: "sidebar-collapse"                                                                     // 15
      },                                                                                                  // 15
      React.createElement(                                                                                // 17
        "a",                                                                                              // 17
        {                                                                                                 // 17
          className: "close-canvas-menu"                                                                  // 17
        },                                                                                                // 17
        React.createElement("i", {                                                                        // 17
          className: "fa fa-times"                                                                        // 17
        })                                                                                                // 17
      ),                                                                                                  // 17
      React.createElement(                                                                                // 19
        "ul",                                                                                             // 19
        {                                                                                                 // 19
          className: "nav",                                                                               // 19
          id: "side-menu"                                                                                 // 19
        },                                                                                                // 19
        React.createElement(                                                                              // 20
          "li",                                                                                           // 20
          {                                                                                               // 20
            className: "nav-header"                                                                       // 20
          },                                                                                              // 20
          React.createElement(                                                                            // 21
            "div",                                                                                        // 21
            {                                                                                             // 21
              className: "profile-element"                                                                // 21
            },                                                                                            // 21
            React.createElement(                                                                          // 22
              "a",                                                                                        // 22
              null,                                                                                       // 22
              React.createElement(                                                                        // 23
                "span",                                                                                   // 23
                {                                                                                         // 23
                  className: "clear block m-t-xs"                                                         // 23
                },                                                                                        // 23
                " ",                                                                                      // 23
                React.createElement(                                                                      // 23
                  "strong",                                                                               // 23
                  {                                                                                       // 23
                    className: "font-bold"                                                                // 23
                  },                                                                                      // 23
                  React.createElement(NoteListHeader, null)                                               // 24
                )                                                                                         // 23
              )                                                                                           // 23
            )                                                                                             // 22
          ),                                                                                              // 21
          React.createElement(                                                                            // 29
            "div",                                                                                        // 29
            {                                                                                             // 29
              className: "logo-element"                                                                   // 29
            },                                                                                            // 29
            "IN+"                                                                                         // 29
          )                                                                                               // 29
        ),                                                                                                // 20
        props.notes.length === 0 ? React.createElement(NoteListEmptyItem, null) : undefined,              // 33
        props.notes.map(function (note) {                                                                 // 34
          return React.createElement(NoteListItem, {                                                      // 35
            key: note._id,                                                                                // 35
            note: note                                                                                    // 35
          });                                                                                             // 35
        })                                                                                                // 36
      )                                                                                                   // 19
    )                                                                                                     // 15
  );                                                                                                      // 14
};                                                                                                        // 41
                                                                                                          //
NoteList.propTypes = {                                                                                    // 43
  notes: PropTypes.array.isRequired                                                                       // 44
};                                                                                                        // 43
module.exportDefault(createContainer(function () {                                                        // 1
  var selectedNoteId = Session.get('selectedNoteId');                                                     // 48
  Meteor.subscribe('notes'); // Setting up code to pass in the users notes as the notes prop              // 49
                                                                                                          //
  return {                                                                                                // 51
    notes: Notes.find({}, {                                                                               // 52
      sort: {                                                                                             // 53
        updatedAt: -1                                                                                     // 54
      }                                                                                                   // 53
    }).fetch().map(function (note) {                                                                      // 52
      return (0, _extends3.default)({}, note, {                                                           // 57
        selected: note._id === selectedNoteId                                                             // 59
      });                                                                                                 // 57
    })                                                                                                    // 61
  };                                                                                                      // 51
}, NoteList));                                                                                            // 63
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NoteListEmptyItem.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/NoteListEmptyItem.js                                                                        //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
    "default": function (v) {                                                                             // 1
        React = v;                                                                                        // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
                                                                                                          //
var NoteListEmptyItem = function () {                                                                     // 3
    return React.createElement(                                                                           // 4
        "li",                                                                                             // 5
        {                                                                                                 // 5
            className: ""                                                                                 // 5
        },                                                                                                // 5
        React.createElement(                                                                              // 6
            "a",                                                                                          // 6
            null,                                                                                         // 6
            React.createElement("i", {                                                                    // 6
                className: "fa fa-dashboard"                                                              // 6
            }),                                                                                           // 6
            React.createElement(                                                                          // 7
                "span",                                                                                   // 7
                {                                                                                         // 7
                    className: "nav-label"                                                                // 7
                },                                                                                        // 7
                React.createElement(                                                                      // 8
                    "h5",                                                                                 // 8
                    null,                                                                                 // 8
                    "You have no notes"                                                                   // 8
                ),                                                                                        // 8
                React.createElement(                                                                      // 9
                    "p",                                                                                  // 9
                    null,                                                                                 // 9
                    "Create a note to get started!"                                                       // 9
                )                                                                                         // 9
            )                                                                                             // 7
        )                                                                                                 // 6
    );                                                                                                    // 5
};                                                                                                        // 13
                                                                                                          //
module.exportDefault(NoteListEmptyItem);                                                                  // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NoteListHeader.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/NoteListHeader.js                                                                           //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
  NoteListHeader: function () {                                                                           // 1
    return NoteListHeader;                                                                                // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
  "default": function (v) {                                                                               // 1
    React = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
  Meteor: function (v) {                                                                                  // 1
    Meteor = v;                                                                                           // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
  "default": function (v) {                                                                               // 1
    PropTypes = v;                                                                                        // 1
  }                                                                                                       // 1
}, 2);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
  createContainer: function (v) {                                                                         // 1
    createContainer = v;                                                                                  // 1
  }                                                                                                       // 1
}, 3);                                                                                                    // 1
                                                                                                          //
var NoteListHeader = function (props) {                                                                   // 6
  return React.createElement(                                                                             // 7
    "div",                                                                                                // 8
    null,                                                                                                 // 8
    React.createElement(                                                                                  // 9
      "button",                                                                                           // 9
      {                                                                                                   // 9
        className: "btn btn-primary",                                                                     // 9
        onClick: function () {                                                                            // 10
          props.meteorCall('notes.insert', function (err, res) {                                          // 11
            if (res) {                                                                                    // 12
              props.Session.set('selectedNoteId', res);                                                   // 13
            }                                                                                             // 14
          });                                                                                             // 15
        }                                                                                                 // 16
      },                                                                                                  // 9
      "Create Note"                                                                                       // 9
    )                                                                                                     // 9
  );                                                                                                      // 8
};                                                                                                        // 19
                                                                                                          //
NoteListHeader.propTypes = {                                                                              // 21
  meteorCall: PropTypes.func.isRequired,                                                                  // 22
  Session: PropTypes.object.isRequired                                                                    // 23
};                                                                                                        // 21
module.exportDefault(createContainer(function () {                                                        // 1
  return {                                                                                                // 27
    meteorCall: Meteor.call,                                                                              // 28
    Session: Session                                                                                      // 29
  };                                                                                                      // 27
}, NoteListHeader));                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NoteListItem.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/NoteListItem.js                                                                             //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
  NoteListItem: function () {                                                                             // 1
    return NoteListItem;                                                                                  // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
  "default": function (v) {                                                                               // 1
    React = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var moment = void 0;                                                                                      // 1
module.watch(require("moment"), {                                                                         // 1
  "default": function (v) {                                                                               // 1
    moment = v;                                                                                           // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
  "default": function (v) {                                                                               // 1
    PropTypes = v;                                                                                        // 1
  }                                                                                                       // 1
}, 2);                                                                                                    // 1
var Session = void 0;                                                                                     // 1
module.watch(require("meteor/session"), {                                                                 // 1
  Session: function (v) {                                                                                 // 1
    Session = v;                                                                                          // 1
  }                                                                                                       // 1
}, 3);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
  createContainer: function (v) {                                                                         // 1
    createContainer = v;                                                                                  // 1
  }                                                                                                       // 1
}, 4);                                                                                                    // 1
                                                                                                          //
var NoteListItem = function (props) {                                                                     // 7
  return React.createElement(                                                                             // 8
    "li",                                                                                                 // 9
    {                                                                                                     // 9
      className: ""                                                                                       // 9
    },                                                                                                    // 9
    React.createElement(                                                                                  // 10
      "a",                                                                                                // 10
      {                                                                                                   // 10
        href: "#",                                                                                        // 10
        onClick: function () {                                                                            // 10
          props.Session.set('selectedNoteId', props.note._id); // selectedNoteId is set to props.note._id
        }                                                                                                 // 12
      },                                                                                                  // 10
      React.createElement("i", {                                                                          // 12
        className: "fa fa-dashboard"                                                                      // 12
      }),                                                                                                 // 12
      React.createElement(                                                                                // 13
        "span",                                                                                           // 13
        {                                                                                                 // 13
          className: "nav-label"                                                                          // 13
        },                                                                                                // 13
        React.createElement(                                                                              // 14
          "h5",                                                                                           // 14
          null,                                                                                           // 14
          props.note.title || 'Untitled note'                                                             // 14
        ),                                                                                                // 14
        props.note.selected ? 'selected' : undefined,                                                     // 15
        React.createElement(                                                                              // 16
          "p",                                                                                            // 16
          null,                                                                                           // 16
          moment(props.note.updatedAt).format('M/DD/YY')                                                  // 16
        )                                                                                                 // 16
      )                                                                                                   // 13
    )                                                                                                     // 10
  );                                                                                                      // 9
};                                                                                                        // 20
                                                                                                          //
NoteListItem.propTypes = {                                                                                // 22
  note: PropTypes.object.isRequired,                                                                      // 23
  Session: PropTypes.object.isRequired                                                                    // 24
};                                                                                                        // 22
module.exportDefault(createContainer(function () {                                                        // 1
  return {                                                                                                // 28
    Session: Session                                                                                      // 28
  };                                                                                                      // 28
}, NoteListItem));                                                                                        // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"PrivateHeader.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/PrivateHeader.js                                                                            //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
    PrivateHeader: function () {                                                                          // 1
        return PrivateHeader;                                                                             // 1
    }                                                                                                     // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
    "default": function (v) {                                                                             // 1
        React = v;                                                                                        // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
var Accounts = void 0;                                                                                    // 1
module.watch(require("meteor/accounts-base"), {                                                           // 1
    Accounts: function (v) {                                                                              // 1
        Accounts = v;                                                                                     // 1
    }                                                                                                     // 1
}, 1);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
    "default": function (v) {                                                                             // 1
        PropTypes = v;                                                                                    // 1
    }                                                                                                     // 1
}, 2);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
    createContainer: function (v) {                                                                       // 1
        createContainer = v;                                                                              // 1
    }                                                                                                     // 1
}, 3);                                                                                                    // 1
                                                                                                          //
var PrivateHeader = function (props) {                                                                    // 6
    return React.createElement(                                                                           // 7
        "div",                                                                                            // 8
        {                                                                                                 // 8
            className: "row border-bottom"                                                                // 8
        },                                                                                                // 8
        React.createElement(                                                                              // 9
            "nav",                                                                                        // 9
            {                                                                                             // 9
                className: "navbar navbar-static-top",                                                    // 9
                role: "navigation"                                                                        // 9
            },                                                                                            // 9
            React.createElement(                                                                          // 10
                "div",                                                                                    // 10
                {                                                                                         // 10
                    className: "navbar-header"                                                            // 10
                },                                                                                        // 10
                React.createElement(                                                                      // 11
                    "a",                                                                                  // 11
                    {                                                                                     // 11
                        id: "navbar-minimalize",                                                          // 11
                        className: "minimalize-styl-2 btn btn-primary ",                                  // 11
                        href: "#",                                                                        // 11
                        onClick: props.handleNavToggle                                                    // 11
                    },                                                                                    // 11
                    React.createElement("i", {                                                            // 11
                        className: "fa fa-bars"                                                           // 11
                    }),                                                                                   // 11
                    " "                                                                                   // 11
                )                                                                                         // 11
            ),                                                                                            // 10
            React.createElement(                                                                          // 13
                "ul",                                                                                     // 13
                {                                                                                         // 13
                    className: "nav navbar-top-links navbar-right"                                        // 13
                },                                                                                        // 13
                React.createElement(                                                                      // 14
                    "li",                                                                                 // 14
                    null,                                                                                 // 14
                    React.createElement(                                                                  // 15
                        "h1",                                                                             // 15
                        null,                                                                             // 15
                        props.title                                                                       // 15
                    )                                                                                     // 15
                ),                                                                                        // 14
                React.createElement(                                                                      // 17
                    "li",                                                                                 // 17
                    null,                                                                                 // 17
                    React.createElement(                                                                  // 18
                        "a",                                                                              // 18
                        {                                                                                 // 18
                            href: "/useredit"                                                             // 18
                        },                                                                                // 18
                        "Edit Account"                                                                    // 18
                    )                                                                                     // 18
                ),                                                                                        // 17
                React.createElement(                                                                      // 22
                    "li",                                                                                 // 22
                    null,                                                                                 // 22
                    React.createElement(                                                                  // 23
                        "button",                                                                         // 23
                        {                                                                                 // 23
                            className: "btn btn.primary",                                                 // 23
                            onClick: function () {                                                        // 24
                                return props.handleLogout();                                              // 24
                            }                                                                             // 24
                        },                                                                                // 23
                        React.createElement(                                                              // 25
                            "i",                                                                          // 25
                            {                                                                             // 25
                                className: "fa fa-sign-out"                                               // 25
                            },                                                                            // 25
                            "Logout"                                                                      // 25
                        )                                                                                 // 25
                    )                                                                                     // 23
                )                                                                                         // 22
            )                                                                                             // 13
        )                                                                                                 // 9
    );                                                                                                    // 8
};                                                                                                        // 34
                                                                                                          //
PrivateHeader.propTypes = {                                                                               // 38
    title: PropTypes.string.isRequired,                                                                   // 39
    handleLogout: PropTypes.func.isRequired,                                                              // 40
    handleNavToggle: PropTypes.func.isRequired                                                            // 41
}; // Think of createContainer functions as Tracker autorun calls,                                        // 38
// The first argument (a function) supplies what the second argument (a component)                        // 45
// will need when it is rendered                                                                          // 46
// This function is ran first in this file so that the function handleLogout exists                       // 47
// for the button                                                                                         // 48
                                                                                                          //
module.exportDefault(createContainer(function () {                                                        // 1
    return {                                                                                              // 50
        handleLogout: function () {                                                                       // 51
            return Accounts.logout();                                                                     // 51
        },                                                                                                // 51
        handleNavToggle: function (event) {                                                               // 52
            event.preventDefault(); // Toggle special class                                               // 54
                                                                                                          //
            $("body").toggleClass("mini-navbar"); // Enable smoothly hide/show menu                       // 57
                                                                                                          //
            if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {                 // 60
                // Hide menu in order to smoothly turn on when maximize menu                              // 61
                $('#side-menu').hide(); // For smoothly turn on menu                                      // 62
                                                                                                          //
                setTimeout(function () {                                                                  // 64
                    $('#side-menu').fadeIn(400);                                                          // 66
                }, 200);                                                                                  // 67
            } else if ($('body').hasClass('fixed-sidebar')) {                                             // 68
                $('#side-menu').hide();                                                                   // 69
                setTimeout(function () {                                                                  // 70
                    $('#side-menu').fadeIn(400);                                                          // 72
                }, 100);                                                                                  // 73
            } else {                                                                                      // 74
                // Remove all inline style from jquery fadeIn function to reset menu state                // 75
                $('#side-menu').removeAttr('style');                                                      // 76
            }                                                                                             // 77
        }                                                                                                 // 78
    };                                                                                                    // 50
}, PrivateHeader));                                                                                       // 80
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/Signup.js                                                                                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                   //
                                                                                                          //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                          //
                                                                                                          //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");             //
                                                                                                          //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                    //
                                                                                                          //
var _inherits2 = require("babel-runtime/helpers/inherits");                                               //
                                                                                                          //
var _inherits3 = _interopRequireDefault(_inherits2);                                                      //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
	Signup: function () {                                                                                    // 1
		return Signup;                                                                                          // 1
	}                                                                                                        // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
	"default": function (v) {                                                                                // 1
		React = v;                                                                                              // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var Link = void 0;                                                                                        // 1
module.watch(require("react-router"), {                                                                   // 1
	Link: function (v) {                                                                                     // 1
		Link = v;                                                                                               // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
var Accounts = void 0;                                                                                    // 1
module.watch(require("meteor/accounts-base"), {                                                           // 1
	Accounts: function (v) {                                                                                 // 1
		Accounts = v;                                                                                           // 1
	}                                                                                                        // 1
}, 2);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
	"default": function (v) {                                                                                // 1
		PropTypes = v;                                                                                          // 1
	}                                                                                                        // 1
}, 3);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
	createContainer: function (v) {                                                                          // 1
		createContainer = v;                                                                                    // 1
	}                                                                                                        // 1
}, 4);                                                                                                    // 1
                                                                                                          //
var Signup = function (_React$Component) {                                                                //
	(0, _inherits3.default)(Signup, _React$Component);                                                       //
                                                                                                          //
	function Signup(props) {                                                                                 // 8
		(0, _classCallCheck3.default)(this, Signup);                                                            // 8
                                                                                                          //
		var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));         // 8
                                                                                                          //
		_this.state = {                                                                                         // 10
			error: ''                                                                                              // 11
		};                                                                                                      // 10
		return _this;                                                                                           // 8
	}                                                                                                        // 13
                                                                                                          //
	Signup.prototype.onSubmit = function () {                                                                //
		function onSubmit(e) {                                                                                  //
			var _this2 = this;                                                                                     // 14
                                                                                                          //
			e.preventDefault();                                                                                    // 15
			var email = this.refs.email.value.trim();                                                              // 17
			var password = this.refs.password.value.trim();                                                        // 18
                                                                                                          //
			if (password.length < 9) {                                                                             // 20
				return this.setState({                                                                                // 21
					error: 'Password must be more than 8 characters long'                                                // 21
				});                                                                                                   // 21
			}                                                                                                      // 22
                                                                                                          //
			this.props.createUser({                                                                                // 24
				email: email,                                                                                         // 24
				password: password                                                                                    // 24
			}, function (err) {                                                                                    // 24
				if (err) {                                                                                            // 25
					_this2.setState({                                                                                    // 26
						error: err.reason                                                                                   // 26
					});                                                                                                  // 26
				} else {                                                                                              // 27
					_this2.setState({                                                                                    // 28
						error: ''                                                                                           // 28
					});                                                                                                  // 28
				}                                                                                                     // 29
			});                                                                                                    // 30
		}                                                                                                       // 31
                                                                                                          //
		return onSubmit;                                                                                        //
	}();                                                                                                     //
                                                                                                          //
	Signup.prototype.render = function () {                                                                  //
		function render() {                                                                                     //
			return React.createElement(                                                                            // 33
				"div",                                                                                                // 34
				{                                                                                                     // 34
					className: "boxed-view"                                                                              // 34
				},                                                                                                    // 34
				React.createElement(                                                                                  // 35
					"div",                                                                                               // 35
					{                                                                                                    // 35
						className: "boxed-view__box"                                                                        // 35
					},                                                                                                   // 35
					React.createElement(                                                                                 // 36
						"h1",                                                                                               // 36
						null,                                                                                               // 36
						"Join"                                                                                              // 36
					),                                                                                                   // 36
					this.state.error ? React.createElement(                                                              // 38
						"p",                                                                                                // 38
						null,                                                                                               // 38
						this.state.error                                                                                    // 38
					) : undefined,                                                                                       // 38
					React.createElement(                                                                                 // 40
						"form",                                                                                             // 40
						{                                                                                                   // 40
							onSubmit: this.onSubmit.bind(this),                                                                // 40
							noValidate: true,                                                                                  // 40
							className: "boxed-view__form"                                                                      // 40
						},                                                                                                  // 40
						React.createElement("input", {                                                                      // 41
							type: "email",                                                                                     // 41
							ref: "email",                                                                                      // 41
							name: "email",                                                                                     // 41
							placeholder: "Email"                                                                               // 41
						}),                                                                                                 // 41
						React.createElement("input", {                                                                      // 42
							type: "password",                                                                                  // 42
							ref: "password",                                                                                   // 42
							name: "password",                                                                                  // 42
							placeholder: "Password"                                                                            // 42
						}),                                                                                                 // 42
						React.createElement(                                                                                // 43
							"button",                                                                                          // 43
							{                                                                                                  // 43
								className: "button"                                                                               // 43
							},                                                                                                 // 43
							"Create Account"                                                                                   // 43
						)                                                                                                   // 43
					),                                                                                                   // 40
					React.createElement(                                                                                 // 46
						Link,                                                                                               // 46
						{                                                                                                   // 46
							to: "/"                                                                                            // 46
						},                                                                                                  // 46
						"Have an account?"                                                                                  // 46
					)                                                                                                    // 46
				)                                                                                                     // 35
			);                                                                                                     // 34
		}                                                                                                       // 50
                                                                                                          //
		return render;                                                                                          //
	}();                                                                                                     //
                                                                                                          //
	return Signup;                                                                                           //
}(React.Component);                                                                                       //
                                                                                                          //
Signup.PropTypes = {                                                                                      // 53
	createUser: PropTypes.func.isRequired                                                                    // 54
};                                                                                                        // 53
module.exportDefault(createContainer(function () {                                                        // 1
	return {                                                                                                 // 58
		createUser: Accounts.createUser                                                                         // 59
	};                                                                                                       // 58
}, Signup));                                                                                              // 61
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserEdit.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// imports/ui/UserEdit.js                                                                                 //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                   //
                                                                                                          //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                          //
                                                                                                          //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");             //
                                                                                                          //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                    //
                                                                                                          //
var _inherits2 = require("babel-runtime/helpers/inherits");                                               //
                                                                                                          //
var _inherits3 = _interopRequireDefault(_inherits2);                                                      //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
module.export({                                                                                           // 1
	UserEdit: function () {                                                                                  // 1
		return UserEdit;                                                                                        // 1
	}                                                                                                        // 1
});                                                                                                       // 1
var React = void 0;                                                                                       // 1
module.watch(require("react"), {                                                                          // 1
	"default": function (v) {                                                                                // 1
		React = v;                                                                                              // 1
	}                                                                                                        // 1
}, 0);                                                                                                    // 1
var Link = void 0;                                                                                        // 1
module.watch(require("react-router"), {                                                                   // 1
	Link: function (v) {                                                                                     // 1
		Link = v;                                                                                               // 1
	}                                                                                                        // 1
}, 1);                                                                                                    // 1
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
	Meteor: function (v) {                                                                                   // 1
		Meteor = v;                                                                                             // 1
	}                                                                                                        // 1
}, 2);                                                                                                    // 1
var PropTypes = void 0;                                                                                   // 1
module.watch(require("prop-types"), {                                                                     // 1
	"default": function (v) {                                                                                // 1
		PropTypes = v;                                                                                          // 1
	}                                                                                                        // 1
}, 3);                                                                                                    // 1
var createContainer = void 0;                                                                             // 1
module.watch(require("meteor/react-meteor-data"), {                                                       // 1
	createContainer: function (v) {                                                                          // 1
		createContainer = v;                                                                                    // 1
	}                                                                                                        // 1
}, 4);                                                                                                    // 1
                                                                                                          //
var UserEdit = function (_React$Component) {                                                              //
	(0, _inherits3.default)(UserEdit, _React$Component);                                                     //
                                                                                                          //
	function UserEdit(props) {                                                                               // 8
		(0, _classCallCheck3.default)(this, UserEdit);                                                          // 8
                                                                                                          //
		var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));         // 8
                                                                                                          //
		_this.state = {                                                                                         // 10
			error: ''                                                                                              // 11
		};                                                                                                      // 10
		return _this;                                                                                           // 8
	}                                                                                                        // 13
                                                                                                          //
	UserEdit.prototype.onSubmit = function () {                                                              //
		function onSubmit(e) {                                                                                  //
			var _this2 = this;                                                                                     // 14
                                                                                                          //
			e.preventDefault();                                                                                    // 15
			var email = this.refs.email.value.trim();                                                              // 17
			var password = this.refs.password.value.trim();                                                        // 18
			this.props.loginWithPassword({                                                                         // 20
				email: email                                                                                          // 20
			}, password, function (err) {                                                                          // 20
				if (err) {                                                                                            // 21
					_this2.setState({                                                                                    // 22
						error: 'Unable to login. Check email and password.'                                                 // 22
					});                                                                                                  // 22
				} else {                                                                                              // 23
					_this2.setState({                                                                                    // 24
						error: ''                                                                                           // 24
					});                                                                                                  // 24
				}                                                                                                     // 25
			});                                                                                                    // 26
		}                                                                                                       // 27
                                                                                                          //
		return onSubmit;                                                                                        //
	}();                                                                                                     //
                                                                                                          //
	UserEdit.prototype.render = function () {                                                                //
		function render() {                                                                                     //
			return React.createElement(                                                                            // 29
				"div",                                                                                                // 30
				{                                                                                                     // 30
					className: "boxed-view"                                                                              // 30
				},                                                                                                    // 30
				React.createElement(                                                                                  // 31
					"div",                                                                                               // 31
					{                                                                                                    // 31
						className: "boxed-view__box"                                                                        // 31
					},                                                                                                   // 31
					React.createElement(                                                                                 // 32
						"h1",                                                                                               // 32
						null,                                                                                               // 32
						"Edit User"                                                                                         // 32
					),                                                                                                   // 32
					this.state.error ? React.createElement(                                                              // 34
						"p",                                                                                                // 34
						null,                                                                                               // 34
						this.state.error                                                                                    // 34
					) : undefined,                                                                                       // 34
					React.createElement(                                                                                 // 36
						"form",                                                                                             // 36
						{                                                                                                   // 36
							onSubmit: this.onSubmit.bind(this),                                                                // 36
							noValidate: true,                                                                                  // 36
							className: "boxed-view__form"                                                                      // 36
						},                                                                                                  // 36
						React.createElement("input", {                                                                      // 37
							type: "email",                                                                                     // 37
							ref: "email",                                                                                      // 37
							name: "email",                                                                                     // 37
							placeholder: "Email"                                                                               // 37
						}),                                                                                                 // 37
						React.createElement("input", {                                                                      // 38
							type: "password",                                                                                  // 38
							ref: "password",                                                                                   // 38
							name: "password",                                                                                  // 38
							placeholder: "Password"                                                                            // 38
						}),                                                                                                 // 38
						React.createElement(                                                                                // 39
							"button",                                                                                          // 39
							{                                                                                                  // 39
								className: "btn btn-primary"                                                                      // 39
							},                                                                                                 // 39
							"Edit"                                                                                             // 39
						)                                                                                                   // 39
					),                                                                                                   // 36
					React.createElement(                                                                                 // 42
						Link,                                                                                               // 42
						{                                                                                                   // 42
							to: "/dashboard"                                                                                   // 42
						},                                                                                                  // 42
						"Back to Dashboard"                                                                                 // 42
					)                                                                                                    // 42
				)                                                                                                     // 31
			);                                                                                                     // 30
		}                                                                                                       // 46
                                                                                                          //
		return render;                                                                                          //
	}();                                                                                                     //
                                                                                                          //
	return UserEdit;                                                                                         //
}(React.Component);                                                                                       //
                                                                                                          //
UserEdit.propTypes = {                                                                                    // 49
	loginWithPassword: PropTypes.func.isRequired                                                             // 50
};                                                                                                        // 49
module.exportDefault(createContainer(function () {                                                        // 1
	return {                                                                                                 // 54
		loginWithPassword: Meteor.loginWithPassword                                                             // 55
	};                                                                                                       // 54
}, UserEdit));                                                                                            // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".less",
    ".jsx"
  ]
});
require("./client/template.main.js");
require("./client/main.js");