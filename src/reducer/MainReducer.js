import {combineReducers} from 'redux' ;

import LoginReducer from './LoginReducer' ;
import CategoryReducer from './CategoryReducer' ;
import PlaylistReducer from './PlaylistReducer' ;
import EditorsPickReducer from './EditorsPickReducer' ;
import SearchReducer from './SearchReducer' ;
import FeaturedReducer from './FeaturedReducer' ;
import UserPlaylistReducer from './UserPlaylistReducer' ;
import RecentlyPlayedReducer from './RecentlyPlayedReducer' ;
import PlayerReducer from './PlayerReducer' ;

const MainReducer = combineReducers({
    LoginReducer,
    CategoryReducer,
    PlaylistReducer,
    EditorsPickReducer,
    SearchReducer,
    FeaturedReducer,
    UserPlaylistReducer,
    RecentlyPlayedReducer,
    PlayerReducer
})

export default MainReducer;