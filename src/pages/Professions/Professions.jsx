import { Link, Outlet } from 'react-router-dom';
import './Professions.css';
import { pageCurses } from '../../courses';

function Professions(){
    return (
        <div id="professions">
            <Outlet />
            <div className='intro'>
                <h1>ვიდეოების და ჩვენი თანამშრომელი კურსების ასდ</h1>
                <p>ასდნასიდნსაჯკდჯაკნსდნასნდკანსჯდნასნკდკნასდნკანს საკნჯდ კადკჯ ასჯდნაჯსკ დნასდასკ დასდსდ ნასჯკ დადნ .  ნჯსანკ დდნადნსჯდ სნჯ .  ჯნდსნსნნსდნ სნდჯნსდნსნჯდნჯ . სჯდნდნჯსჯდჯს ს .  სჯდჯსნდნსნდჯსდჯ ს დ სდ</p>
            </div>
            <div className='courses'>
                {pageCurses.map((val, index) =>(
                    <div key={index} className='course'>
                        <div className='description'>
                            <div>
                                <h4>{val.name}</h4>
                                <p>{val.description}</p>
                            </div>
                            <button>ნახე კურსი</button>
                        </div>
                        <div className='imgs'>
                            {val.src.map((ing, k) => <img key={k} src={ing} />)}
                        </div>
                        <div className='about'>
                            <span>
                                <label>{val.week} კვირა</label>
                                <label>{val.difficulity}</label>
                            </span>
                            <span>{val.author}</span>
                        </div>
                        <div className='syllabus'>
                            <h5>სილაბუსი</h5>
                            <div>
                                {val.sillabus.map((day, k) => (
                                    <div>
                                        <h1>0{k + 1}</h1>
                                        <p>{day}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Professions;