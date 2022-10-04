<template>
    <div id="card-view" class="w-3/4">
        <div class="grid sm:grid-cols-12 md:grid-cols-3 md:gap-4" >
            <div v-for="(tugas,i) in $store.state.viewTugas" :key="i">
                <div id="title" class="rounded-t-md h-10 mt-3 ">
                    <div class="flex justify-between p-2">
                        <h1 id="content-title" class="text-center text-white pl-9" :style="{ 'text-decoration': (tugas.status ? 'line-through' : '') }"  >{{tugas.title}}</h1>
                        <div class="flex mr-2">
                            <button class="text-green-500 mr-2" @click="toggleStatus(i)"> V </button>
                            <button @click="showEdit(i)" class="mr-2 text-white"> <img class="w-4 bg-white" src="../assets/Image/edit.png" alt="edit"/> </button>
                            <button class="text-red-500" @click="removeTask(i)"> X </button>
                        </div>
                    </div>
                </div>
                <div id="category" class="h-8 p-2">
                    <p id="para-desc" class="text-center text-sm text-white ">{{tugas.category}}</p>
                </div>
                <div id="description" class="rounded-b-md h-36 p-2">
                    <p id="para-desc" class="text-justify text-sm text-white ">{{tugas.description}}</p>
                </div>
                <Edit :tugas= "tugas" v-show="modalEdit" @close-modal="modalEdit = false" />
            </div>
        </div>
    </div>
    
</template>

<script>
import Edit  from "../components/Edit.vue";
export default {
    name : 'Cardview',
    components: {
        Edit
    },
    data(){
        return{
            modalEdit : false
        }
    },
    methods: {
        removeTask(index){
             this.$store.commit('REMOVE_TASK', index)
             console.log('ini index:',index);
        },
        toggleStatus(index){
            this.$store.commit('TOGGLE_TASK', index)
        },
        showEdit(){
            this.modalEdit = true
        }
    }
}
</script>

<style>
    #card-view{
        margin:auto;
    }
    #title{
        background-color:#1F1D36;
    }
    #content-title{
        margin: auto;
    }
    #description{
        background-color: #864879;
    }
    #category{
        background-color: #3F3351;
    }
    #para-desc{
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
</style>