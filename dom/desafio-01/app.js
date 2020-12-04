new Vue({
    el: '#desafio',
    data:{
        name: 'Ale',
        age: 34,
        image: 'https://defatoonline.com.br/wp-content/uploads/2019/08/dvd-os-cavaleiros-do-zodiaco-classico-serie-completa-D_NQ_NP_113125-MLB25370018974_022017-F-780x520.jpg'
    },
    methods: {
        ageMult () {
            return this.age*3
        },
        rnd: function () {
            return Math.random(0,1)
        },
    }
})