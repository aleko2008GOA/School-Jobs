import './Contact.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/476905062_1144419557228910_1001797474761144907_n.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return (
        <div id="contact">
            <h1>Contact us:</h1>
            <div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <a href="mailto:wolfdolf12@gmail.com?subject=სამომავლო%20პროფესიების%20არჩევა,%20შეკითხვა">
                        <FontAwesomeIcon icon={faEnvelope} /> 
                        wolfdolf12@gmail.com
                    </a>
                </div>
                <div>
                    <a href="tel:+995598370041" target='_balnk'>
                        <FontAwesomeIcon icon={faPhone} /> 
                        598-37-00-41
                    </a>
                </div>
                <div>
                    <a href="https://www.google.com/maps/place/Tbilisi's+I.+Vekua+Public+School+%2342/@41.6936037,44.7932094,17z/data=!3m1!4b1!4m6!3m5!1s0x40440cec02a4e4ff:0xa40152bf67fa2b5c!8m2!3d41.6936037!4d44.7957897!16s%2Fg%2F11bzywn0y8?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <FontAwesomeIcon icon={faLocationDot} /> 
                        Vekua, 42th public school of Tbilisi
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;