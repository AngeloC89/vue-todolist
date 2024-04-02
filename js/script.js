

import { toSee } from './data.js';

const { createApp } = Vue;




createApp({
  data() {
    return {
      toSee,
      nCity: '',
      done:'',

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

    },
    //heere create a new object and push inside the new element
    addItem(){
      const newObj = {
        id:'null',
        city: this.nCity,
        done: false
      };
      let nextId = 0;
      this.toSee.forEach((el) => {
        if(nextId < el.id){
          nextId = el.id
        };      
      });
      newObj.id = nextId + 1;
      this.toSee.push(newObj);
      this.nCity = '';
      console.log(this.nCity);
      console.log(this.toSee);
    },

  },
  computed: {
    toSeeNew(){
      return this.toSee.filter((el)=>{
       if(this.done === ''){
        return true;
       };
       if(this.done === 'true'){
       return el.done === true;
       };
       if(this.done === 'false'){
       return el.done === false;
       };
      })
    }
  },
  mounted() {



  },

}).mount('#app')