import { Link, Outlet } from 'react-router-dom';
import './Professions.css';
import { blogs } from '../../courses';

function Professions(){
    return (
        <div id="professions">
            <Outlet />
            <div className='intro'>
                <h1>ვიდეოების და ჩვენი თანამშრომელი კურსების ასდ</h1>
                <p>ასდნასიდნსაჯკდჯაკნსდნასნდკანსჯდნასნკდკნასდნკანს საკნჯდ კადკჯ ასჯდნაჯსკ დნასდასკ დასდსდ ნასჯკ დადნ .  ნჯსანკ დდნადნსჯდ სნჯ .  ჯნდსნსნნსდნ სნდჯნსდნსნჯდნჯ . სჯდნდნჯსჯდჯს ს .  სჯდჯსნდნსნდჯსდჯ ს დ სდ</p>
            </div>
        </div>
    );
}

export default Professions;