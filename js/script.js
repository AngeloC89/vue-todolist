/*
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
    //a function for remove items on list
    deleteItem(id){
      let i = this.toSee.findIndex((el)=> el.id === id);
      this.toSee.splice(i,1);
      //console.log(i)

    }



  },
  mounted() {



  },

}).mount('#app')