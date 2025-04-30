import { Link } from 'react-router-dom';
import './Video.css';

function Video(){
    return (
        <div id="video-page">
            <div>
                <div>
                    <video className='video' controls>
                        <source src='' type="video/mp4" />
                        <source src='' type="video/mkv" />
                        Your browser does not support the video tag.
                    </video>
                    <Link to='/info'><button>Learn More</button></Link>
                </div>
                <div>
                    Lorem imsulp Lorem imsulp Lorem imsulp Lorem imsulp
                    Lorem imsulp Lorem imsulp Lorem imsulp Lorem imsulp Lorem imsulp
                    Lorem imsulp Lorem imsulp Lorem imsulp Lorem imsulp 
                </div>
            </div>
        </div>
    )
}

export default Video;