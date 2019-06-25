'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lo = _interopDefault(require('localforage'));

lo.setItem("test", "hello world");
// var originalSetItem = localStorage.setItem;

// localStorage.setItem = function() {
//   var event = new Event("itemInserted");
//   document.dispatchEvent(event);

//   originalSetItem.apply(this, arguments);
// };

// var storageHandler = function(e) {
//   console.log("storage event 1", e);
// };

// document.addEventListener("itemInserted", storageHandler, false);

// localStorage.setItem("foo", "bar");
