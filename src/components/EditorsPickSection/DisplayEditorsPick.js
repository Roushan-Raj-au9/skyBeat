import React from 'react' ;
import {Link} from 'react-router-dom' ;
import './DisplayEditorsPick.css' ;

const DisplayEditorsPick = (props) => {

    const renderEditorsPick = (data) => {
        try{
            if(data)
            {
                return data.playlists.items.map( (item) => {
                    return (
                        <div className="editors" key={item.id} >
                            <Link to={`/editors/${item.id}`} >
                                <img src={item.images[0].url} className="editors-image" alt="editorsImage" />
                                <div className="editors-name">{ item.name }</div>
                            </Link>
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

    return(
        <>
        <div>
            <h3 className="editors-heading" >Editor's Picks</h3>
            <div className="editors-container" >
                {renderEditorsPick(props.editorsData)}
            </div>
        </div>
        </>
    )
}

export default DisplayEditorsPick;