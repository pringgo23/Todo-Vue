export const state =() =>({
    tugas :[]
})

export const mutations = {
    ADD_TASK(state, payload) {
        state.tugas = [payload, ...state.tugas];
        // localStorage.setItem(state.tugas)
    },
    REMOVE_TASK(state, payload){
        const index = state.tugas.indexOf(payload);
        state.tugas.splice(index,1);
    },
    TOGGLE_TASK(state, payload){
        state.tugas[payload].status = !state.tugas[payload].status;
    },
    EDIT_TASK(state, payload){
        const index = state.tugas.indexOf(payload);
        state.tugas.splice(index,2,'payload');
        // state.tugas.push(payload);
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
        console.log('asc:',state.tugas);
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
        console.log('desc:',state.tugas);
     }
}