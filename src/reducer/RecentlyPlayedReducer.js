const RecentlyPlayedReducer = (state={}, action) => {
    switch(action.type)
    {
        case 'RECENTLY_PLAYED' :
            return{
                ...state , recentlyPlayed : action.payload
            }
        
        default :
            return state
    }

}

export default RecentlyPlayedReducer;