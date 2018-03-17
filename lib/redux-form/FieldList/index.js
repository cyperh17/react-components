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
 * Компонент списка
 *
 * Принимает один дочерний компонент и использует его
 * в качестве шаблона элемента списка
 *
 * @param {Object}        fields        Параметры полей списка. Из redux-form
 * @param {Object}        meta          Метаданные полей списка. Из redux-form
 * @param {Function}      onRemove      Функция, вызываемая при удалении
 *                                      элемента. В качестве параметров
 *                                      принимает id элемента
 * @param {React.Element} buttonElement Элемент кнопки "Добавить"
 */
var FieldList = function FieldList(_ref) {
  var fields = _ref.fields,
      meta = _ref.meta,
      _onRemove = _ref.onRemove,
      _ref$buttonElement = _ref.buttonElement,
      buttonElement = _ref$buttonElement === undefined ? _react2.default.createElement(
    'button',
    null,
    'Add'
  ) : _ref$buttonElement,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['fields', 'meta', 'onRemove', 'buttonElement', 'children']);

  return _react2.default.createElement(
    'div',
    props,
    fields.map(function (member, index) {
      return _react2.default.cloneElement(_react2.default.Children.only(children), {
        key: index,
        member: member,
        onRemove: function onRemove(id) {
          fields.remove(index);
          typeof _onRemove === 'function' && id && _onRemove(id);
        }
      });
    }),
    _react2.default.cloneElement(buttonElement, {
      onClick: function onClick(evt) {
        evt.preventDefault();
        fields.push({});
      }
    })
  );
};

FieldList.propTypes = {
  fields: _propTypes2.default.object.isRequired,
  meta: _propTypes2.default.object,
  onRemove: _propTypes2.default.func,
  buttonElement: _propTypes2.default.element,
  children: _propTypes2.default.element.isRequired
};

exports.default = FieldList;