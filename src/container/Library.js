import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {GetUserCreatedPlaylist} from '../action/ActionFile' ;
import {connect} from 'react-redux' ;
import {Link} from 'react-router-dom' ;
import './Library.css';
import Loaders from '../components/Loaders';
import Header from '../components/Header/Header' ;

class Library extends React.Component{

    componentDidMount=()=>{
        this.props.dispatch(GetUserCreatedPlaylist())
    }

    renderLibrary = (data) => {
        try{
            if(data){
                return data.items.map((item)=>{
                    return (
                        <div className="category" key={item.id} id="display">
                            <Link to={`/categoryplaylist/${item.id}`} >
                                <h5>{item.name}</h5>
                                {
                                    item.images[0] ?
                                    <img src={item.images[0].url} className="category-image" alt="categoryImage" /> 
                                    :
                                    <img src="https://multifiles.pressherald.com/uploads/sites/10/2020/03/Music-Between-Us.jpg?rel=related" className="category-image" alt="categoryImage" /> 

                                }
                                <div>{item.description}</div>
                            </Link>
                        </div>
                    )
                })
            }
        }
        catch(err)
        {
            console.log(err)
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
                            <h3 className="category-heading" >Your Library</h3>
                            <div className="renderPlaylist">
                                {
                                    this.props.seeUserCreatedPlaylist ?

                                    this.renderLibrary(this.props.seeUserCreatedPlaylist)
                                    : <Loaders />
                                }
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
        seeUserCreatedPlaylist : state.UserPlaylistReducer.seeUserCreatedPlaylist
    }
}

export default connect(mapStateToProps)(Library) ;