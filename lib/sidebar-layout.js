'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value)
        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return']) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }
    return _arr
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    }
  }
})()

var _templateObject = _taggedTemplateLiteral(
    [
      '\n  background: url(',
      ');\n  background-size: cover;\n  background-position: center;\n\n  flex-grow: ',
      ';\n  flex-basis: ',
      '%;\n\n  order: ',
      ';\n'
    ],
    [
      '\n  background: url(',
      ');\n  background-size: cover;\n  background-position: center;\n\n  flex-grow: ',
      ';\n  flex-basis: ',
      '%;\n\n  order: ',
      ';\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ['\n  padding: 2.5em 3em;\n\n  flex-grow: ', ';\n  flex-basis: ', '%;\n'],
    ['\n  padding: 2.5em 3em;\n\n  flex-grow: ', ';\n  flex-basis: ', '%;\n']
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ['\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n'],
    ['\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n']
  )

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactDom = require('react-dom')

var _reactDom2 = _interopRequireDefault(_reactDom)

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var SidebarLayout = function SidebarLayout(props) {
  var proportion = props.proportion || '4/5'

  var _proportion$split = proportion.split('/'),
    _proportion$split2 = _slicedToArray(_proportion$split, 2),
    left = _proportion$split2[0],
    right = _proportion$split2[1]

  var isRight = props.position === 'right'

  var leftRatio = (100.0 * left) / (left + right)
  var rightRatio = (100.0 * left) / (left + right)

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(Side, {
      isRight: isRight,
      percentage: leftRatio,
      weight: left,
      background: props.src
    }),
    _react2.default.createElement(
      Content,
      { percentage: rightRatio, weight: right },
      props.children
    )
  )
}

var Side = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return props.background
  },
  function(props) {
    return props.weight
  },
  function(props) {
    return props.percentage
  },
  function(props) {
    return props.isRight ? 2 : 0
  }
)

var Content = _styledComponents2.default.div(
  _templateObject2,
  function(props) {
    return props.weight
  },
  function(props) {
    return props.percentage
  }
)

var Container = _styledComponents2.default.div(_templateObject3)

exports.default = SidebarLayout
