<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
    <p>Idade <strong>{{ idade }}</strong></p>
    <button @click="reiniciarNome()">Reiniciar Nome</button>
    <button @click="reiniciarFn()"> Reiniciar Nome (CallBack)</button>
  </div>
</template>

<script>
import barramento from "../barramento";

export default {
  // forma 1, sem validar o datatype
  //props: ['nome'],

  // forma 2 validando a propriedade
  //props: {
  //  nome: String
  //},

  // forma 3 validando a propriedade e com opcoes adicionais (required)
  props: {
    nome: {
      type:String,
      required: true,
      // default: 'Padrao'
      // Tambem é possivel usar uma funcao
      default: function (){
        return Array(10).fill('A').join('|')
      }

    },
    reiniciarFn: Function,
    idade: Number
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    },
    reiniciarNome(){
      this.nome = 'Pedro'
      this.$emit('nomeMudou' , this.nome)


      // evento pode ser um objeto, usa como abaixo
      // this.$emit('nomeMudou' , {
      //   novo: this.nome,
      //   old
      // })
    }
  },
  created() {
    // primeiro exemplo, com comunicacao "direta" pelo barramento
    // barramento.$on('idadeMudou', (idade) => {
    //   this.idade = idade
    // })
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade
    })
  }
}
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
