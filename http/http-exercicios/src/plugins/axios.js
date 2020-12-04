import Vue from 'vue'
import axios from 'axios'

/// exemplos de uso
//axios.defaults.baseURL = 'https://curso-vue-f1d4d.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] ='token de segurança'
//axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-f1d4d.firebaseio.com/',
            headers: {
                'Authorization': 'token'
            },
            // desse jeito fica só na requisicoes GET
            // headers: {
            //     get: {
            //         'Authorization': 'token'
            //     }
            // }
        })
        Vue.prototype.$http.interceptors.request.use(config => {
            //console.log(config.method)
            // teste de mudar o metodo, apenas pra exemplo
            // if(config.method == 'post')
            //     config.method = 'put'
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({id: chave, ...res.data[chave]})
            // }
            //
            // res.data = array
            return res
        }, error => Promise.reject(error))

    }
})