var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// client/template.main.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.body.addContent((function() {                                                            // 2
  var view = this;                                                                                // 3
  return HTML.Raw('<div id="app"></div>');                                                        // 4
}));                                                                                              // 5
Meteor.startup(Template.body.renderToDocument);                                                   // 6
                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// client/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
  "default": function (v) {                                                                       // 1
    React = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var ReactDOM = void 0;                                                                            // 1
module.watch(require("react-dom"), {                                                              // 1
  "default": function (v) {                                                                       // 1
    ReactDOM = v;                                                                                 // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Tracker = void 0;                                                                             // 1
module.watch(require("meteor/tracker"), {                                                         // 1
  Tracker: function (v) {                                                                         // 1
    Tracker = v;                                                                                  // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var Session = void 0;                                                                             // 1
module.watch(require("meteor/session"), {                                                         // 1
  Session: function (v) {                                                                         // 1
    Session = v;                                                                                  // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
var routes = void 0,                                                                              // 1
    onAuthChange = void 0;                                                                        // 1
module.watch(require("../imports/routes/routes"), {                                               // 1
  routes: function (v) {                                                                          // 1
    routes = v;                                                                                   // 1
  },                                                                                              // 1
  onAuthChange: function (v) {                                                                    // 1
    onAuthChange = v;                                                                             // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
module.watch(require("../imports/startup/simple-schema-configuration"));                          // 1
Tracker.autorun(function () {                                                                     // 9
  var isAuthenticated = !!Meteor.userId();                                                        // 10
  onAuthChange(isAuthenticated);                                                                  // 11
});                                                                                               // 12
Meteor.startup(function () {                                                                      // 14
  ReactDOM.render(routes, document.getElementById('app'));                                        // 15
});                                                                                               // 16
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"routes":{"routes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/routes/routes.js                                                                       //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
	onAuthChange: function () {                                                                      // 1
		return onAuthChange;                                                                            // 1
	},                                                                                               // 1
	routes: function () {                                                                            // 1
		return routes;                                                                                  // 1
	}                                                                                                // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
	Meteor: function (v) {                                                                           // 1
		Meteor = v;                                                                                     // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
	"default": function (v) {                                                                        // 1
		React = v;                                                                                      // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
var Router = void 0,                                                                              // 1
    Route = void 0,                                                                               // 1
    browserHistory = void 0;                                                                      // 1
module.watch(require("react-router"), {                                                           // 1
	Router: function (v) {                                                                           // 1
		Router = v;                                                                                     // 1
	},                                                                                               // 1
	Route: function (v) {                                                                            // 1
		Route = v;                                                                                      // 1
	},                                                                                               // 1
	browserHistory: function (v) {                                                                   // 1
		browserHistory = v;                                                                             // 1
	}                                                                                                // 1
}, 2);                                                                                            // 1
var Dashboard = void 0;                                                                           // 1
module.watch(require("../ui/Dashboard"), {                                                        // 1
	"default": function (v) {                                                                        // 1
		Dashboard = v;                                                                                  // 1
	}                                                                                                // 1
}, 3);                                                                                            // 1
var Login = void 0;                                                                               // 1
module.watch(require("../ui/Login"), {                                                            // 1
	"default": function (v) {                                                                        // 1
		Login = v;                                                                                      // 1
	}                                                                                                // 1
}, 4);                                                                                            // 1
var Signup = void 0;                                                                              // 1
module.watch(require("../ui/Signup"), {                                                           // 1
	"default": function (v) {                                                                        // 1
		Signup = v;                                                                                     // 1
	}                                                                                                // 1
}, 5);                                                                                            // 1
var NotFound = void 0;                                                                            // 1
module.watch(require("../ui/NotFound"), {                                                         // 1
	"default": function (v) {                                                                        // 1
		NotFound = v;                                                                                   // 1
	}                                                                                                // 1
}, 6);                                                                                            // 1
var unauthenticatedPages = ['/', '/signup'];                                                      // 10
var authenticatedPages = ['/dashboard'];                                                          // 11
                                                                                                  //
var onEnterPublicPage = function () {                                                             // 12
	if (Meteor.userId()) {                                                                           // 13
		browserHistory.replace('/dashboard');                                                           // 14
	}                                                                                                // 15
};                                                                                                // 16
                                                                                                  //
var onEnterPrivatePage = function () {                                                            // 17
	if (!Meteor.userId()) {                                                                          // 18
		browserHistory.replace('/');                                                                    // 19
	}                                                                                                // 20
};                                                                                                // 21
                                                                                                  //
var onAuthChange = function (isAuthenticated) {                                                   // 22
	var pathname = browserHistory.getCurrentLocation().pathname;                                     // 23
	var isUnauthenticatedPage = unauthenticatedPages.includes(pathname);                             // 24
	var isAuthenticatedPage = authenticatedPages.includes(pathname);                                 // 25
                                                                                                  //
	if (isUnauthenticatedPage && isAuthenticated) {                                                  // 26
		browserHistory.replace('/dashboard');                                                           // 27
	} else if (isAuthenticatedPage && !isAuthenticated) {                                            // 28
		browserHistory.replace('/');                                                                    // 29
	}                                                                                                // 30
};                                                                                                // 31
                                                                                                  //
var routes = React.createElement(                                                                 // 32
	Router,                                                                                          // 33
	{                                                                                                // 33
		history: browserHistory                                                                         // 33
	},                                                                                               // 33
	React.createElement(Route, {                                                                     // 34
		path: "/",                                                                                      // 34
		component: Login,                                                                               // 34
		onEnter: onEnterPublicPage                                                                      // 34
	}),                                                                                              // 34
	React.createElement(Route, {                                                                     // 35
		path: "/signup",                                                                                // 35
		component: Signup,                                                                              // 35
		onEnter: onEnterPublicPage                                                                      // 35
	}),                                                                                              // 35
	React.createElement(Route, {                                                                     // 36
		path: "/dashboard",                                                                             // 36
		component: Dashboard,                                                                           // 36
		onEnter: onEnterPrivatePage                                                                     // 36
	}),                                                                                              // 36
	React.createElement(Route, {                                                                     // 37
		path: "*",                                                                                      // 37
		component: NotFound                                                                             // 37
	})                                                                                               // 37
);                                                                                                // 33
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

}},"ui":{"Dashboard.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/Dashboard.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
	"default": function (v) {                                                                        // 1
		React = v;                                                                                      // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var PrivateHeader = void 0;                                                                       // 1
module.watch(require("./PrivateHeader"), {                                                        // 1
	"default": function (v) {                                                                        // 1
		PrivateHeader = v;                                                                              // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
module.exportDefault(function () {                                                                // 1
	return React.createElement(                                                                      // 6
		"div",                                                                                          // 7
		null,                                                                                           // 7
		React.createElement(PrivateHeader, {                                                            // 8
			title: "Dashboard"                                                                             // 8
		}),                                                                                             // 8
		React.createElement(                                                                            // 9
			"div",                                                                                         // 9
			{                                                                                              // 9
				className: "page-content"                                                                     // 9
			},                                                                                             // 9
			"Dashboard page content."                                                                      // 9
		)                                                                                               // 9
	);                                                                                               // 7
});                                                                                               // 14
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Login.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/Login.js                                                                            //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");     //
                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);            //
                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                       //
                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                              //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
	"default": function () {                                                                         // 1
		return Login;                                                                                   // 1
	}                                                                                                // 1
});                                                                                               // 1
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
	"default": function (v) {                                                                        // 1
		React = v;                                                                                      // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var Link = void 0;                                                                                // 1
module.watch(require("react-router"), {                                                           // 1
	Link: function (v) {                                                                             // 1
		Link = v;                                                                                       // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
	Meteor: function (v) {                                                                           // 1
		Meteor = v;                                                                                     // 1
	}                                                                                                // 1
}, 2);                                                                                            // 1
                                                                                                  //
var Login = function (_React$Component) {                                                         //
	(0, _inherits3.default)(Login, _React$Component);                                                //
                                                                                                  //
	function Login(props) {                                                                          // 6
		(0, _classCallCheck3.default)(this, Login);                                                     // 6
                                                                                                  //
		var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
                                                                                                  //
		_this.state = {                                                                                 // 8
			error: ''                                                                                      // 9
		};                                                                                              // 8
		return _this;                                                                                   // 6
	}                                                                                                // 11
                                                                                                  //
	Login.prototype.onSubmit = function () {                                                         //
		function onSubmit(e) {                                                                          //
			var _this2 = this;                                                                             // 12
                                                                                                  //
			e.preventDefault();                                                                            // 13
			var email = this.refs.email.value.trim();                                                      // 15
			var password = this.refs.password.value.trim();                                                // 16
			Meteor.loginWithPassword({                                                                     // 18
				email: email                                                                                  // 18
			}, password, function (err) {                                                                  // 18
				if (err) {                                                                                    // 19
					_this2.setState({                                                                            // 20
						error: 'Unable to login. Check email and password.'                                         // 20
					});                                                                                          // 20
				} else {                                                                                      // 21
					_this2.setState({                                                                            // 22
						error: ''                                                                                   // 22
					});                                                                                          // 22
				}                                                                                             // 23
			});                                                                                            // 24
		}                                                                                               // 25
                                                                                                  //
		return onSubmit;                                                                                //
	}();                                                                                             //
                                                                                                  //
	Login.prototype.render = function () {                                                           //
		function render() {                                                                             //
			return React.createElement(                                                                    // 27
				"div",                                                                                        // 28
				{                                                                                             // 28
					className: "boxed-view"                                                                      // 28
				},                                                                                            // 28
				React.createElement(                                                                          // 29
					"div",                                                                                       // 29
					{                                                                                            // 29
						className: "boxed-view__box"                                                                // 29
					},                                                                                           // 29
					React.createElement(                                                                         // 30
						"h1",                                                                                       // 30
						null,                                                                                       // 30
						"Login"                                                                                     // 30
					),                                                                                           // 30
					this.state.error ? React.createElement(                                                      // 32
						"p",                                                                                        // 32
						null,                                                                                       // 32
						this.state.error                                                                            // 32
					) : undefined,                                                                               // 32
					React.createElement(                                                                         // 34
						"form",                                                                                     // 34
						{                                                                                           // 34
							onSubmit: this.onSubmit.bind(this),                                                        // 34
							noValidate: true,                                                                          // 34
							className: "boxed-view__form"                                                              // 34
						},                                                                                          // 34
						React.createElement("input", {                                                              // 35
							type: "email",                                                                             // 35
							ref: "email",                                                                              // 35
							name: "email",                                                                             // 35
							placeholder: "Email"                                                                       // 35
						}),                                                                                         // 35
						React.createElement("input", {                                                              // 36
							type: "password",                                                                          // 36
							ref: "password",                                                                           // 36
							name: "password",                                                                          // 36
							placeholder: "Password"                                                                    // 36
						}),                                                                                         // 36
						React.createElement(                                                                        // 37
							"button",                                                                                  // 37
							{                                                                                          // 37
								className: "button"                                                                       // 37
							},                                                                                         // 37
							"Login"                                                                                    // 37
						)                                                                                           // 37
					),                                                                                           // 34
					React.createElement(                                                                         // 40
						Link,                                                                                       // 40
						{                                                                                           // 40
							to: "/signup"                                                                              // 40
						},                                                                                          // 40
						"Need an account?"                                                                          // 40
					)                                                                                            // 40
				)                                                                                             // 29
			);                                                                                             // 28
		}                                                                                               // 44
                                                                                                  //
		return render;                                                                                  //
	}();                                                                                             //
                                                                                                  //
	return Login;                                                                                    //
}(React.Component);                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////

},"NotFound.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/NotFound.js                                                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
	"default": function (v) {                                                                        // 1
		React = v;                                                                                      // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var Link = void 0;                                                                                // 1
module.watch(require("react-router"), {                                                           // 1
	Link: function (v) {                                                                             // 1
		Link = v;                                                                                       // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
module.exportDefault(function () {                                                                // 1
	return React.createElement(                                                                      // 5
		"div",                                                                                          // 6
		{                                                                                               // 6
			className: "boxed-view"                                                                        // 6
		},                                                                                              // 6
		React.createElement(                                                                            // 7
			"div",                                                                                         // 7
			{                                                                                              // 7
				className: "boxed-view__box"                                                                  // 7
			},                                                                                             // 7
			React.createElement(                                                                           // 8
				"h1",                                                                                         // 8
				null,                                                                                         // 8
				"Page Not Found"                                                                              // 8
			),                                                                                             // 8
			React.createElement(                                                                           // 9
				"p",                                                                                          // 9
				null,                                                                                         // 9
				"Hmm, we are unable to find that page."                                                       // 9
			),                                                                                             // 9
			React.createElement(                                                                           // 10
				Link,                                                                                         // 10
				{                                                                                             // 10
					to: "/",                                                                                     // 10
					className: "button button--link"                                                             // 10
				},                                                                                            // 10
				"HEAD HOME"                                                                                   // 10
			)                                                                                              // 10
		)                                                                                               // 7
	);                                                                                               // 6
});                                                                                               // 13
////////////////////////////////////////////////////////////////////////////////////////////////////

},"PrivateHeader.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/PrivateHeader.js                                                                    //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
    "default": function (v) {                                                                     // 1
        React = v;                                                                                // 1
    }                                                                                             // 1
}, 0);                                                                                            // 1
var Accounts = void 0;                                                                            // 1
module.watch(require("meteor/accounts-base"), {                                                   // 1
    Accounts: function (v) {                                                                      // 1
        Accounts = v;                                                                             // 1
    }                                                                                             // 1
}, 1);                                                                                            // 1
var PropTypes = void 0;                                                                           // 1
module.watch(require("prop-types"), {                                                             // 1
    "default": function (v) {                                                                     // 1
        PropTypes = v;                                                                            // 1
    }                                                                                             // 1
}, 2);                                                                                            // 1
                                                                                                  //
var PrivateHeader = function (props) {                                                            // 5
    return React.createElement(                                                                   // 6
        "div",                                                                                    // 7
        {                                                                                         // 7
            className: "row border-bottom"                                                        // 7
        },                                                                                        // 7
        React.createElement(                                                                      // 8
            "nav",                                                                                // 8
            {                                                                                     // 8
                className: "navbar navbar-static-top",                                            // 8
                role: "navigation"                                                                // 8
            },                                                                                    // 8
            React.createElement(                                                                  // 9
                "div",                                                                            // 9
                {                                                                                 // 9
                    className: "navbar-header"                                                    // 9
                },                                                                                // 9
                React.createElement(                                                              // 10
                    "a",                                                                          // 10
                    {                                                                             // 10
                        id: "navbar-minimalize",                                                  // 10
                        className: "minimalize-styl-2 btn btn-primary ",                          // 10
                        href: "#"                                                                 // 10
                    },                                                                            // 10
                    React.createElement("i", {                                                    // 10
                        className: "fa fa-bars"                                                   // 10
                    }),                                                                           // 10
                    " "                                                                           // 10
                )                                                                                 // 10
            ),                                                                                    // 9
            React.createElement(                                                                  // 12
                "div",                                                                            // 12
                {                                                                                 // 12
                    className: "nav navbar-top-links navbar-left"                                 // 12
                },                                                                                // 12
                React.createElement(                                                              // 13
                    "a",                                                                          // 13
                    null,                                                                         // 13
                    props.title,                                                                  // 13
                    " TITLE CSS NEEDED"                                                           // 13
                )                                                                                 // 13
            ),                                                                                    // 12
            React.createElement(                                                                  // 15
                "ul",                                                                             // 15
                {                                                                                 // 15
                    className: "nav navbar-top-links navbar-right"                                // 15
                },                                                                                // 15
                React.createElement(                                                              // 16
                    "li",                                                                         // 16
                    null,                                                                         // 16
                    React.createElement(                                                          // 17
                        "a",                                                                      // 17
                        {                                                                         // 17
                            href: "#"                                                             // 17
                        },                                                                        // 17
                        "Sign Up"                                                                 // 17
                    )                                                                             // 17
                ),                                                                                // 16
                React.createElement(                                                              // 21
                    "li",                                                                         // 21
                    null,                                                                         // 21
                    React.createElement(                                                          // 22
                        "button",                                                                 // 22
                        {                                                                         // 22
                            onClick: function () {                                                // 22
                                return Accounts.logout();                                         // 22
                            }                                                                     // 22
                        },                                                                        // 22
                        React.createElement("i", {                                                // 23
                            className: "fa fa-sign-out"                                           // 23
                        }),                                                                       // 23
                        " Log out"                                                                // 22
                    )                                                                             // 22
                )                                                                                 // 21
            )                                                                                     // 15
        )                                                                                         // 8
    );                                                                                            // 7
};                                                                                                // 32
                                                                                                  //
PrivateHeader.propTypes = {                                                                       // 34
    title: PropTypes.string.isRequired                                                            // 35
};                                                                                                // 34
module.exportDefault(PrivateHeader);                                                              // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/Signup.js                                                                           //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");     //
                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);            //
                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                       //
                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                              //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
	"default": function () {                                                                         // 1
		return Signup;                                                                                  // 1
	}                                                                                                // 1
});                                                                                               // 1
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
	"default": function (v) {                                                                        // 1
		React = v;                                                                                      // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var Link = void 0;                                                                                // 1
module.watch(require("react-router"), {                                                           // 1
	Link: function (v) {                                                                             // 1
		Link = v;                                                                                       // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
var Accounts = void 0;                                                                            // 1
module.watch(require("meteor/accounts-base"), {                                                   // 1
	Accounts: function (v) {                                                                         // 1
		Accounts = v;                                                                                   // 1
	}                                                                                                // 1
}, 2);                                                                                            // 1
                                                                                                  //
var Signup = function (_React$Component) {                                                        //
	(0, _inherits3.default)(Signup, _React$Component);                                               //
                                                                                                  //
	function Signup(props) {                                                                         // 6
		(0, _classCallCheck3.default)(this, Signup);                                                    // 6
                                                                                                  //
		var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
                                                                                                  //
		_this.state = {                                                                                 // 8
			error: ''                                                                                      // 9
		};                                                                                              // 8
		return _this;                                                                                   // 6
	}                                                                                                // 11
                                                                                                  //
	Signup.prototype.onSubmit = function () {                                                        //
		function onSubmit(e) {                                                                          //
			var _this2 = this;                                                                             // 12
                                                                                                  //
			e.preventDefault();                                                                            // 13
			var email = this.refs.email.value.trim();                                                      // 15
			var password = this.refs.password.value.trim();                                                // 16
                                                                                                  //
			if (password.length < 8) {                                                                     // 18
				return this.setState({                                                                        // 19
					error: 'Password must be more than 8 characters long'                                        // 19
				});                                                                                           // 19
			}                                                                                              // 20
                                                                                                  //
			Accounts.createUser({                                                                          // 22
				email: email,                                                                                 // 22
				password: password                                                                            // 22
			}, function (err) {                                                                            // 22
				if (err) {                                                                                    // 23
					_this2.setState({                                                                            // 24
						error: err.reason                                                                           // 24
					});                                                                                          // 24
				} else {                                                                                      // 25
					_this2.setState({                                                                            // 26
						error: ''                                                                                   // 26
					});                                                                                          // 26
				}                                                                                             // 27
			});                                                                                            // 28
		}                                                                                               // 29
                                                                                                  //
		return onSubmit;                                                                                //
	}();                                                                                             //
                                                                                                  //
	Signup.prototype.render = function () {                                                          //
		function render() {                                                                             //
			return React.createElement(                                                                    // 31
				"div",                                                                                        // 32
				{                                                                                             // 32
					className: "boxed-view"                                                                      // 32
				},                                                                                            // 32
				React.createElement(                                                                          // 33
					"div",                                                                                       // 33
					{                                                                                            // 33
						className: "boxed-view__box"                                                                // 33
					},                                                                                           // 33
					React.createElement(                                                                         // 34
						"h1",                                                                                       // 34
						null,                                                                                       // 34
						"Join"                                                                                      // 34
					),                                                                                           // 34
					this.state.error ? React.createElement(                                                      // 36
						"p",                                                                                        // 36
						null,                                                                                       // 36
						this.state.error                                                                            // 36
					) : undefined,                                                                               // 36
					React.createElement(                                                                         // 38
						"form",                                                                                     // 38
						{                                                                                           // 38
							onSubmit: this.onSubmit.bind(this),                                                        // 38
							noValidate: true,                                                                          // 38
							className: "boxed-view__form"                                                              // 38
						},                                                                                          // 38
						React.createElement("input", {                                                              // 39
							type: "email",                                                                             // 39
							ref: "email",                                                                              // 39
							name: "email",                                                                             // 39
							placeholder: "Email"                                                                       // 39
						}),                                                                                         // 39
						React.createElement("input", {                                                              // 40
							type: "password",                                                                          // 40
							ref: "password",                                                                           // 40
							name: "password",                                                                          // 40
							placeholder: "Password"                                                                    // 40
						}),                                                                                         // 40
						React.createElement(                                                                        // 41
							"button",                                                                                  // 41
							{                                                                                          // 41
								className: "button"                                                                       // 41
							},                                                                                         // 41
							"Create Account"                                                                           // 41
						)                                                                                           // 41
					),                                                                                           // 38
					React.createElement(                                                                         // 44
						Link,                                                                                       // 44
						{                                                                                           // 44
							to: "/"                                                                                    // 44
						},                                                                                          // 44
						"Have an account?"                                                                          // 44
					)                                                                                            // 44
				)                                                                                             // 33
			);                                                                                             // 32
		}                                                                                               // 49
                                                                                                  //
		return render;                                                                                  //
	}();                                                                                             //
                                                                                                  //
	return Signup;                                                                                   //
}(React.Component);                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".less"
  ]
});
require("./client/template.main.js");
require("./client/main.js");