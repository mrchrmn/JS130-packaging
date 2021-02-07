"use strict";

const Todo = require("./todo.js");

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if ((todo instanceof Todo) === false) {
      throw new TypeError("can only add Todo objects");
    } else {
      this.todos.push(todo);
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size()-1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markNotDoneAt(index) {
    this.itemAt(index).markNotDone();
  }

  isDone() {
    return this.todos.every(item => item.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1)[0];
  }

  toString() {
    let header = `---- ${this.title} ----`;
    let items = this.todos.map(item => item.toString()).join("\n");
    return `${header}\n${items}`;
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    let filteredList = new TodoList(this.title);
    this.forEach(item => {
      if (callback(item)) {
        filteredList.add(item);
      }
    });
    return filteredList;
  }

  findByTitle(title) {
    return this.filter(item => item.getTitle() === title).first();
  }

  allDone() {
    return this.filter(item => item.isDone());
  }

  allNotDone() {
    return this.filter(item => !item.isDone());
  }

  markDone(title) {
    let item = this.findByTitle();
    if (item !== undefined) {
      this.findByTitle(title).markDone();
    }
  }

  markAllDone() {
    this.forEach(item => item.markDone());
  }

  markAllNotDone() {
    this.forEach(item => item.markNotDone());
  }

  toArray() {
    return this.todos.slice();
  }

  _validateIndex(index) {  // _ in name suggests a "private" method
    if (index === undefined) {
      throw new ReferenceError("no index given");
    } else if (typeof index !== "number") {
      throw new TypeError("invalid index: " + index);
    } else if (index < 0 || index >= this.size()) {
      throw new ReferenceError("index out of range: " + index);
    }
  }
}

module.exports = TodoList;