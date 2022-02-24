import Spotify from '../config/spotify.json' ;
const authEndpoint = "https://accounts.spotify.com/authorize" ;
// const redirectUri = "https://skybeatmusic.netlify.app" ;
const redirectUri = "http://localhost:3000/" ;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-position",
    "user-read-private",
    "user-read-email",
    "user-library-read",
    "user-library-modify",
    "user-top-read",
    "ugc-image-upload",
    "user-follow-read",
    "user-follow-modify",
];

const accessUrl = `${authEndpoint}?client_id=${Spotify.clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true` ;

export default accessUrl ;