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
            <Modal v-show="showModal" @close-modal="showModal = false" @filterData = "btnFilter(activeFilter)" />
        </div>
        <div class="w-3 ml-11 flex">
            <div>
                <button @click="Ascending" id="btn-add" class="text-xs text-white ml-1 mr-1 rounded-full" type="button">
                    Asc </button>
            </div>
            <div>
                <button @click="Descending" id="btn-add" class="text-xs text-white ml-1 mr-1 rounded-full ml-3"
                    type="button"> Desc </button>
            </div>
        </div>
        <div class="mt-5 ml-11">
            <form>
                <label for="cars">Filter the Category:</label>
                <select v-model="activeFilter">
                    <option v-for="value in filters" :key="value" :value="value" :selected="value == 'a'">{{value}}</option>
                </select>
            </form>
            <button @click="btnFilter(activeFilter)" class="ml-11 mt-2 bg-white p-1">Submit</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import Modal from "../components/Modal.vue";


export default {
    name: 'task',
    components: {
        Modal
    },
    computed: {
        ...mapGetters({
            getView: 'todo/getViewTugas'
        })
    },
    watch: {
        getView() {
            console.log(this.getView)
        }
    },
    methods: {
        ...mapMutations({
            sortAsc: 'todo/ASC_TASK',
            sortDesc: 'todo/DESC_TASK',
            filterAll: 'todo/FILTER_TASK'
        }),
        Ascending() {
            //this.$store.commit('ASC_TASK');
            this.sortAsc()
            this.btnFilter(this.activeFilter);
        },
        Descending() {
            //this.$store.commit('DESC_TASK');
            this.sortDesc()
            this.btnFilter(this.activeFilter);
        },btnFilter(data){
            this.filterAll(data);
            //this.$store.commit('FILTER_TASK',data);
        }
    },
    data() {
        return {
            showModal: false,
            activeFilter: 'all',
            filters : ['all','a','b','c']
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