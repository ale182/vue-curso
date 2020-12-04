<template>
<div class="usuario">
  <h2>Usuários</h2>
  <hr>
  <router-view/>
  <button sucesso @click="irParaInicio">Voltar</button>
</div>
</template>

<script>
export default {
  name: "Usuario",
  methods:{
    irParaInicio (){
      //this.$router.push('/')
      // outra possibilidade, passando um objeto com parametros
      // this.$router.push({path:'/'})
      // outra possibilidade, usando o name
      this.$router.push({name:'inicio'})
    }
  }
}
</script>

<style scoped>

</style>