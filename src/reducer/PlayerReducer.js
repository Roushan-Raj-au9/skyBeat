const PlayerReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'SET_TRACK_ID' :
            return{
                ...state, playerTrackId : action.payload
            }

        default:
            return state
    }
}

export default PlayerReducer;