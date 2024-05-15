import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div>
            <Audio 
               height="80" 
               width="80" 
               color="green" 
               ariaLabel="three-dots-loading" 
               wrapperStyle={{}} 
               wrapperClass="" />
        </div>
    );
}

export default Loader;