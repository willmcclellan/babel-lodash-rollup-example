(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash/fp/collection/find')) :
	typeof define === 'function' && define.amd ? define(['lodash/fp/collection/find'], factory) :
	(factory(global.find));
}(this, (function (find) { 'use strict';

find = 'default' in find ? find['default'] : find;

find(function (item) {
  return console.log('item');
})(['one', 'two', 'three']);

})));
