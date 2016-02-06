'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function thing(_ref) {
  var arg1 = _ref.arg1;

  var rest = _objectWithoutProperties(_ref, ['arg1']);

  console.log('thing', 'arg1', arg1, 'rest', rest);
}

thing({arg1: 'arg1', arg2: 'arg2', arg3: 'arg3'});
