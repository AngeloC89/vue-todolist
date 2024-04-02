/*MILESTONE 1
.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
*/

import { toSee } from './data.js';

const { createApp } = Vue;




createApp({
  data() {
    return {
      toSee,

    }
  },
  methods: {
    //function to mark elements
    ToggleToSee(id) {
      const item = this.toSee.find((el) => {
        return el.id === id
      })

      if (item) { item.done = !item.done; };
      console.log(item);
    },



  },
  mounted() {



  },

}).mount('#app')