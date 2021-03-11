new Vue({
    el: '#app',
    data: {
        message: 'c\'est le premier test',
        message2: 'ok le deuxième test',
        message3: 'le message test à changer bg',
        checked: true,
        show: true,

    },

    methods : {
        changetext: function (){
            this.message2 = this.message3;
        },

    }
})