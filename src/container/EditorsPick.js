import React from 'react' ;
import {connect} from 'react-redux' ;
import {GetPlaylistTracks, GetTrackId} from '../action/ActionFile' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import Loaders from '../components/Loaders' ;
import Header from '../components/Header/Header' ;

class EditorsPick extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
            tracksInfo : ''
        }
    }

    componentDidMount = () => {
        this.props.dispatch(GetPlaylistTracks(this.props.match.params.id))

    }

    renderPlaylistTracks = (data) => {
        try{
            if(data)
            {
                return data.items.map( (item) => {
                    return (
                        <div className="category" key={item.track.id} onClick={this.handleChange}>
                            <div >
                                <img src={item.track.album.images[1].url} id={item.track.id}  className="category-image" alt="categoryImage" />
                                <div className="category-name">{ item.track.name }</div>
                            </div>
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

    handleChange = (event) => {
        const tInfo = this.props.playlistTracksWrtCategory.items.filter( (item) => {
            return(
                item.track.id === event.target.id
            )
        })

        this.setState({
            tracksInfo : tInfo[0].track
        })
    }

    callAction = () => {
        this.props.dispatch(GetTrackId(this.state.tracksInfo.id))
    }

    render(){
        return(
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2" style={{padding:"0px"}}> 
                            <div className="sideBarContainer" >
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h3 className="category-heading" >Playlist Tracks</h3>
                            <div className="category-container" >
                                {this.renderPlaylistTracks(this.props.playlistTracksWrtCategory)}
                            </div>

                            {
                                this.state.tracksInfo ? 
                                this.callAction()
                                : <Loaders />
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        playlistTracksWrtCategory : state.PlaylistReducer.playlistTracksWrtCategory
    }
} 

export default connect(mapStateToProps)(EditorsPick) ;