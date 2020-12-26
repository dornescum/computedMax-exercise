const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },
    computed: {
        // dc este in computed nu mai nevoie in html {{ fullName FARA()!!}}
        fullName() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Orice';
        }
    },
    methods: {
        outputFullname() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Schwarzmüller';
        },
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = '';
        },
    },
});

app.mount('#events');