export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // mutations é como setter
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    actions:{
        adicionarProduto({commit},payload){
            setTimeout( ()=> {
                commit('adicionarProduto',payload)
            },1000)
        }
    },

    // é possivel colocar a funcao na raiz (chamar sem o namespace)
    /*actions: {
        adicionarProduto: {
            root: true,
            handler({commit}, payload) {
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    }*/
}