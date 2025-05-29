import { useEffect, useState } from "react";
import { blogs } from "../../../courses.js";
import './Journalism.css';
import Questions from "../../../components/Questions/Questions.jsx";
import { Link } from "react-router-dom";

function Journalism(){
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        setBlog(blogs.find(blog => blog.title === "Journalism"));
    }, []);

    return (
        <div id="profession-Journalism">
            {blog ? (
            <div>
                <div className="video">
                    <iframe 
                        style={{ aspectRatio: blog.video.ratio }}
                        src={blog.video.src} 
                        title={blog.video.title} 
                        allow={blog.video.allow} 
                        referrerPolicy={blog.video.referrerPolicy}
                        allowFullScreen
                    ></iframe>
                    <div>
                        <div>
                            <span>{blog.author}</span>
                            <span>Rate: {blog.rate}</span>
                        </div>
                        <Link to="/professions"><button>Back</button></Link>
                    </div>
                </div>
                <div className="about">
                    <div>
                        <h1>{blog.profession}</h1>
                        <p>{blog.description}</p>
                    </div>
                    <Questions />
                </div>
            </div>
            ) : null}
        </div>
    )
}

export default Journalism;