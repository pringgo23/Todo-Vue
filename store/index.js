export const state =() =>({
    tugas :[],
    viewTugas:[]
})

export const mutations = {
    ADD_TASK(state, payload) {
      state.tugas.push(payload);
      state.viewTugas= state.tugas
        
    },
    REMOVE_TASK(state, payload){
        state.tugas.splice(payload,1);
        state.viewTugas= state.tugas
    },
    TOGGLE_TASK(state, payload){
        state.tugas[payload].status = !state.tugas[payload].status;
        state.viewTugas= state.tugas
    },
    EDIT_TASK(state, payload){
        const index = state.tugas.indexOf(payload);
        state.tugas.splice(index,1,payload);
        state.viewTugas= state.tugas
     },
     ASC_TASK(state){
        state.tugas = state.tugas.sort((a, b) => {
            const fa = a.category.toLowerCase();
            const fb = b.category.toLowerCase();
             if (fa < fb) {
                return -1
             } if (fa > fb) {
                return 1
             } else{
                return 0
             }
        });
        state.viewTugas= state.tugas
     },
     DESC_TASK(state){
        state.tugas = state.tugas.sort((a, b) => {
            const fa = a.category.toLowerCase();
            const fb = b.category.toLowerCase();
             if (fa < fb) {
                return 1
             } if (fa > fb) {
                return -1
             } else{
                return 0
             }
        });
        state.viewTugas= state.tugas
     },FILTER_TASK(state,payload){
        state.viewTugas = state.tugas.filter(item => item.category == payload)
     }
}