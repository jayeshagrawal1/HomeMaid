export const initialState=window.localStorage.getItem('isLoggedIn');


export const reducer=(state,action)=>{

    if(action.type==="USER")
        return action.payload;

    return state;
}


