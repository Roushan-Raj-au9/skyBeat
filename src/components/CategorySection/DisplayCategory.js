import React from 'react' ;
import {Link} from 'react-router-dom' ;
import './DisplayCategory.css'

const DisplayCategory = (props) => {

    const renderCategory = (data) => {
        try{
            if(data)
            {
                return data.categories.items.map( (item) => {
                    return (
                        <div className="category" key={item.id} >
                            <Link to={`/category/${item.id}`} >
                                <img src={item.icons[0].url} className="category-image" alt="categoryImage" />
                                <div className="category-name">{ item.name }</div>
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
            <h3 className="category-heading" >Categories</h3>
            <div className="category-container" >
                {renderCategory(props.categoriesData)}
            </div>
        </div>
        </>
    )
}

export default DisplayCategory;