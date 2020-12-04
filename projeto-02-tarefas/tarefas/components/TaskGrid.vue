<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <task v-for="(task, i) in tasks" :key="task.name"
            @taskDeleted="$emit('taskDeleted',i)"
            @stateChanged="$emit('stateChanged',i)"
            :task="task">{{ task.name }}
      </task>
    </template>
    <p class="no-task" v-else>Sem Tarefas</p>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "TaskGrid",
  components: {Task},
  props: {
    tasks: {type: Array, required: true}
  }
}
</script>

<style scoped>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px
}

.no-task {
  color: #AAAAAA;
  font-size: 1.7rem;
}
</style>