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
                <p>შესავალი...</p>
            </div>
            <h2 className='pop-blogs' id="homepage-popblogs">პოპულარული ბლოგები</h2>
            <div className="general-intoduction">
                {popularBlogs && popularBlogs.length > 0 ? 
                    <div className="blogs">
                        <div>
                            <div>
                                <div className='imgs' style={{ aspectRatio: popularBlogs[0].img.ratio }}><img src={popularBlogs[0].img.src} alt={popularBlogs[0].img.alt} /></div>
                                <div>
                                    <h1>{popularBlogs[0].profession}</h1>
                                    <p dangerouslySetInnerHTML={{__html: popularBlogs[0].description}}></p>
                                </div>
                            </div>
                            <div>
                                <span style={{padding: "5px 10px", border: "1px solid", borderRadius: "2px"}}>შეფასება: {popularBlogs[0].rate}</span>
                                <Link to={`/professions/${popularBlogs[0].title.toLowerCase()}`}><button>იხილეთ სრულად</button></Link>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='imgs' style={{ aspectRatio: popularBlogs[1].img.ratio }}><img src={popularBlogs[1].img.src} alt={popularBlogs[1].img.alt} /></div>
                                <div>
                                    <h1>{popularBlogs[1].profession}</h1>
                                    <p dangerouslySetInnerHTML={{__html: popularBlogs[1].description}}></p>
                                </div>
                            </div>
                            <div>
                                <span style={{padding: "5px 10px", border: "1px solid", borderRadius: "2px"}}>შეფასება: {popularBlogs[1].rate}</span>
                                <Link to={`/professions/${popularBlogs[1].title.toLowerCase()}`}><button>იხილეთ სრულად</button></Link>
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
                            <p>
                                საიტი შეიქმნა იმისთვის, რომ ახალგაზრდებს და პროფესიის არჩევის პროცესში მყოფ 
                                ადამიანებს დაეხმაროს უკეთ გაიცნონ სხვადასხვა სფერო და პროფესია უშუალოდ ამ 
                                სფეროში მომუშავე ადამიანების გამოცდილების საშუალებით.
                            </p>
                            <p>ჩვენ ვაგროვებთ და ვაზიარებთ ვიდეოინტერვიუებს რეალურ პროფესიონალებთან, რომლებიც გულწრფელად გვიყვებიან:</p>
                            <ul>
                                <li>როგორ დაიწყეს კარიერა</li>
                                <li>რას აკეთებდნენ ყოველდღიურად</li>
                                <li>რა სირთულესა და წარმატებებს წააწყდნენ კარიერის განმავლობაში</li>
                            </ul>
                            <p>ჩვენი მიზანია, პროფესიული არჩევანი აღარ იყოს ბრმა რისკი — არამედ გააზრებული და ინფორმირებული გადაწყვეტილება.</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="goals" id="#homepage-goals">
                <h1>სამომავლო მიზნები</h1>
                <ul>
                    <li>მეტი პროფესიის დაფარვა სხვადასხვა სფეროდან</li>
                    <li>ინტერვიუების დამატება მეტი ადამიანისთვის გასაგებად</li>
                    <li>მოკლე გზამკვლევების შექმნა თითოეულ პროფესიაზე</li>
                    <li>ძიების გაუმჯობესება ინტერესების მიხედვით</li>
                    <li>პლატფორმის გაზრდა, სადაც ახალგაზრდები და პროფესიონალები დაუკავშირდებიან ერთმანეთს</li>
                </ul>
                <p>ჩვენი მიზანია, ყველას მივაწვდოთ მარტივად გასაგები და სასარგებლო ინფორმაცია, რათა პროფესიის არჩევა შეგნებული და თვითდაჯერებული გადაწყვეტილება გახდეს.</p>
            </div>
            <div className='questions' id="homepage-question">
                <Questions />
                <div>
                    <Link to="/test"><button>ჩემი პროფესიის არჩევა</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;