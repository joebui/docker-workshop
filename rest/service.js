const Todo = require("./todo");

class Service {
  async findAll() {
    return await Todo.findAll();
  }

  async create(data) {
    return await Todo.create(data);
  }
}

module.exports = new Service();
