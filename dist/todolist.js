"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todo = require("./todo.js");

var TodoList = /*#__PURE__*/function () {
  function TodoList(title) {
    _classCallCheck(this, TodoList);

    this.title = title;
    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "add",
    value: function add(todo) {
      if (todo instanceof Todo === false) {
        throw new TypeError("can only add Todo objects");
      } else {
        this.todos.push(todo);
      }
    }
  }, {
    key: "size",
    value: function size() {
      return this.todos.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this.todos[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this.todos[this.size() - 1];
    }
  }, {
    key: "itemAt",
    value: function itemAt(index) {
      this._validateIndex(index);

      return this.todos[index];
    }
  }, {
    key: "markDoneAt",
    value: function markDoneAt(index) {
      this.itemAt(index).markDone();
    }
  }, {
    key: "markNotDoneAt",
    value: function markNotDoneAt(index) {
      this.itemAt(index).markNotDone();
    }
  }, {
    key: "isDone",
    value: function isDone() {
      return this.todos.every(function (item) {
        return item.isDone();
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      return this.todos.shift();
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.todos.pop();
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      this._validateIndex(index);

      return this.todos.splice(index, 1)[0];
    }
  }, {
    key: "toString",
    value: function toString() {
      var header = "---- ".concat(this.title, " ----");
      var items = this.todos.map(function (item) {
        return item.toString();
      }).join("\n");
      return "".concat(header, "\n").concat(items);
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.todos.forEach(callback);
    }
  }, {
    key: "filter",
    value: function filter(callback) {
      var filteredList = new TodoList(this.title);
      this.forEach(function (item) {
        if (callback(item)) {
          filteredList.add(item);
        }
      });
      return filteredList;
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      return this.filter(function (item) {
        return item.getTitle() === title;
      }).first();
    }
  }, {
    key: "allDone",
    value: function allDone() {
      return this.filter(function (item) {
        return item.isDone();
      });
    }
  }, {
    key: "allNotDone",
    value: function allNotDone() {
      return this.filter(function (item) {
        return !item.isDone();
      });
    }
  }, {
    key: "markDone",
    value: function markDone(title) {
      var item = this.findByTitle();

      if (item !== undefined) {
        this.findByTitle(title).markDone();
      }
    }
  }, {
    key: "markAllDone",
    value: function markAllDone() {
      this.forEach(function (item) {
        return item.markDone();
      });
    }
  }, {
    key: "markAllNotDone",
    value: function markAllNotDone() {
      this.forEach(function (item) {
        return item.markNotDone();
      });
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.todos.slice();
    }
  }, {
    key: "_validateIndex",
    value: function _validateIndex(index) {
      // _ in name suggests a "private" method
      if (index === undefined) {
        throw new ReferenceError("no index given");
      } else if (typeof index !== "number") {
        throw new TypeError("invalid index: " + index);
      } else if (index < 0 || index >= this.size()) {
        throw new ReferenceError("index out of range: " + index);
      }
    }
  }]);

  return TodoList;
}();

module.exports = TodoList;