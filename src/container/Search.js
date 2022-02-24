import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {connect} from 'react-redux' ;
import {GetSearchResult} from '../action/ActionFile' ;
import DisplayPlaylist from '../components/CategorySection/DisplayPlaylist' ;
import Loaders from '../components/Loaders';
import Header from '../components/Header/Header' ;
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
            userInput : ""
        }
    }

    handleInput = (event) => {
        this.setState({
            userInput : event.target.value
        })
    }

    handleSearch = () => {
        if(this.state.userInput)
        {
            this.props.dispatch(GetSearchResult(this.state.userInput))
        }
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
                            <TextField  value={this.state.userInput} onChange={this.handleInput} style={{width:'300px', margin:'20px'}} label="Search..." />
                            <SearchIcon color="primary" fontSize="large" onClick={this.handleSearch} style={{ marginTop:'30px' , cursor:'pointer'}} />
                            {
                                this.props.searchedItem ?

                                <DisplayPlaylist playlistData={this.props.searchedItem} />

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
        searchedItem : state.SearchReducer.searchedItem
    }
}

export default connect(mapStateToProps)(Search);