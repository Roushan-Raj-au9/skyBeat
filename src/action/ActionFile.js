export const LoginAct = () => {
    const aToken = sessionStorage.getItem('logintoken')

    const output = fetch("https://api.spotify.com/v1/me" , { 
        method : 'GET',
        headers : {
            "Accept": "application/json",
            // "Content-Type": "application/json",
            "Content-Type": 'application/x-www-form-urlencoded',
            "Authorization": `Bearer ${aToken}` 

        }
    })
    .then( (response) => response.json() )

    return{
        type : 'LOGIN_ACTION',
        payload : output
    }
}


export const GetCategory = () => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch("https://api.spotify.com/v1/browse/categories?country=IN&limit=48" , {
        method : 'GET' ,
        headers : {
            "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type : 'SHOW_CATEGORIES',
        payload : output
    }
}


export const GetPlayListAccordingToCategory = (val) => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch(`https://api.spotify.com/v1/browse/categories/${val}/playlists?country=IN&limit=30` , {
        method : 'GET' ,
        headers : {
            "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type : 'SHOW_PLAYLIST_WRT_CATEGORY',
        payload : output
    }
}


export const GetPlaylistTracks = (selectedPlaylistID) => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch(`https://api.spotify.com/v1/playlists/${selectedPlaylistID}/tracks?limit=30` , {
        method : 'GET' ,
        headers : {
            "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type : 'SHOW_PLAYLIST_TRACKS',
        payload : output
    }
}

export const GetEditorsPick = () => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch("https://api.spotify.com/v1/browse/featured-playlists?country=IN" , {
         method : 'GET' ,
        headers : {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type: 'EDITORS_PICK' ,
        payload : output
    }
}

export const GetSearchResult = (searchTerm) => {
    const aToken = sessionStorage.getItem('logintoken')
    const val = searchTerm ? searchTerm : "justin"
    const output = fetch(`https://api.spotify.com/v1/search?query=${encodeURIComponent(val)}&type=album,playlist,artist` , {
         method : 'GET' ,
        headers : {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type: 'SEARCH' ,
        payload : output
    }
}

export const GetNewRelease = () => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch("https://api.spotify.com/v1/browse/new-releases?country=IN&limit=5" , {
         method : 'GET' ,
        headers : {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type: 'SHOW_NEW_RELEASE' ,
        payload : output
    }
}


export const GetFeatured = () => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch("https://api.spotify.com/v1/browse/new-releases?country=IN&limit=50" , {
         method : 'GET' ,
        headers : {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type: 'SHOW_FEATURED' ,
        payload : output
    }
}

export const GetFeaturedTracks = (selectedAlbumsID) => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch(`https://api.spotify.com/v1/albums/${selectedAlbumsID}/tracks?limit=30` , {
        method : 'GET' ,
        headers : {
            "Authorization": `Bearer ${aToken}` 
        }

        })
    .then( (response) => response.json() )

    return{
        type : 'SHOW_FEATURED_TRACK',
        payload : output
    }
}


export const GetUserCreatedPlaylist = () => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch("https://api.spotify.com/v1/me/playlists", {
        method : 'GET',
        headers :{
            "Accept":"apllication/json",
            "Content-Type":"application/json",
            "Authorization": `Bearer ${aToken}`
        }
    }).then((response)=> response.json())

    return{
        type : 'USER_CREATED_PLAYLIST',
        payload : output
    }
}

export const createPlaylist = (userId) => {
    const aToken = sessionStorage.getItem('logintoken')
    const userInput = JSON.parse(sessionStorage.getItem('details'))

    const playlistDetails = {
        name : userInput.playlistName,
        description : userInput.description,
        public : userInput.public
    }

    const output  = fetch(`https://api.spotify.com/v1/users/${userId}/playlists` , {
         method : "POST" , 
         headers : {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${aToken}`
         },
         body : JSON.stringify(playlistDetails)
        })
    .then( (response) => response.json() )

    return{
        type : "CREATE_PLAYLISTS" , 
        payload : output
    }

}


export const AddItemsToPlaylist = (playlistId) => {
    const aToken = sessionStorage.getItem('logintoken')

    const playlistDetails = [
        "spotify:track:2iUXsYOEPhVqEBwsqP70rE"
      ]

    const output  = fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks` , {
         method : "POST" , 
         headers : {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${aToken}`
         },
         body : JSON.stringify(playlistDetails)
        })
    .then( (response) => response.json() )

    return{
        type : "ADD_ITEMS_TO_PLAYLIST" , 
        payload : output
    }

}

export const RecentlyPlayed = () => {
    const aToken = sessionStorage.getItem('logintoken')
    const output = fetch("https://api.spotify.com/v1/me/player/recently-played?limit=10", {
        method : 'GET',
        headers :{
            "Accept":"apllication/json",
            "Content-Type":"application/json",
            "Authorization": `Bearer ${aToken}`
        }
    })
    .then( (response) => response.json() )

    return{
        type : 'RECENTLY_PLAYED',
        payload : output
    }

}

export const GetTrackId = (id) => {
    return{
        type : 'SET_TRACK_ID' ,
        payload : id
    }
}
