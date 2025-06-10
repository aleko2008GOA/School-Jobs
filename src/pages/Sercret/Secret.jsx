import { useState } from 'react';
import './Secret.css';

function Secret(){
    const [open, setOpen] = useState(false);

    return (
        <div id="secret" onClick={() => setOpen(!open)} className={open ? 'open' : ''}>
            <div className="left-half"></div>
            <div className='text'>
                <h3>Dear Zabora</h3>
                <p>
                    They say love is a serious matter—but I must confess, I've taken a rather unserious approach to falling for you. Somewhere between your laugh and your mysterious ability to always look effortlessly cool, I tripped, stumbled, and fell... probably flat on my face. But I fell for you nonetheless.<br />
                    I tried to act normal. Really, I did. But every time you say my name, my brain reboots like a Windows 98 machine. And every time you smile? Let's just say my heart skips more beats than a dubstep remix.<br />
                    You, Zabora, are like the final puzzle piece in a 10,000-piece set—slightly confusing, probably stolen by a cat at some point, but undeniably perfect when in place.<br />
                    If loving you is a bug in my system, then I don't want a patch. Let my CPU overheat in peace.<br />
                    Forever (or until my wi-fi drops)
                </p>
            </div>
            <div className="right-half"></div>
        </div>
    );
}

export default Secret;