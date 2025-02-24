
let id = 2;
function customers(state = [], action){
    //The commented code below is showing what state = [] is:
    //if (state === undefined) {
//         state = [];
// }
    if(action.type === "ADD_CUSTOMER"){
        if(action.value.id){
            const index = state.findIndex((c)=>c.id === action.value.id);
            state[index] = action.value;
            return [...state];
        }
        action.value.id = ++id;
        return [...state,action.value];
    }
    return state;
}
function currentCustomer(state ={},action){
    if(action.type === "CHANGE_CURRENT_CUSTOMER"){
        return action.value;
    }
    return state;
}
function searchTerm(state =  "",action){
    if(action.type === "CHANGE_SEARCH_TERM"){
        return action.value;
    }
    return state;
}


reducers =  Redux.combineReducers({
    customers,currentCustomer,searchTerm
  })