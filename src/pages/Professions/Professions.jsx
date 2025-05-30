import { Link, Outlet } from 'react-router-dom';
import './Professions.css';
import { blogs } from '../../courses.js';
import { useState } from 'react';

function Professions(){
    const [filter, setFilter] = useState('HtoL');

    return (
        <div id="professions">
            <div>
                <select className='filter' onChange={(e) => setFilter(e.target.value)}>
                    <option value="HtoL">რეიტინგი (მაღლიდან დაბლისაკენ)</option>
                    <option value="LtoH">რეიტინგი (დაბლიდან მაღლისაკენ)</option>
                    <option value="AtoZ">სიის მიხედვით</option>
                </select>
            </div>
            <div className='blogs'>
                {blogs && blogs.length > 0 ? blogs.sort((blog1, blog2) => filter === "HtoL" ? blog2.rate - blog1.rate : filter === "HtoL" ? blog1.rate - blog2.rate : blog1.title.localeCompare(blog2.title)).map((blog, index) => (
                    <div key={index}>
                        <div className='imgs' style={{ aspectRatio: blog.img.ratio }}><img src={blog.img.src} alt={blog.img.src} /></div>
                        <div>
                            <h1>{blog.profession}</h1>
                            <div>
                                <p>{blog.description}</p>
                                <div>
                                    <span>Rate: {blog.rate}</span>
                                    <Link to={`/professions/${blog.title.toLowerCase()}`}><button>იხილეთ სრულად</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    );
}

export default Professions;