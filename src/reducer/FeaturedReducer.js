const FeaturedReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'SHOW_FEATURED' :
            return{
                ...state, featuredItem : action.payload
            }

        case 'SHOW_FEATURED_TRACK' :
            return{
                ...state , featuredTrack : action.payload
            }

        case 'SHOW_NEW_RELEASE' :
            return{
                ...state , newRelease : action.payload
            }

        default:
            return state
    }
}

export default FeaturedReducer;