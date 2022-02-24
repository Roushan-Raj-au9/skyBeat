const UserPlaylistReducer = (state={}, action) => {
    switch(action.type)
    {
        case 'USER_CREATED_PLAYLIST':
            return{
                ...state, seeUserCreatedPlaylist : action.payload
            }

        case 'CREATE_PLAYLISTS' :
            return{
                ...state, afterCreatingPlaylistInfo : action.payload
            } 

        default :
            return state
    }

}

export default UserPlaylistReducer;
