<template>
    <div>
      <div id="modal-overlay" class="flex justify-center items-center">
        <div id="wrap" class="w-3/4 mt-3 p-5 rounded-lg mb-2 md:w-1/4 ">
          <div class="flex justify-center">
            <div class="w-1/2">
              <p class="text-center mb-5 font-bold">Wanna Edit Your Todo?</p>
            </div>
          </div>
          <form>
            <div>
              <p class="font-bold w-full"> Title</p>
              <input 
              @keypress.enter="addJudul"
              v-model="newJudul" 
              type="text" 
              placeholder='' 
              class="w-full rounded-sm pl-2" >
            </div>
            <div>
              <p class="font-bold w-full"> Category</p>
              <input 
              @keypress.enter="addKategory"
              v-model="newKategori" 
              type="text" 
              placeholder="Input the Category" 
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
            <button id="btn-add" @click="addEdit" class="text-white rounded-full text-xs" :disabled="buttonStatus"> Edit Todo </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "Edit",
      props: ['tugas'],
      data(){
        return { 
          newJudul : this.tugas.title,
          newDesc : this.tugas.description,
          newKategori : this.tugas.category,
        }
      },
      computed: {
        buttonStatus() {
          if (this.newJudul && this.newDesc && this.newKategori) {
            return false
          } else {
            return true
          }
        }
      },
      methods : {
          addEdit(){
            var payload = {
              title : this.newJudul,
              description : this.newDesc,
              category : this.newKategori,
              status : false
            }
              this.$store.commit('EDIT_TASK', payload);
              this.newJudul = '';
              this.newDesc = '';
              this.newKategori = '';
              console.log('array tugas:',this.$store.state.tugas);
              this.$emit('close-modal'); 
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