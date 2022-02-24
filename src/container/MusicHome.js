import React from 'react' ;
import {connect} from 'react-redux' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import DisplayCategory from '../components/CategorySection/DisplayCategory' ;
import DisplayEditorsPick from '../components/EditorsPickSection/DisplayEditorsPick' ;
import DisplayFeatured from '../components/FeaturedSection/DisplayFeatured';

import {GetCategory, GetEditorsPick, GetNewRelease, GetUserCreatedPlaylist, LoginAct} from '../action/ActionFile' ;
import Loaders from '../components/Loaders' ;
import Header from '../components/Header/Header' ;

class MusicHome extends React.Component{

    componentDidMount = () => {
        this.props.dispatch(GetCategory())
        this.props.dispatch(GetEditorsPick())
        this.props.dispatch(GetNewRelease())
        this.props.dispatch(GetUserCreatedPlaylist())
        this.props.dispatch(LoginAct())

    }

    render(){
        return(
            <>
            <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2" style={{paddingLeft :"0px" , paddingRight :"20px"}}> 
                            <div className="sideBarContainer" >
                                <Sidebar createdPlaylistData={this.props.seeUserCreatedPlaylist} />
                            </div>
                        </div>
                        <div className="col-sm-10" style={{marginBottom: '80px'}} >
                            {
                                this.props.editorsPick ? 
                                <DisplayEditorsPick editorsData={this.props.editorsPick} />
                                :
                                <Loaders  />
                            }
                            
                            {
                                this.props.categories ?
                                <DisplayCategory categoriesData={this.props.categories} />
                                :
                                <Loaders  />
                            }

                            {
                                this.props.newRelease ?
                                <DisplayFeatured featuredData={this.props.newRelease}  />
                                :
                                <Loaders  />
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
        userInformation : state.LoginReducer.userInfo,
        categories : state.CategoryReducer.categories,
        editorsPick : state.EditorsPickReducer.editorsPick,
        newRelease : state.FeaturedReducer.newRelease,
        seeUserCreatedPlaylist : state.UserPlaylistReducer.seeUserCreatedPlaylist,
    }
}

export default connect(mapStateToProps)(MusicHome);