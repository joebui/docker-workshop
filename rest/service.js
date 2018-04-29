const Todo = require("./todo");

class Service {
  async findAll() {
    return await Todo.findAll();
  }

  async create(data) {
    return await Todo.create(data);
  }

  async getById(id) {
    return await Todo.findOne({ where: { id } });
  }

  async update(id, data) {
    return await Todo.update(data, { where: { id } });
  }

  async delete(id) {
    return await Todo.destroy({ where: { id } });
  }
}

module.exports = new Service();
