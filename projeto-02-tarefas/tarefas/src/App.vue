<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskProgress :progress="progress"></TaskProgress>
    <NewTask @taskAdded="addTask"></NewTask>
    <TaskGrid :tasks="tasks"
              @taskDeleted="deleteTask"
              @stateChanged="toogleState"
    ></TaskGrid>
  </div>
</template>

<script>
import TaskGrid from "../components/TaskGrid";
import NewTask from "../components/NewTask";
import TaskProgress from "../components/TaskProgress";

export default {
  components: {TaskGrid, NewTask, TaskProgress},
  data() {
    return {
      tasks: []
    }
  },
  computed: {
    progress() {
      const total = this.tasks.length
      const done = this.tasks.filter(t => !t.pending).length
      return Math.round(done/total * 100) || 0
    }
  },
  watch:{
    // dessa forma nao funciona as atualizacoes (do pending), perde
    // tasks(){
    //   localStorage.setItem('tasks', JSON.stringify(this.tasks))
    // }
    tasks: {
      // monitora de forma profunda
      deep: true,
      handler(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name
      const reallyNew = this.tasks.filter(sameName).length === 0
      if (reallyNew)
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
      // outra forma de fazer , sem o IF
      //reallyNew && this.tasks.push({....

    },
    deleteTask(i) {
      this.tasks.splice(i, 1)
    },
    toogleState(i) {
      this.tasks[i].pending = !this.tasks[i].pending
    }
  },
  created() {
    const json = localStorage.getItem('tasks')
    // o || [] é um valor padrao, qdo nao encontrar nada no parse, ele vai gravar um array em branco
    // this.tasks = JSON.parse(json) || []
    // outra forma é testar se é array
    const array = JSON.parse(json)
    this.tasks = Array.isArray(array) ? array : []

  }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #FFF;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
