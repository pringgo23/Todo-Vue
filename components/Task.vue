<template>
    <div>
        <div class=" flex justify-center p-4">
            <div id="body-task" class="w-4/5 rounded-full flex justify-between ">
                <p class="text-white text-sm p-1 ml-2"> What is your plan? </p>
                <div class="flex items-center">
                    <button @click="showModal = true" id="btn-add" class="text-xs text-white ml-1 mr-1 rounded-full"
                        type="button"> Add </button>
                </div>
            </div>
            <Modal v-show="showModal" @close-modal="showModal = false" />
        </div>
        <div class="w-3 ml-11 flex">
            <div>
                <button @click="Ascending" id="btn-add" class="text-xs text-white ml-1 mr-1 rounded-full" type="button">
                    Asc </button>
            </div>
            <div>
                <button @click="Descending" id="btn-add" class="text-xs text-white ml-1 mr-1 rounded-full ml-3"
                    type="button"> Des </button>
            </div>
        </div>
        <div class="mt-5 ml-11">
            <form>
                <label for="cars">Filter the Category:</label>
                <select v-model="activeFilter">
                    <option v-for="value in filters" :key="value" :value="value">{{value}}</option>
                </select>
            </form>
            <button @click="btnFilter(activeFilter)" class="ml-11 mt-2 bg-white p-1">Submit</button>
        </div>
    </div>
</template>

<script>
import Modal from "../components/Modal.vue";


export default {
    name: 'task',
    components: {
        Modal
    },
    methods: {
        Ascending() {
            this.$store.commit('ASC_TASK');
        },
        Descending() {
            this.$store.commit('DESC_TASK');
        },btnFilter(data){
            this.$store.commit('FILTER_TASK',data);
        }
    },
    data() {
        return {
            showModal: false,
            activeFilter: '',
            filters : ['a','b','c']
        }
    }


}
</script>

<style>
#body-task {
    background-color: #864879;
}

#btn-add {
    background-color: #3F3351;
    width: 71px;
    height: 21px;
}
</style>