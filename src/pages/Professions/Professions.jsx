import { Link } from 'react-router-dom';
import './Professions.css';
import { blogs } from '../../courses.js';
import { useState, useMemo } from 'react';
import useProfessions from '../../components/Hooks/useProfessions.jsx';

function Professions(){
    const [filter, setFilter] = useState('BmyR');
    const { favProfessions } = useProfessions();

    const sortedBlogs = useMemo(() => {
        return blogs
            .slice()
            .sort((b1, b2) => {
                if (filter === "BmyR") return favProfessions ? favProfessions[b2.title.replace(/-/g, "")] - favProfessions[b1.title.replace(/-/g, "")] : b2.rate - b1.rate;
                else if(filter === "HtoL") return b2.rate - b1.rate;
                else if (filter === "LtoH") return b1.rate - b2.rate;
                else return b1.profession.localeCompare(b2.profession, 'ka');
            });
    }, [filter, favProfessions]);

    return (
        <div id="professions">
            <div>
                <select className='filter' onChange={(e) => setFilter(e.target.value)}>
                    <option value="BmyR">ტეტსის შედეგების მიხედვით</option>
                    <option value="HtoL">რეიტინგი (მაღლიდან დაბლისაკენ)</option>
                    <option value="LtoH">რეიტინგი (დაბლიდან მაღლისაკენ)</option>
                    <option value="AtoZ">სიის მიხედვით</option>
                </select>
            </div>
            <div className='blogs'>
                {sortedBlogs ? sortedBlogs.map((blog, index) => (
                    <div key={index}>
                        <div>
                            <div className='imgs' style={{ aspectRatio: blog.img.ratio }}><img src={blog.img.src} alt={blog.img.alt} /></div>
                            <div>
                                <h1>{blog.profession}</h1>
                                <p dangerouslySetInnerHTML={{__html: blog.description}}></p>
                            </div>
                        </div>
                        <div>
                            <span style={{padding: "5px 10px", border: "1px solid", borderRadius: "2px"}}>შეფასება: {blog.rate}</span>
                            <Link to={`/professions/${blog.title.toLowerCase()}`}><button>იხილეთ სრულად</button></Link>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    );
}

export default Professions;