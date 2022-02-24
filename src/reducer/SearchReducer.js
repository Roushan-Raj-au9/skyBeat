const SearchReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'SEARCH' :
            return{
                ...state, searchedItem : action.payload
            }

        default:
            return state
    }
}

export default SearchReducer;