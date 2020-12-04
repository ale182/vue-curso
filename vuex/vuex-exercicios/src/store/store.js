import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        nome:'Jose',
        sobreNome: 'e Maria'
    },
    getters:{
        ...getters
    } ,
    modules: {carrinho, parametros}
})

// arquivo como estava antes de mudar para os modulos
/*
export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade: 2,
        preco: 19.99
    },
    getters: {
        valorTotal(state) {
            return  state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // mutations é como setter
    mutations:{
        adicionarProduto(state,payload){
            state.produtos.push(payload)
        },
        setQuantidade(state,payload){
            state.quantidade = payload
        },
        setPreco(state,payload){
            state.preco = payload
        },
    },

    // se precisar implementar regras de negocio, implementar na
    // actions e deixar a mutattion apenas para alterar os estados (dados)
    actions:{
        // adicionarProduto(context,payload){
        //     setTimeout( ()=> {
        //         context.commit('adicionarProduto',payload)
        //     },1000)
        // }

        // pode usar com o destruturing
        adicionarProduto({commit},payload){
            setTimeout( ()=> {
                commit('adicionarProduto',payload)
            },1000)
        }
    }
})*/
