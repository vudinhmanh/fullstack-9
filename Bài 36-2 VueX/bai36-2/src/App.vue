<template>
  <div>
    <nav-bar></nav-bar>
    <todo-list></todo-list>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TodoList from './components/TodoList.vue'
export default {
  components: { TodoList, NavBar },

}
</script>

<style>

</style>