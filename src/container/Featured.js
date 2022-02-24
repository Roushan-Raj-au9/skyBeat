import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {GetFeatured, GetFeaturedTracks, GetTrackId} from '../action/ActionFile' ;
import {connect} from 'react-redux' ;
import DisplayRelease from '../components/FeaturedSection/DisplayRelease' ;
import Loaders from '../components/Loaders' ;
import Header from '../components/Header/Header' ;

class Featured extends React.Component{

    componentDidMount = () => {
        this.props.dispatch(GetFeatured())
    }

    handleReleaseTrack = (id) => {
        this.props.dispatch(GetFeaturedTracks(id))
    }

    callAction = () => {
        this.props.dispatch(GetTrackId(this.props.featuredTrack.items[0].id))
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
                            <DisplayRelease releaseData={this.props.featuredItem}  handleId={ (id) => this.handleReleaseTrack(id) } />
                            
                            {
                                this.props.featuredTrack ? 
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
        featuredItem : state.FeaturedReducer.featuredItem,
        featuredTrack : state.FeaturedReducer.featuredTrack
    }
}

export default connect(mapStateToProps)(Featured) ;