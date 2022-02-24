import React from 'react' ;
import './MusicFooter.css' ;
import {connect} from 'react-redux' ;
import Loaders from '../Loaders';


class MusicFooter extends React.Component{

    renderFooterPlayer = (ID) =>{
        try{
            if(ID)
            {
                return(
                    <div style={{backgroundColor:'black'}}>
                        <iframe src={ `https://open.spotify.com/embed/track/${ID}`} width="1360" height="70" style={{margin:'0px'}} frameBorder="0" allowtransparency="true" allow="encrypted-media" title="description"></iframe> 
                    </div>
                )
            }
            else 
            {
                return null
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }


    render(){
        return(
            <div className='musicfooter'>
                {
                    this.props.playerTrackId ?
                     this.renderFooterPlayer(this.props.playerTrackId)
                     : <Loaders />
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        playerTrackId : state.PlayerReducer.playerTrackId,
    }
}

export default connect(mapStateToProps)(MusicFooter);

