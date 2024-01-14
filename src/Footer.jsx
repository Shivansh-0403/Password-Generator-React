import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="page-footer">
            <div>
                <FontAwesomeIcon icon={faLaptop} />&nbsp;&nbsp;Made by Shivansh Srivastava</div>
            <div>Thanks to Hitesh Choudhary Sir</div>
        </div>
    )
}

export default Footer