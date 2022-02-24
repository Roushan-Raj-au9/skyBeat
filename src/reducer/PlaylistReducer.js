const PlaylistReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'SHOW_PLAYLIST_WRT_CATEGORY' :
            return{
                ...state, playlistOfCategories : action.payload
            }

        case 'SHOW_PLAYLIST_TRACKS' :
            return{
                ...state, playlistTracksWrtCategory : action.payload
            }

        default:
            return state
    }
}

export default PlaylistReducer;