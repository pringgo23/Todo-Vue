<template>
  <div >
    <div id="modal-overlay" class="flex justify-center items-center">
      <div id="wrap" class="w-3/4 mt-3 p-5 rounded-lg mb-2 md:w-1/4 ">
        <div class="flex justify-center">
          <div class="w-1/2">
            <p class="text-center mb-5 font-bold">What do you want to do?</p>
          </div>
        </div>
        <form action="">
          <div>
            <p class="font-bold w-full"> Title</p>
            <input 
            @keypress.enter="addJudul"
            v-model="newJudul" 
            type="text" 
            placeholder=" Input the title" 
            class="w-full rounded-sm pl-2" >
          </div>
          <div>
            <p class="font-bold w-full"> Category</p>
            <input 
            @keypress.enter="addKategory"
            v-model="newKategori" 
            type="text" 
            placeholder=" Input the Category" 
            class="w-full rounded-sm pl-2" >
          </div>
          <div class=" mt-4 mb-3">
            <p class="font-bold"> Description</p>
            <textarea 
            @keypress.enter="addDesc"
            v-model="newDesc"  
            type="text" 
            placeholder="Input the Description" 
            class="w-full h-24 rounded-sm pl-2" > </textarea>
          </div>
        </form>
        <div  class=" flex justify-center">
          <button id="btn-add" @click="addTask" class="text-white rounded-full text-xs" :disabled="buttonStatus"> Add Todo </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: "Modal",
    data(){
      return {
        newJudul : '',
        newDesc : '',
        newKategori : '',
      }
    },
    computed: {
      buttonStatus() {
        if (this.newJudul && this.newDesc) {
          return false
        } else {
          return true
        }
      }
    },
    methods : {
        ...mapMutations({
          setNewData: 'todo/ADD_TASK'
        }),
        addTask(){
          var payload = {
            title : this.newJudul,
            description : this.newDesc,
            category : this.newKategori,
            status : false
          }
            this.setNewData(payload);
            this.$store.commit('ADD_TASK', payload);
            this.newJudul = '';
            this.newDesc = '';
            this.newKategori = '';
            this.$emit('close-modal');
            this.$emit('filterData'); 
        }
      }
}

</script>

<style>
  #btn-add {
    background-color: #2D4263; 
    min-width: 80%;
  }
  #wrap{
    background-color: rgb(219, 219, 219);
  }
  #modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000000da;
}
</style>