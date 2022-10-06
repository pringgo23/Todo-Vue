export default {
    ADD_TASK(state, payload) {
        state.tugas.push(payload);
        state.viewTugas = state.tugas;
    },
    REMOVE_TASK(state, payload){
        state.tugas.splice(payload,1);
        state.viewTugas = state.tugas;
    },
    TOGGLE_TASK(state, payload){
        state.tugas[payload].status = !state.tugas[payload].status;
        state.viewTugas = state.tugas;
    },
    EDIT_TASK(state, payload){
        const index = state.tugas.indexOf(payload);
        state.tugas.splice(index,1,payload);
        state.viewTugas = state.tugas;
     },
     ASC_TASK(state){ 
        let temp = state.viewTugas.sort((a, b) => {
            const fa = a.title.toLowerCase();
            const fb = b.title.toLowerCase();
             if (fa < fb) {
                return -1
             } if (fa > fb) {
                return 1
             } else{
                return 0
             }
        });
        state.viewTugas = temp
     },
     DESC_TASK(state){
        let temp = state.viewTugas.sort((a, b) => {
            const fa = a.title.toLowerCase();
            const fb = b.title.toLowerCase();
             if (fa < fb) {
                return 1
             } if (fa > fb) {
                return -1
             } else{
                return 0
             }
        });
        state.viewTugas = temp
     },
     FILTER_TASK(state,payload){
        if (payload == 'all') {
            state.viewTugas = state.tugas;
        }else{
            state.viewTugas = JSON.parse(JSON.stringify(state.tugas.filter(item => item.category == payload)))
        }
     }
}