new Vue({
    el: '#app',
    data: {
        message: 'c\'est le premier test',
        message2: 'ok le deuxième test',
        message3: 'le dernier test bg',
        checked: true,
        show: true,

    },

    methods : {
        changetext: function (){
            this.message2 = this.message3;
        },

    }
})