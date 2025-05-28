import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import './Home.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogs, statistic } from '../../courses';

function Home(){
    const [caruselIndex, setCaruselIndex] = useState(0);
    const [popularBlogs, setPopularBlogs] = useState(null);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.substring(1));
            if(el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    useEffect(() => {
        setPopularBlogs(Object.values(blogs).sort((a, b) => b.rate - a.rate).slice(0, 2));
    }, [])

    const caruselImages = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcOYN57DOwU0mvfwhTxAQndvPHeKOnM67dg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUvEV4qKn_lxckDDd01lspzo2a9djhy4ZqQ&s'
    ]

    function handleCarusel(dir){
        if(dir === 'left')
            setCaruselIndex(caruselIndex > 0 ? caruselIndex - 1 : caruselImages.length - 1);
        if(dir === 'right')
            setCaruselIndex(caruselIndex < caruselImages.length - 1 ? caruselIndex + 1 : 0);
    }

    async function handleSubmit(event){
        event.preventDefault();
        const question = event.target.elements.question.value;
        event.target.reset();

        try {
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: question
            });
            
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Status ${res.status}: ${text}`);
            } else console.log("success");
        } catch (err) {
            console.error('Error while sending responce: ', err);
            alert('Can not send an email, please, contact us manualy');
        }
    }

    return (
        <div id="homepage">
            <div className='carusel'>
                <div className='images'>
                    <img src = {caruselImages[caruselIndex]} />
                </div>
                <div className='controls'>
                    <div className='control-left' onClick={() => handleCarusel('left')}></div>
                    <div className='page' onClick={() => window.location.href = '/video'}></div>
                    <div className='control-right' onClick={() => handleCarusel('right')}></div>
                </div>
            </div>
            <div className="general-intoduction">
                {popularBlogs && popularBlogs.length > 0 ? 
                    <div className="blogs">
                        <div>
                            <div className='imgs' style={{ aspectRatio: popularBlogs[0].img.ratio }}><img src={popularBlogs[0].img.src} alt={popularBlogs[0].img.src} /></div>
                            <div>
                                <h1>{popularBlogs[0].profession}</h1>
                                <div>
                                    <p>{popularBlogs[0].description}</p>
                                    <div>
                                        <span>Rate: {popularBlogs[0].rate}</span>
                                        <button>იხილეთ სრულად</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='imgs' style={{ aspectRatio: popularBlogs[0].img.ratio }}><img src={popularBlogs[1].img.src} alt={popularBlogs[1].img.src} /></div>
                            <div>
                                <h1>{popularBlogs[1].profession}</h1>
                                <div>
                                    <p>{popularBlogs[1].description}</p>
                                    <div>
                                        <span>Rate: {popularBlogs[1].rate}</span>
                                        <button>იხილეთ სრულად</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                <div className="about">
                    <div className='statictic'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={statistic}>
                            <CartesianGrid strokeDasharray="10 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="vote" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                    <div className='about-blogs'>
                        <h1>რატომ შეიქმნა?</h1>
                        <p>
                            შეიქმნა რათა...
                        </p>
                    </div>
                </div>
            </div>
            <div style={{borderBottom: "1px solid darkgrey", borderTop: "1px solid darkgrey"}}>
                <h1>სამომავლო მიზნები</h1>
                <p>ჩვენი მიზნები...</p>
            </div>
            <div className='questions'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='question-homepage'>Your question:</label>
                    <input 
                        type='text' 
                        name='question' 
                        id='question-homepage' 
                        placeholder={["როგორ მივიღო მონაწიელობა გამოკითხვაში?", "სერვერზე შეცდომაა", "საიტი არ იმახსოვრებს ჩემს ქმედებებს", "არც ერთი პროფესია არ მომწონს", "სად არის ვიდეოები განთავსებული?", "რატომ არ იხსნება ვიდეო?"][Math.floor(Math.random() * 6)]} 
                        required
                    />
                    <input type='submit' value='Send' />
                </form>
                <button>ჩემი პროფესიის არჩევა</button>
            </div>
        </div>
    )
}

export default Home;