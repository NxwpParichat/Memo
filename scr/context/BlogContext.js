import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
    
    switch (action.type) {
        
        case 'add-memo':
            return [
                ...state,
                {
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content,
                    // title: `Memo #${state.length+1}` 
                },
            ];
        case 'del-memo':
            return state.filter(memo=>memo.id != action.payload);
        case 'edit-memo':
            return state.map((memo) =>
            memo.id ===  action.payload.id? action.payload : memo);
        default:
           return state;
    }
};

    const addMemo= dispatch => { 
        return(title, content)=>{
            dispatch({type: 'add-memo', payload: { title, content }});
        };
     };
    
    const delMemo = dispatch=>{
        return id => {dispatch({type:'del-memo', payload:id})
        };
    };
    const editMemo = dispatch => {
        return(id, title, content) => {
            dispatch({type: 'edit-memo', payload: {id, title, content}})
        };
    };
export const {Context,Provider} = createDataContext(
    memoReducer,
    {addMemo, delMemo, editMemo},
    [{id: '0',title: 'Title000',content: ''}]
);
