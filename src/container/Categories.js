import React from 'react' ;
import {connect} from 'react-redux' ;
import {GetPlayListAccordingToCategory} from '../action/ActionFile' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import DisplayPlaylist from '../components/CategorySection/DisplayPlaylist' ;
import Loaders from '../components/Loaders';
import Header from '../components/Header/Header' ;

class Categories extends React.Component{

    componentDidMount = () => {
        this.props.dispatch(GetPlayListAccordingToCategory(this.props.match.params.id))
    }

    render() {
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
                        <div className="col-md-10" style={{marginBottom: '90px'}}> 
                            {
                                this.props.playlistOfCategories ?
                                <DisplayPlaylist playlistData = {this.props.playlistOfCategories} />
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
        playlistOfCategories : state.PlaylistReducer.playlistOfCategories
    }
}

export default connect(mapStateToProps)(Categories) ;