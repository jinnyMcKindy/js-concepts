'use strict'

var _templateObject = _taggedTemplateLiteral(
    [
      '\n  width: 50px;\n  height: 50px;\n  border-radius: 6px;\n  font-size: 26px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 0;\n\n  color: ',
      ';\n  border: 3px solid ',
      ';\n  text-shadow: none;\n'
    ],
    [
      '\n  width: 50px;\n  height: 50px;\n  border-radius: 6px;\n  font-size: 26px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 0;\n\n  color: ',
      ';\n  border: 3px solid ',
      ';\n  text-shadow: none;\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n  display: flex;\n  flex-flow: column;\n  align-items: ',
      ';\n  text-align: ',
      ';\n\n  padding-bottom: 100px;\n\n  ',
      ';\n'
    ],
    [
      '\n  display: flex;\n  flex-flow: column;\n  align-items: ',
      ';\n  text-align: ',
      ';\n\n  padding-bottom: 100px;\n\n  ',
      ';\n'
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ['\n  color: #999;\n  font-size: 18px;\n'],
    ['\n  color: #999;\n  font-size: 18px;\n']
  ),
  _templateObject4 = _taggedTemplateLiteral(
    ['\n  color: ', ';\n'],
    ['\n  color: ', ';\n']
  ),
  _templateObject5 = _taggedTemplateLiteral(
    ['\n  color: #444;\n  margin-bottom: 40px;\n'],
    ['\n  color: #444;\n  margin-bottom: 40px;\n']
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      '\n  max-width: ',
      'px;\n  float: right;\n  margin-top: -150;\n  margin-right: -100px;\n'
    ],
    [
      '\n  max-width: ',
      'px;\n  float: right;\n  margin-top: -150;\n  margin-right: -100px;\n'
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    ['\n  margin-top: 20px;\n  margin-bottom: 90px;\n'],
    ['\n  margin-top: 20px;\n  margin-bottom: 90px;\n']
  ),
  _templateObject8 = _taggedTemplateLiteral(
    ['\n  margin: 40px 0;\n  text-align: left;\n  line-height: 1.5;\n'],
    ['\n  margin: 40px 0;\n  text-align: left;\n  line-height: 1.5;\n']
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      '\n  letter-spacing: -0.5px;\n  background: rgba(60, 89, 255, 0.07);\n  color: ',
      ';\n  padding: 3px 8px;\n  border-radius: 3px;\n'
    ],
    [
      '\n  letter-spacing: -0.5px;\n  background: rgba(60, 89, 255, 0.07);\n  color: ',
      ';\n  padding: 3px 8px;\n  border-radius: 3px;\n'
    ]
  ),
  _templateObject10 = _taggedTemplateLiteral(
    [
      '\n  display: inline-block;\n  margin-right: 14px;\n  width: 40px;\n  height: 40px;\n'
    ],
    [
      '\n  display: inline-block;\n  margin-right: 14px;\n  width: 40px;\n  height: 40px;\n'
    ]
  ),
  _templateObject11 = _taggedTemplateLiteral(
    ['\n  body {\n    margin: 0;\n    padding: 0;\n  }\n'],
    ['\n  body {\n    margin: 0;\n    padding: 0;\n  }\n']
  )

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactDom = require('react-dom')

var _reactDom2 = _interopRequireDefault(_reactDom)

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _src = require('../src')

var _blocks = require('../src/blocks')

var _videoBackground = require('../src/blocks/video-background')

var _videoBackground2 = _interopRequireDefault(_videoBackground)

var _icons = require('../src/assets/icons')

var _sidebarLayout = require('./sidebar-layout')

var _sidebarLayout2 = _interopRequireDefault(_sidebarLayout)

var _githubButton = require('./github-button')

var _githubButton2 = _interopRequireDefault(_githubButton)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var baseTextColor = '#444'
var primaryColor = '#3c59ff'

var PitchDeck = function PitchDeck() {
  return _react2.default.createElement(
    _src.Presentation,
    { name: 'Presa pitch deck', theme: { textColor: baseTextColor } },
    _react2.default.createElement(
      _src.Slide,
      {
        name: 'FP \u043D\u0430 JavaScript',
        layout: function layout(children) {
          return _react2.default.createElement(_sidebarLayout2.default, {
            src: require('./images/lambda.jpg'),
            proportion: '6/9',
            children: children
          })
        }
      },
      _react2.default.createElement(
        PresaTitle,
        null,
        '\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0424\u041F \u0432 JavaScript'
      ),
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 - \u044D\u0442\u043E \u043F\u0430\u0440\u0430\u0434\u0438\u0433\u043C\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0441\u0442\u0438\u043B\u044C \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0438\u0440\u0443\u044E\u0442 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0432\u0438\u0434\u0435 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u0438\u0437\u0431\u0435\u0433\u0430\u0435\u0442 \u043C\u0443\u0442\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0435\u0439\u0442\u0430 \uD83D\uDC85'
      ),
      _react2.default.createElement(
        Footnote,
        null,
        '\u2014',
        _react2.default.createElement('br', null),
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u27A1\uFE0F \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043B\u0430\u0439\u0434\u0430'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      { name: 'Installing Presa', fade: 0.2, centered: true },
      _react2.default.createElement(
        Numbered,
        { number: 1 },
        _react2.default.createElement(
          _blocks.H1,
          null,
          '\u0427\u0438\u0441\u0442\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438'
        ),
        _react2.default.createElement(
          _blocks.H3,
          null,
          '\u041F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u0447\u0438\u0441\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438: '
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            '\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043E\u0434\u043D\u0438\u0445 \u0438 \u0442\u0435\u0445 \u0436\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432 (\u0434\u0435\u0442\u0435\u0440\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C)'
          ),
          _react2.default.createElement(
            'li',
            null,
            '\u041D\u0435 \u043F\u043E\u0440\u043E\u0436\u0434\u0430\u0435\u0442 side-effects'
          )
        )
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      { name: 'Slide backgrounds', fade: 0.2 },
      _react2.default.createElement(
        _blocks.H1,
        null,
        '\u041F\u0440\u0438\u043C\u0435\u0440\u044B'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        ' \nfunction pure(a){\n  return a+2; //pure function\n}\nlet f = 0;\nfunction notPure(a){\n  f++; //has side effects\n  return a; \n}\nfunction notPure(a){\n  return Math.random(); //returns different result\n}\n'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      { name: 'Slide backgrounds', fade: 0.2 },
      _react2.default.createElement(_blocks.H1, null, 'The same result'),
      _react2.default.createElement(
        Description,
        null,
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0435 \u0447\u0438\u0441\u0442\u0430\u044F, \u0442.\u043A. \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E. \u0412\u0435\u0440\u043D\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430\u0445, \u0435\u0441\u043B\u0438 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        ' \n  let PI = 3.14;\n  const calculateArea = (radius) => radius * radius * PI;\n  calculateArea(10); // returns 314.0\n  '
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      { name: 'Slide backgrounds', fade: 0.2 },
      _react2.default.createElement(_blocks.H1, null, "Let's fix it!"),
      _react2.default.createElement(
        Description,
        null,
        '\u041F\u0435\u0440\u0435\u0434\u0430\u0435\u043C PI \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430. \u0422\u0435\u043F\u0435\u0440\u044C \u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043D\u0435\u0442 \u0441\u0430\u0439\u0434 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u0432, \u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432 \u0434\u043B\u044F \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432.'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        ' \nlet PI = 3.14;\nconst calculateArea = (radius, pi) => radius * radius * pi;\ncalculateArea(10, PI); // returns 314.0\n  '
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          '\u0412\u044B\u0432\u043E\u0434'
        ),
        ': \u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043D\u0435 \u043F\u043E\u043E\u0449\u0440\u044F\u0435\u0442\u0441\u044F \u0432 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        _blocks.H1,
        null,
        '\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0447\u0438\u0441\u0442\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439'
      ),
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u0427\u0438\u0441\u0442\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B \u0438 \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u044B'
      ),
      _react2.default.createElement(
        Description,
        null,
        '\u041A\u043E\u0434 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u043C. \u041D\u0435 \u043D\u0430\u0434\u043E \u043C\u043E\u043A\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438. \u041C\u043E\u0436\u043D\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0447\u0438\u0441\u0442\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043E\u043C'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Given a parameter A \u2192 expect the function to return value B'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Given a parameter C \u2192 expect the function to return value D'
        )
      ),
      _react2.default.createElement(Image, {
        width: '350',
        src: require('./images/char.png')
      })
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        'p',
        null,
        '\u041F\u0440\u0438\u043C\u0435\u0440 \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043D\u0430 \u0432\u0445\u043E\u0434 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E \u0447\u0438\u0441\u0435\u043B \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u0430\u0436\u0434\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0432 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        ' \nlet list = [1, 2, 3, 4, 5];\nconst incrementNumbers = (list) => list.map(number => number + 1);\nincrementNumbers(list); // [2, 3, 4, 5, 6]'
      ),
      _react2.default.createElement('img', {
        width: '600px',
        src: require('./images/evolve.png')
      })
    ),
    _react2.default.createElement(
      _src.Slide,
      {
        layout: function layout(children) {
          return _react2.default.createElement(_sidebarLayout2.default, {
            src: require('./images/imm.png'),
            proportion: '6/9',
            children: children
          })
        }
      },
      _react2.default.createElement(
        _blocks.H1,
        null,
        '\u0418\u043C\u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C'
      ),
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u041D\u0435\u0438\u0437\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0441\u0442\u044C \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u0438\u043B\u0438 \u043D\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F'
      ),
      _react2.default.createElement(
        Description,
        null,
        '\u0415\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u043C\u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B, \u0442\u043E \u0438\u0445 \u0441\u0442\u0435\u0439\u0442 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043C\u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 - \u0442\u043E \u044D\u0442\u043E \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u0441 \u043D\u043E\u0432\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C.'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        _blocks.H1,
        null,
        '\u0426\u0438\u043A\u043B\u044B'
      ),
      '\u0412 JS \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0446\u0438\u043A\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0443\u0442\u0438\u0440\u0443\u044E\u0442 \u0434\u0430\u043D\u043D\u044B\u0435',
      _react2.default.createElement(
        _blocks.Code,
        null,
        '\nvar values = [1, 2, 3, 4, 5];\nvar sumOfValues = 0;\n\nfor (var i = 0; i < values.length; i++) {\n  sumOfValues += values[i];\n}\n\nsumOfValues // 15\n'
      ),
      _react2.default.createElement(
        'p',
        null,
        '\u0412 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0432\u044B\u0448\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F `sumOfValues`'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u041A\u0430\u043A \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0438\u043C\u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0443\u044E \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044E?'
      ),
      _react2.default.createElement(
        'p',
        null,
        ' ',
        '\u0421 \u0440\u0435\u043A\u0443\u0440\u0441\u0438\u0435\u0439 \u043F\u0435\u0440\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0438\u043C\u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B. `list` and `the accumulator` \u043D\u0435 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F.'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        'let list = [1, 2, 3, 4, 5];\nlet accumulator = 0;\nfunction sum(list, accumulator) {\n  if (list.length == 0) {\n    return accumulator;\n  }\n  return sum(list.slice(1), accumulator + list[0]);\n}\nsum(list, accumulator); // 15\nlist; // [1, 2, 3, 4, 5]\naccumulator; // 0\n'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        _blocks.H1,
        null,
        '\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0439'
      ),
      _react2.default.createElement(
        Description,
        null,
        '\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0438 ',
        _react2.default.createElement('i', null, 'function chaining'),
        ' \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u044B\u043C \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u043A\u0430\u043A \u0438\u043D\u043F\u0443\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043D\u0435 \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u044F ',
        _react2.default.createElement('i', null, 'original input')
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        'let string = " I will be a url slug   ";\nfunction slugify(string) {\n  return string.toLowerCase()\n    .trim()\n    .split(" ")\n    .join("-");\n}\nslugify(string); // i-will-be-a-url-slug\n'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u0424\u0443\u043A\u043D\u0446\u0438\u0438 \u043A\u0430\u043A \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430'
      ),
      _react2.default.createElement(
        PresaSlogan,
        null,
        'Functions as first-class entities'
      ),
      _react2.default.createElement(
        Description,
        null,
        _react2.default.createElement(
          'p',
          null,
          '\u0418\u043C\u043C\u0443\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C + \u0447\u0438\u0441\u0442\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u0442\u044C (\u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.'
        ),
        _react2.default.createElement(
          'p',
          null,
          '\u0418\u0434\u0435\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u043A\u0430\u043A \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430, \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438\u0445, \u043A\u0430\u043A \u0437\u043D\u0435\u0447\u0435\u043D\u0438\u0439, \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u0430\u043D\u043D\u044B\u0445'
        )
      ),
      '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u043A\u0430\u043A \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430:',
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          '\u041A \u043D\u0438\u043C \u043C\u043E\u0436\u043D\u043E \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u043A \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0430\u043C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C'
        ),
        _react2.default.createElement(
          'li',
          null,
          '\u041C\u043E\u0433\u0443\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F, \u043A\u0430\u043A \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439'
        ),
        _react2.default.createElement(
          'li',
          null,
          '\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0434\u0440\u0443\u0433\u0438\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C'
        )
      ),
      _react2.default.createElement(Image, {
        width: '300',
        src: require('./images/first.jpeg')
      })
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u0424\u0443\u043A\u043D\u0446\u0438\u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430'
      ),
      _react2.default.createElement(
        'p',
        null,
        '\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u043C\u043E\u0436\u0435\u0442: '
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          '\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432'
        ),
        _react2.default.createElement(
          'li',
          null,
          '\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u0430\u043A \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442'
        )
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        '\n    let func = () => 2;\n    function highOrder(func){\n      return function(){\n        return func()+2;\n      }\n    }\n    highOrder(func)()\n    '
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(_blocks.H1, null, 'Filter'),
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        'var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nvar evenNumbers = [];\nfor (var i = 0; i < numbers.length; i++) {\n  if (numbers[i] % 2 == 0) {\n    evenNumbers.push(numbers[i]);\n  }\n}\nconsole.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]\n'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(
        PresaSlogan,
        null,
        '\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 `filter` \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        '\nconst even = n => n % 2 == 0;\nconst listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nlistOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]\nfunction smaller(number) {\n  return number < this;\n}\nfunction filterArray(x, listOfNumbers) {\n  return listOfNumbers.filter(smaller, x);\n}\nlet numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];\nfilterArray(3, numbers); // [2, 1, 0]\n'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(_blocks.H1, null),
      _react2.default.createElement(
        PresaSlogan,
        null,
        'Map - \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442 \u043A\u043E\u043B\u0431\u0435\u043A \u043A\u043E \u0432\u0441\u0435\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043D\u043E\u0432\u0443\u044E \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E'
      ),
      _react2.default.createElement(
        'p',
        null,
        '\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0442\u0438\u0432\u043D\u043E'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        '\nconst makeSentence = (person) => `${person.name} \nis ${person.age} years old`;\nconst peopleSentences = (people) => people.map(makeSentence);\npeopleSentences(people);\n'
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      null,
      _react2.default.createElement(_blocks.H1, null, 'Reduce'),
      _react2.default.createElement(
        PresaSlogan,
        null,
        'Reduce - \u0432 \u0444\u0443\u043A\u043D\u0446\u0438\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0438\u0437 \u0441\u043A\u043E\u043C\u0431\u0438\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439'
      ),
      _react2.default.createElement(
        _blocks.Code,
        null,
        '\nlet shoppingCart = [\n  { productTitle: "Product 1", amount: 10 },\n  { productTitle: "Product 2", amount: 30 },\n  { productTitle: "Product 3", amount: 20 },\n  { productTitle: "Product 4", amount: 60 }\n];\nconst sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;\nconst getTotalAmount = (shoppingCart) => shoppingCart.reduce(sumAmount, 0);\ngetTotalAmount(shoppingCart); // 120\n  '
      )
    ),
    _react2.default.createElement(
      _src.Slide,
      {
        layout: function layout(children) {
          return _react2.default.createElement(_sidebarLayout2.default, {
            src: require('./images/func.jpeg'),
            proportion: '9/9',
            children: children
          })
        },
        centered: true
      },
      _react2.default.createElement(_blocks.H1, null, 'Thanks!'),
      _react2.default.createElement(
        Footnote,
        null,
        'Powered by ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/molefrog/presa' },
          'Presa'
        )
      )
    )
  )
}
var NumberedNumber = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return props.color
  },
  function(props) {
    return props.color
  }
)

var NumberedCont = _styledComponents2.default.div(
  _templateObject2,
  function(props) {
    return props.centered ? 'center' : 'flex-start'
  },
  function(props) {
    return props.centered ? 'center' : 'left'
  },
  function(props) {
    return (
      props.inverse &&
      '\n    color: white;\n    text-shadow: 1px 2px rgba(0,0,0,0.6);'
    )
  }
)

var Numbered = function Numbered(props) {
  return _react2.default.createElement(
    NumberedCont,
    { centered: props.centered, inverse: props.inverse },
    _react2.default.createElement(
      NumberedNumber,
      { color: props.inverse ? 'white' : primaryColor },
      props.number
    ),
    props.children
  )
}

var Footnote = _styledComponents2.default.div(_templateObject3)

var PresaTitle = (0, _styledComponents2.default)(_blocks.H1)(
  _templateObject4,
  primaryColor
)

var PresaSlogan = (0, _styledComponents2.default)(_blocks.H3)(_templateObject5)
var Image = _styledComponents2.default.img(_templateObject6, function(props) {
  return props.width
})
var StarOnGithub = _styledComponents2.default.div(_templateObject7)

var Description = _styledComponents2.default.p(_templateObject8)

var InlineCode = _styledComponents2.default.code(_templateObject9, primaryColor)

var PresaIcon = (0, _styledComponents2.default)(_icons.Presa)(_templateObject10)

// to prevent additional scrollbars
;(0, _styledComponents.injectGlobal)(_templateObject11)

var rerenderApp = function rerenderApp() {
  var container = document.getElementById('container')

  // clean up and render
  _reactDom2.default.unmountComponentAtNode(container)
  _reactDom2.default.render(
    _react2.default.createElement(PitchDeck, null),
    container
  )
}

if (module.hot) {
  module.hot.accept(rerenderApp)
}

document.addEventListener('DOMContentLoaded', function() {
  rerenderApp()
})
