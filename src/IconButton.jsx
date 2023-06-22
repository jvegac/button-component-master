import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const IconButton = (name, children) => {
    return (
        <button className={name}>
            <FontAwesomeIcon icon={faCartPlus} />
             {children}
        </button>
    );

}

export default IconButton