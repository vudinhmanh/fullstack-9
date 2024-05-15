<template>
  <main>
    <header>
      <h1>{{ taskStore.name }}</h1>
    </header>
    <div class="new-task-form">
      <task-form></task-form>
    </div>
    
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>Có tất cả {{ taskStore.totalCount }} task</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <task-details :task="task">
        </task-details>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Mày có {{ taskStore.favCount }} yêu thích</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <task-details :task="task">
        </task-details>
      </div>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue'
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')
    return { taskStore, filter }
  }
}
</script>

<style>

</style>