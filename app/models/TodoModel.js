require('../config/db');

const todo = MyAppModel.extend({
  tableName: "todos",
});

todo = new Todo();

export default todo;