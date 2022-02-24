import React from 'react' ;
import './DisplayFeatured.css' ;


const DisplayRelease = (props) => {

    const renderRelease = (data) => {
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
        props.handleId(event.target.id)
    }

    return(
        <>
        <div>
            <h3 className="featured-heading" >New Release</h3>
            <div className="featured-container" >
                {renderRelease(props.releaseData)}
            </div>
        </div>
        </>
    )
}


export default DisplayRelease;