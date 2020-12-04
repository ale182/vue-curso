new Vue({
    el: '#desafio',
    data:{
        valor : ''
    },
    methods:{
        atualizaValor(event){
            console.log(event)
            this.valor = event.target.value;
        },
        exibirAlerta(){
            alert('alert')
        }}
})