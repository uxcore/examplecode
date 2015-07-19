/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var App = _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	        _index2['default'],
	        null,
	        '\n            <Form mode="EDIT" className="horizontal-form">\n                <FormRow>\n                    <InputFormField   className="one-third"  label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>\n                    <InputFormField   className="one-third"  label="年龄" keyMap="job" />\n                    <InputFormField   className="one-third"  label="性别" keyMap="job" />\n                </FormRow>\n                <TextAreaFormField  label="个人简介" keyMap="introduce" ></TextAreaFormField>\n                 \n                <Button label="提交" />\n            </Form>\n           '
	    )
	);

	_react2['default'].render(App, document.getElementById('box3'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* global Prism */
	// thanks http://elemental-ui.com
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var ExampleCode = _react2['default'].createClass({
		displayName: 'ExampleCode',

		propTypes: {
			children: _react2['default'].PropTypes.string.isRequired
		},
		getDefaultProps: function getDefaultProps() {
			return {
				language: 'markup'
			};
		},
		componentDidMount: function componentDidMount() {
			this.highlight();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.highlight();
		},
		highlight: function highlight() {
			Prism.highlightElement(this.refs.code.getDOMNode(), true);
		},
		fixIndentation: function fixIndentation(children) {
			if (typeof children !== 'string') return children;
			var lines = children.split('\n').filter(function (l) {
				return l;
			});
			if (!lines.length) return children;
			var indent = /^\t+/.exec(lines[0]);
			if (indent) {
				indent = indent[0].length;
				lines = lines.map(function (s) {
					return s.substr(indent);
				});
			}
			return lines.join('\n');
		},
		render: function render() {
			var codeClass = (0, _classnames2['default'])('code-example__code', 'language-' + this.props.language);
			return _react2['default'].createElement(
				'pre',
				{ className: 'code-example__pre' },
				_react2['default'].createElement(
					'code',
					{ ref: 'code', className: codeClass },
					this.fixIndentation(this.props.children)
				)
			);
		}
	});

	module.exports = ExampleCode;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	(function () {
		'use strict';

		function classNames() {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ }
/******/ ]);