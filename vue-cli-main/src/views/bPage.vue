<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>性别：{{ sex }}</p>
    <button @click="changeName">change</button>
    <button @click="reset">reset</button>
    <button @click="patchStore">patchChange</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/user'
const store = useUsersStore()
const { name, age, sex } = storeToRefs(store)
const changeName = () => {
  store.name = 'gao'
  console.log(store)
}
const reset = () => {
  store.$reset()
}
// const patchStore = () => {
//   store.$patch({
//     name: 'gao',
//     age: '100'
//   })
// }
// const patchStore = (state) => {
//   state.items.push({name: 'shoes', quantity: '1'})
//   state.hasChanged = true
// }


</script>

<style scoped lang="scss">

</style>
