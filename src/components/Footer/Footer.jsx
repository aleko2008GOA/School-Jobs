import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo/476905062_1144419557228910_1001797474761144907_n.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <footer id='footer-styles'>
            <div>
                <img src={logo} />
                <p><Link><FontAwesomeIcon icon={faEnvelope} /> example@gmail.com</Link></p>
                <p><Link><FontAwesomeIcon icon={faPhone} /> 568-72-**-**</Link></p>
                <p><Link><FontAwesomeIcon icon={faLocationDot} /> Loc</Link></p>
            </div>
            <div>
                <h5>მთავარი</h5>
                <p><Link to='/#homepage-successful-students'>წარმატებული მოსწავლეები</Link></p>
                <p><Link to='/#homepage-popular-courses'>პოპულალური კურსები</Link></p>
                <p><Link to='/#homepage-asked-questions'>ხშირად დასმული შეკითხვები</Link></p>
            </div>
            <div>
                <h5>ჩვენს შესახებ</h5>
                <p><Link to='/about-us'>ვინ ვართ ჩვენ?</Link></p>
                <p><Link>მიღწევები</Link></p>
                <p><Link>მიზნები</Link></p>
            </div>
            <div>
                <h5>სოციალური ქსელები</h5>
                <div>
                    <nav><Link><FontAwesomeIcon icon={faFacebookF} /></Link></nav>
                    <nav><Link><FontAwesomeIcon icon={faTwitter} /></Link></nav>
                    <nav><Link><FontAwesomeIcon icon={faInstagram} /></Link></nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;