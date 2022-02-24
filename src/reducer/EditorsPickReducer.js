const EditorsPickReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'EDITORS_PICK' :
            return{
                ...state, editorsPick : action.payload
            }

        default:
            return state
    }
}

export default EditorsPickReducer;