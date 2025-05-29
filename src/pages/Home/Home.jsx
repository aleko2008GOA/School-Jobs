import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import './Home.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogs, statistic } from '../../courses.js';
import Questions from '../../components/Questions/Questions.jsx';

function Home(){
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
    }, []);

    return (
        <div id="homepage">
            <div className='about-program'>
                <h1>სამომავლო პროფესიების და კარიერული შესაძლებლობების გაცნობა</h1>
                <p>პროგრამის შესახებ...</p><hr />
                <h2>პოპულარული ბლოგები</h2>
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
            <div className="goals">
                <h1>სამომავლო მიზნები</h1>
                <p>ჩვენი მიზნები...</p>
            </div>
            <div className='questions'>
                <Questions />
                <Link to="/test"><button>ჩემი პროფესიის არჩევა</button></Link>
            </div>
        </div>
    )
}

export default Home;