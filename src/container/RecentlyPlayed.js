import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {RecentlyPlayed , GetTrackId} from '../action/ActionFile' ;
import {connect} from 'react-redux' ;
import DisplayRecently from '../components/RecentlySection/DisplayRecently' ;
import Loaders from '../components/Loaders' ;
import Header from '../components/Header/Header' ;

class RecentPlayed extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
            trackid : ''
        }
    }

    componentDidMount = () => {
        this.props.dispatch(RecentlyPlayed())
    }

    handleTrack = (id) => {
        this.setState({
            trackid : id
        })
    }

    callAction = () => {
        this.props.dispatch(GetTrackId(this.state.trackid))
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
                        
                            <DisplayRecently recentlyPlayedData={this.props.recentlyPlayed} handleId={ (id) => this.handleTrack(id) }  />
                            
                            {
                                this.state.trackid ? 
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
        recentlyPlayed : state.RecentlyPlayedReducer.recentlyPlayed
    }
}

export default connect(mapStateToProps)(RecentPlayed);