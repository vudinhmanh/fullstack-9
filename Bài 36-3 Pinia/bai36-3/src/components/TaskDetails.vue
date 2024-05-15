<template>
  <div>
    <h1>{{ task.title }}</h1>
    <button @click="taskStore.toggleFav(task.id)" class="favBtn">Thích</button>
    <button @click="taskStore.deleteTask(task.id)">Xoá</button>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

export default {
    props:["task"],
    setup() {
      const taskStore = useTaskStore();
      return {
        taskStore
      }
    }
}
</script>

<style>
.favBtn:active{
  background-color: red;
}
</style>

