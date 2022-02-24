import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {LoginAct,createPlaylist} from '../action/ActionFile' ;
import {connect} from 'react-redux';
import Header from '../components/Header/Header' ;

import TextField from '@material-ui/core/TextField';
import './CreatePlaylist.css'

class CreatePlaylist  extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
            playlistName : '',
            description : '',
            public : true
        }
    }

    componentDidMount = () => {
        this.props.dispatch(LoginAct())
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleButtonClick = () => {
        sessionStorage.setItem('details', JSON.stringify(this.state))
        this.setState({
            playlistName : '',
            description : '',
            public : true
        })

        this.props.dispatch(createPlaylist(this.props.userInformation.id))

        alert("Playlist Created")
        this.props.history.push('/library')
       
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

                            <div className='createWrapper' >
                                <form className="classes.root" noValidate autoComplete="off">
                                    <TextField 
                                    name="playlistName" 
                                    value = {this.state.playlistName} 
                                    onChange={this.handleChange}  
                                    label="Playist Name" />
                                </form>

                                <form style={{marginTop:"20px"}} className="classes.root" noValidate autoComplete="off">
                                    <TextField 
                                    name = "description" 
                                    value = {this.state.description} 
                                    onChange={this.handleChange} 
                                    label="Description" />
                                </form>

                                <div className='radioWrapper' >
                                    <div style={{marginRight:"20px"}} className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio"
                                            value = "true"
                                            onChange = {this.handleChange}
                                            className="form-check-input" 
                                            name="public" />Public
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio"
                                            value = "false"
                                            onChange = {this.handleChange}
                                            className="form-check-input" 
                                            name="public" />Private
                                        </label>
                                    </div>
                                </div>

                                <button onClick={this.handleButtonClick}  className="btn btn-outline-secondary">Create Playlist</button>
                            </div>
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
        afterCreatingPlaylistInfo : state.UserPlaylistReducer.afterCreatingPlaylistInfo
    }
}

export default connect(mapStateToProps)(CreatePlaylist) ;