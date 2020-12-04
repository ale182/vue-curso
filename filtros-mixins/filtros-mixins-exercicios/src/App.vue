<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{usuarioLogado}}</p>
    <p>{{ cpfAluno | cpf | inverter}}</p>
      <input type="text" :value="cpfAluno | cpf | inverter">
    <hr>
    <frutas/>
    <hr>
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
  </div>

</template>

<script>
import Frutas from "./Frutas";
import frutasMixin from "./frutasMixin";
import usuarioMixin from "./usuarioMixin";

export default {
  components: {Frutas},
  mixins: [frutasMixin, usuarioMixin],
  filters:{
    cpf(valor){
      // com o `${valor}` "forca" pra ser uma string
      const arr =`${valor}`.split('')
      arr.splice(3,0,'.')
      arr.splice(7,0,'.')
      arr.splice(11,0,'-')
      return arr.join('')
    }
  },
  data() {
    return {
      cpfAluno: '01231456478',
      frutas:['prioridade é do componente']
    }
  },
  methods:{

  },
  created() {
    console.log('Created - Componente App')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input{
  font-size: 2.5rem;
}
</style>
