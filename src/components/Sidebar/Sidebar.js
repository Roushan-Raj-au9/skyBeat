import React from 'react' ;
import './Sidebar.css' ;
import {Link} from 'react-router-dom' ;
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {LoginAct} from '../../action/ActionFile' ;
import {connect} from 'react-redux' ;

class Sidebar extends React.Component{

    componentDidMount = () => {
        this.props.dispatch(LoginAct())
    }

    renderPlaylistNames = (data) => {
        try{
            if(data)
            {
                return data.items.map( (item) => {
                    return(
                        <div key={item.name} className="userPlaylist" >
                            <p style={{margin:'0 10px'}}><Link to={`/showuserplaylist/${item.id}`} > {item.name} </Link></p>
                        </div>
                    )
                } )
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    renderProfile = (data) => {
        try{
            if(data)
            {
                return (
                    <div className="profile" >
                        <h6>{data.display_name}</h6>
                        <p style={{margin:'0'}} >followers : {data.followers.total}</p>
                        <p>country : {data.country}</p>
                    </div>
                )
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }


    render(){
        return(
            <div className='sideBar' >
                <div className='sidebarOptions' >
                    
                        <div>
                            <center>
                                <div><AccountCircleIcon color="primary" style={{ fontSize: 60 }}/></div>
                                { this.renderProfile(this.props.userInformation) }
                            </center>
                            <hr />
                       
                    </div>
                    <div className="option" >
                        <div><HomeIcon   className='sideBarIcons' /></div>
                        <div>
                            <h6><Link to='/musichome' >Home</Link></h6>
                        </div> 
                    </div>
                    <div className="option" >
                        <div><SearchIcon  className='sideBarIcons'  /></div>
                        <div>
                            <h6><Link to='/search' > Search</Link></h6>
                        </div>
                    </div>

                    <div className="option" >
                        <div><QueueMusicIcon className='sideBarIcons'  /></div>
                        <div>
                            <h6><Link to='/recentlyplayed' >Recently Played</Link></h6>
                        </div>  
                    </div>

                    <div className="option" >
                        <div><PlaylistAddIcon  className='sideBarIcons'  /></div>
                        <div>
                            <h6><Link to='/createplaylist' >Create Playlist</Link></h6>
                        </div>  
                    </div>

                    <div className="option" >
                        <div><LibraryMusicIcon   className='sideBarIcons'  /></div>
                        <div>
                            <h6><Link to='/library' >Your Library</Link></h6>
                        </div>  
                    </div>


                    {
                        this.props.createdPlaylistData ? 
                            <div>
                                <h6 style={{margin : '0 50px', marginTop: '5px', marginBottom: '0px'}}>Your Playlists :</h6>
                                <hr style={{marginTop:'2px'}} />
                                <div className="userPlaylistDiv"  >
                                    {this.renderPlaylistNames(this.props.createdPlaylistData)}
                                </div>
                            </div> 
                        : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userInformation : state.LoginReducer.userInfo,
    }
}

export default connect(mapStateToProps)(Sidebar);
