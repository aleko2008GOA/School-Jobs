import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo/476905062_1144419557228910_1001797474761144907_n.jpg';

function Header(){
    return (
        <div className='header-styles'>
            <Link to='/'>
                <img src={logo} />
            </Link>
            <nav>
                <Link to='/'>Programs</Link>
                <Link to='/contact-us'>Contact us</Link>
            </nav>
        </div>
    );
}

export default Header;