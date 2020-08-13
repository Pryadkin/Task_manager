import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test.megapolis-it.ru/api/list'
});

export const listAPI = {
  async getList() {
    return instance.get('/')
      .then(res => res.data)
  },
  async addTask(task: string) {
    return instance.post('/', { title: task })
      .then(res => res.data)
  },
  async editTask(id: number, task: string) {
    return instance.post(`/${id}`, { title: task })
      .then(res => res.data)
  },
  async deleteTask(id: number) {
    return instance.delete(`/${id}`)
      .then(res => res.data)
  }
};