import React from 'react' ;
import './DisplayFeatured.css' ;
import {withRouter} from 'react-router-dom' ;

const DisplayFeatured = (props) => {

    const renderFeatured = (data) => {
        try{
            if(data)
            {
                return data.albums.items.map( (item) => {
                    return (            
                        <div className="featured" key={item.id} onClick={handleClick} >
                            <img src={item.images[0].url}  id={item.id} className="featured-image" alt="featuredImages" />
                            <div className="featured-name">{ item.name }</div>
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
        props.history.push('/featured')
    }

    return(
        <>
        <div>
            <h3 className="featured-heading" >New Release</h3>
            <div className="featured-container" >
                {renderFeatured(props.featuredData)}
            </div>
        </div>
        </>
    )
}

export default withRouter(DisplayFeatured);
