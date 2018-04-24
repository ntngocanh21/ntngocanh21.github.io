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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = __webpack_require__(2);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _modal = __webpack_require__(3);

var _modal2 = _interopRequireDefault(_modal);

var _slide = __webpack_require__(4);

var _slide2 = _interopRequireDefault(_slide);

var _divTagRadios = __webpack_require__(5);

var _divTagRadios2 = _interopRequireDefault(_divTagRadios);

var _changeCssImagesSvg = __webpack_require__(6);

var _changeCssImagesSvg2 = _interopRequireDefault(_changeCssImagesSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Main menu */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var menu = function () {
    // Menu mobile
    $('#callHeaderMobileMenu').click(function () {
        var menu = $('#headerMobileMenu');
        if (!menu.hasClass('active')) {
            menu.addClass('active ');
        } else {
            menu.removeClass('active ');
        }
    });
    $(window).scroll(function () {
        var menu = $('.check-hang');
        if ($(window).scrollTop() >= 100) {
            if (!menu.hasClass('show-hang')) {
                menu.addClass('show-hang', 1000, "easeOutBounce");
            }
        } else {
            if (menu.hasClass('show-hang')) {
                menu.removeClass('show-hang', 1000, "easeOutBounce");
            }
        }
    });
}();

exports.default = menu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dropdown */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dropdown = function () {
    // Semantic UI
    $('.ui.dropdown').dropdown({
        duration: 0
    });
    $('.jsDatepicker').datepicker({
        format: "dd/mm/yyyy"
    });
}();

exports.default = dropdown;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Bootstrap modal */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var modal = function () {
    // Login
    $('.callModalLogin').click(function () {
        $('#modalLogin').modal('show');
    });
    // Register
    $('.callModalRegister').click(function () {
        $('#modalRegister').modal('show');
        $('.ui.dropdown').dropdown({
            duration: 0
        });
    });

    // Change Password
    $('.callModalChangePassword').click(function () {
        $('#modalChangePassword').modal('show');
    });

    // Call register from login
    $('#callRegiterFromLogin').click(function () {
        $('#modalLogin').modal('hide');
        setTimeout(function () {
            $('#modalRegister').modal('show');
        }, 200);
        $('.ui.dropdown').dropdown({
            duration: 0
        });
    });

    // Call login from register
    $('#callLoginFromRegiter').click(function () {
        $('#modalRegister').modal('hide');
        setTimeout(function () {
            $('#modalLogin').modal('show');
        }, 200);
    });
}();

exports.default = modal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dropdown */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var slide = function () {

    var totalItems = $('.carousel-item').length;
    var currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');

    $('#carouselControls1').on('slid.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.num').html('' + currentIndex + '/' + totalItems + '');
    });
}();

exports.default = slide;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dropdown */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var divTagRadios = function () {
    $('.application-process-radios').click(function () {
        $(this).parents().find('.application-process-radios').removeClass('active');
        $(this).addClass('active');
        var val = $(this).attr('data-value');
    });

    $('.host-profile-step-radios').click(function () {
        $(this).parents().find('.host-profile-step-radios').removeClass('active');
        $(this).addClass('active');
        var val = $(this).attr('data-value');
    });
}();

exports.default = divTagRadios;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dropdown */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var changeCssImagesSvg = function () {
    $(function () {
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }

                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
    });
}();

exports.default = changeCssImagesSvg;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map