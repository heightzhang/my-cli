import { defineStore } from 'pinia'
export const useUsersStore = defineStore('users', {
  // 其它配置项
  state: () =>{
    return {
      name: 'zhanggao',
      age: '25',
      sex: 'man'
    }
  }
})