import React from 'react' ;
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Loaders.css';

const Loaders = () => {
    return(
        <div className="spinner" >
             <Loader
                type="ThreeDots"
                color="#192f60"
                height={70}
                width={70}
                timeout={3000} 
            />
        </div>
    )
}

export default Loaders ;
