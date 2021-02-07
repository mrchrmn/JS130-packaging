const Todo = require('../lib/todo');
const TodoList = require('../lib/todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("toArray returns correct array", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("first item matches", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("last item matches", () => {
    expect(list.last()).toEqual(todo3);
  });

  test("shift returns first item", () => {
    expect(list.shift()).toEqual(todo1);
  });

  test("shift removes first item", () => {
    list.shift();
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("pop returns last item", () => {
    expect(list.pop()).toEqual(todo3);
  });

  test("pop removes first item", () => {
    list.pop();
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("TypeError on Add", () => {
    expect(() => list.add("not a todo")).toThrow(TypeError);
  });

  test("itemAt works like it should", () => {
    expect(() => list.itemAt()).toThrow(ReferenceError);
    expect(() => list.itemAt("4")).toThrow(TypeError);
    expect(() => list.itemAt(-4)).toThrow(ReferenceError);
    expect(list.itemAt(1)).toEqual(todo2);
  }); 

  test("forEach iterates of every element in the list", () => {
    let array = [];
    list.forEach(item => array.push(item));
    expect(list.toArray()).toEqual(array);
  });

  test("filter works just fine", () => {
    expect(list.filter(item => item.title.length < 12).toArray()).toEqual([todo1, todo2]);
  });

});