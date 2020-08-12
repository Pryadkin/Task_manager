import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test.megapolis-it.ru/api/list'
});

export const listAPI = {
  getList() {
    return instance.get('/')
      .then(res => res.data)
  },
  addTask(task: string) {
    return instance.post('/', { title: task })
      .then(res => res)
  },
  editTask(id: number, task: string) {
    return instance.post(`/${id}`, { title: task })
      .then(res => res)
  }
}