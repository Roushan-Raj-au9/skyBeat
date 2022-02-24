const CategoryReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'SHOW_CATEGORIES' :
            return{
                ...state, categories : action.payload
            }

        default:
            return state
    }
}

export default CategoryReducer;