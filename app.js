// 
/**
 * No uses funciones de flechas en los methods.
 * La funcion data debe retornar un objeto con las propiedades del componente.
 * Double Way data binding. mientras escribo en el input se actualzia el html
 * Directiva: v-model -> Bindear input con propiedad (double-way data binding)
 * Directiva: v-on:keypress.enter   -> v-on Ejecutar methodo en un evento. Recivo el evento como parametro en la funcion llamada.
 * Directiva: v-for   -> for en html
 * Directiva: v-show -> display : none or block
 * Directiva: v-if -> add elemtn to the dom or not
 * 
 * 
 */


const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

const app = Vue.createApp({
 
    data() {
        return {
            quotes,
            newQuote: undefined
        }
    },
    methods: {
        addQuote(event, value) {
            console.log(event)
            this.quotes.unshift({
                quote: this.newQuote
            })
        }
    }
    
})


app.mount('#myApp')

