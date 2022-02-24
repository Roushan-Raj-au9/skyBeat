import {BrowserRouter , Route} from 'react-router-dom' 

import Home from '../container/Home';
import MusicHome from '../container/MusicHome' ;
import Categories from '../container/Categories' ;
import CategoryPlaylist from '../container/CategoryPlaylist' ;
import EditorsPick from '../container/EditorsPick' ;
import Search from '../container/Search' ;
import Featured from '../container/Featured' ;
import UserPlaylistTracks from '../container/UserPlaylistTracks' ;
import CreatePlaylist from '../container/CreatePlaylist' ;
import Library from '../container/Library' ;
import RecentPlayed from '../container/RecentlyPlayed' ;
import MusicFooter from '../components/Footer/MusicFooter' ;

const Routing = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/musichome'  component={MusicHome} />
            <Route path='/category/:id' exact component={Categories} />
            <Route path='/categoryplaylist/:id' exact component={CategoryPlaylist} />
            <Route path='/editors/:id'  component={EditorsPick} />
            <Route path='/featured'  component={Featured} />
            <Route path='/search'  component={Search} />
            <Route path='/showuserplaylist/:id'  component={UserPlaylistTracks} />
            <Route path='/createplaylist' component={CreatePlaylist} />
            <Route path='/library' component={Library} />
            <Route path='/recentlyplayed' component={RecentPlayed} />
            <MusicFooter />
        </BrowserRouter>
    )

} 

export default Routing ;
