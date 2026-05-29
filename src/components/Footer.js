import {APPLOGO} from '../utils/constants';

const Footer = () => {
    return (
        <div className='footer'>
            <img className='logoFooter' src={APPLOGO} alt='logo' />
            <h3>Potafo © 2026 Potafo Limited</h3>
        </div>
    );
};

export default Footer;
