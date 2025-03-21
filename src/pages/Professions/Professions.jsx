import { Link, Outlet } from 'react-router-dom';
import './Professions.css';

function Professions(){
    const categories = [
        { title: 'Medicine', path: 'doctor' },
        { title: 'Engineer', path: 'engineer' },
        { title: 'Programmer', path: 'programmer' }
    ];

    return (
        <>
            <nav className='home-nav'>
                {categories.map(obj => (
                    <section>
                        <h1>{obj.title}</h1>
                        <details>
                            <summary>What will I learn?</summary>
                            <p>
                                la la alalslas als alls alas jsadls fadldas hlsad klsadh slahl 
                                dssdha lsdh lashd lasdh lsahd lsadh lsadsdaljhdslsad  
                                dslald sl asdlhsda idlsaldasjlkasdjsad h sadl adsl dsahld 
                                aslhdas l daslhdsa lhsad hldsa l dsalhds a
                            </p>
                        </details>
                        <Link to={obj.path}>
                            <button>Hell yeah!</button>
                        </Link>
                    </section>
                ))}
            </nav>

            <Outlet />
        </>
    );
}

export default Professions;