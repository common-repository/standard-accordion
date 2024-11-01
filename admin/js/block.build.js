/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * BLOCK: standard-accordion
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Dashicon = _wp$components.Dashicon,
    TextControl = _wp$components.TextControl;

var Accordion = function (_Component) {
	_inherits(Accordion, _Component);

	function Accordion() {
		_classCallCheck(this, Accordion);

		return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
	}

	_createClass(Accordion, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes,
			    isSelected = _props.isSelected,
			    clientId = _props.clientId;
			var items = attributes.items,
			    headingBackgroundColor = attributes.headingBackgroundColor,
			    headingFontSize = attributes.headingFontSize,
			    headingColor = attributes.headingColor,
			    contentBackgroundColor = attributes.contentBackgroundColor,
			    contentColor = attributes.contentColor,
			    contentFontSize = attributes.contentFontSize,
			    blockId = attributes.blockId;

			setAttributes({ blockId: clientId });
			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					InspectorControls,
					null,
					wp.element.createElement(
						PanelBody,
						{ title: __('Heading settings') },
						wp.element.createElement(TextControl, {
							label: __('Font-size (in px)'),
							type: 'number',
							placeholder: '',
							value: headingFontSize,
							onChange: function onChange(value) {
								return setAttributes({ headingFontSize: value });
							}
						}),
						wp.element.createElement(PanelColorSettings, {
							title: __('Heading Color'),
							initialOpen: false,
							colorSettings: [{
								label: __('Heading background Color'),
								value: headingBackgroundColor,
								onChange: function onChange(value) {
									return setAttributes({ headingBackgroundColor: value });
								}
							}, {
								label: __('Heading font Color'),
								value: headingColor,
								onChange: function onChange(value) {
									return setAttributes({ headingColor: value });
								}
							}]
						})
					),
					wp.element.createElement(
						PanelBody,
						{ title: __('Content settings') },
						wp.element.createElement(TextControl, {
							label: __('Font-size (in px)'),
							type: 'number',
							placeholder: '',
							value: contentFontSize,
							onChange: function onChange(value) {
								return setAttributes({ contentFontSize: value });
							}
						}),
						wp.element.createElement(PanelColorSettings, {
							title: __('Content Color'),
							initialOpen: false,
							colorSettings: [{
								label: __('Content background Color'),
								value: contentBackgroundColor,
								onChange: function onChange(value) {
									return setAttributes({ contentBackgroundColor: value });
								}
							}, {
								label: __('Content font Color'),
								value: contentColor,
								onChange: function onChange(value) {
									return setAttributes({ contentColor: value });
								}
							}]
						})
					)
				),
				wp.element.createElement(
					'div',
					{ className: 'accordion-block', id: blockId },
					items.map(function (item, index) {
						return wp.element.createElement(
							Fragment,
							{ key: index },
							wp.element.createElement(
								'div',
								{ className: 'accordion-inner-content', id: 'accordion' },
								wp.element.createElement(
									'div',
									{ className: 'accordion-header' },
									wp.element.createElement(
										'div',
										{ className: 'accordion-remove' },
										wp.element.createElement(
											'span',
											{ onClick: function onClick() {
													var itemsArr = [].concat(_toConsumableArray(items));

													var newitemsArr = itemsArr.splice(index, 1);
													setAttributes({ items: itemsArr });
												} },
											wp.element.createElement(Dashicon, { icon: 'no-alt' })
										)
									),
									wp.element.createElement(
										'div',
										{ className: 'accordion-title accordion-title-' + index + ' active', style: { background: headingBackgroundColor } },
										wp.element.createElement(
											'strong',
											null,
											wp.element.createElement(RichText, {
												tagName: 'p',
												value: item.heading,
												onChange: function onChange(value) {
													var newObject = Object.assign({}, item, {
														heading: value
													});
													var itemsDetailsArr = [].concat(_toConsumableArray(items));
													itemsDetailsArr[index] = newObject;
													setAttributes({
														items: itemsDetailsArr
													});
												},
												placeholder: __('Enter header…'),
												style: { fontSize: headingFontSize + "px", color: headingColor }
											})
										)
									)
								),
								wp.element.createElement(
									'div',
									{ className: 'accordion-content accordion-content-' + index + ' d-none ', style: { background: contentBackgroundColor } },
									wp.element.createElement(RichText, {
										tagName: 'p',
										value: item.content,
										onChange: function onChange(value) {
											var newObject = Object.assign({}, item, {
												content: value
											});
											var itemsDetailsArr = [].concat(_toConsumableArray(items));
											itemsDetailsArr[index] = newObject;
											setAttributes({
												items: itemsDetailsArr
											});
										},
										placeholder: __('Enter Content'),
										style: { fontSize: contentFontSize + "px", color: contentColor }
									})
								)
							)
						);
					}),
					wp.element.createElement(
						'div',
						{ className: 'create-list-item' },
						wp.element.createElement(
							'button',
							{
								className: 'button button-large button-primary ',
								onClick: function onClick() {
									setAttributes({
										items: [].concat(_toConsumableArray(items), [{
											heading: __(''),
											content: __('')
										}])
									});
								}
							},
							__('Add New Item')
						)
					)
				)
			);
		}
	}]);

	return Accordion;
}(Component);

registerBlockType('standarad-accordion/standard-accordion', {
	title: __('Standard Accordion'),
	icon: 'archive',
	category: 'common',
	keywords: [__('accordion'), __('CGB Example'), __('create-guten-block')],
	attributes: {
		items: {
			type: 'array',
			default: [{
				heading: '',
				content: ''
			}]
		},
		headingColor: {
			type: 'string',
			default: '#000000'
		},
		headingFontSize: {
			typr: 'number',
			default: '18'
		},
		contentFontSize: {
			typr: 'number',
			default: '16'
		},
		contentColor: {
			type: 'string',
			default: '#000000'
		},
		headingBackgroundColor: {
			type: 'string',
			default: '#2694af'
		},
		contentBackgroundColor: {
			type: 'string',
			default: '#bedfe8'
		},
		blockId: {
			type: 'string',
			default: ''
		}
	},

	edit: Accordion,

	save: function save(props) {
		var attributes = props.attributes;
		var blockId = attributes.blockId,
		    items = attributes.items,
		    headingBackgroundColor = attributes.headingBackgroundColor,
		    headingFontSize = attributes.headingFontSize,
		    headingColor = attributes.headingColor,
		    contentBackgroundColor = attributes.contentBackgroundColor,
		    contentColor = attributes.contentColor,
		    contentFontSize = attributes.contentFontSize;


		return wp.element.createElement(
			'div',
			{ className: 'accordion-front-block', id: blockId },
			items.map(function (item, index) {
				return wp.element.createElement(
					'div',
					{ className: 'accordion-front-inner-content' },
					wp.element.createElement(
						'div',
						{ className: 'accordion-title', style: { background: headingBackgroundColor } },
						wp.element.createElement(
							'strong',
							null,
							wp.element.createElement(RichText.Content, {
								tagName: 'p',
								value: item.heading,
								style: { fontSize: headingFontSize + "px", color: headingColor }
							})
						)
					),
					wp.element.createElement(
						'div',
						{ className: 'accordion-content', style: { background: contentBackgroundColor } },
						wp.element.createElement(RichText.Content, {
							tagName: 'p',
							value: item.content,
							style: { fontSize: contentFontSize + "px", color: contentColor }
						})
					)
				);
			})
		);
	}
});

/***/ })
/******/ ]);