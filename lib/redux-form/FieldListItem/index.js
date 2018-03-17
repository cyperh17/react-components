'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Компонент элемента списка
 *
 * Принимает список дочерних полей,
 * передавая им необходимые аргументы
 *
 * @param {Number}        id
 * @param {String}        member        Название элемента списка. Из redux-form
 * @param {Function}      onRemove      Функция, вызываемая при удалении
 * @param {React.Element} buttonElement Элемент кнопки "Удалить"
 */
var FieldListItem = function FieldListItem(_ref) {
  var id = _ref.id,
      member = _ref.member,
      onRemove = _ref.onRemove,
      _ref$buttonElement = _ref.buttonElement,
      buttonElement = _ref$buttonElement === undefined ? _react2.default.createElement(
    'button',
    null,
    'X'
  ) : _ref$buttonElement,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['id', 'member', 'onRemove', 'buttonElement', 'children']);

  var childArray = _react2.default.Children.toArray(children);
  return _react2.default.createElement(
    'div',
    props,
    childArray.map(function (child) {
      return _react2.default.cloneElement(child, { name: member + '.' + child.props.name });
    }),
    _react2.default.cloneElement(buttonElement, {
      onClick: function onClick(evt) {
        evt.preventDefault();
        onRemove(id);
      }
    })
  );
};

FieldListItem.propTypes = {
  id: _propTypes2.default.number,
  member: _propTypes2.default.string.isRequired,
  onRemove: _propTypes2.default.func,
  buttonElement: _propTypes2.default.element,
  children: _propTypes2.default.node.isRequired
};

exports.default = FieldListItem;