//BONUS
Vue.config.devtools = true; 
const app = new Vue ({
    el: "#root",
    data: {
        emails: [],
        arrivati: false
    },
    mounted() {
        let numeri = 10
        for(let i = 0; i <= numeri - 1; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((results) => {
                    this.emails.push(results.data.response)
                    if(this.emails.length < 10) {
                        this.arrivati = false
                    } else if (this.emails.length == 10) {
                        this.arrivati = true
                    }
                });
        }
    },
    
/*Attraverso l'apposita API di Boolean
(https://flynn.boolean.careers/exercises/api/random/mail)
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

    /*
    mounted() {
        let numeri = 10
        for(let i = 0; i <= numeri - 1; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((results) => {
                    this.emails.push(results.data.response);
                });
        }
    }
    */
})



