import React from 'react';
import './DisplayRecently.css' ;

const DisplayRecently = (props) => {

    const renderRecentlyPlayed = (data) => {
        try{
            if(data)
            {
                return data.items.map( (item, idx) => {
                    return (
                        <div className="recently" key={idx} onClick={handleClick} >
                                <img src={item.track.album.images[0].url}  id={item.track.id} className="recently-image" alt="recentlyImages" />
                                <div className="recently-name">{ item.track.name }</div>
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

    const handleClick = (event) => {
        props.handleId(event.target.id)
    }

    return(
        <div>
            <h3 className="recently-heading" >Recently Played</h3>
            <div className="recently-container" >
                {renderRecentlyPlayed(props.recentlyPlayedData)}
            </div>
        </div>
    )
}

export default DisplayRecently;