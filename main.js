/*Attraverso l'apposita API di Boolean
(https://flynn.boolean.careers/exercises/api/random/mail)
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
Vue.config.devtools = true; 
const app = new Vue ({
    el: "#root",
    data: {
        emails: []
    },
    mounted() {
        let numeri = 10
        for(let i = 0; i <= numeri - 1; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((results) => {
                    this.emails.push(results.data.response);
                });
        }
    }
})



