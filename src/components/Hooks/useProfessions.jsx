import { useContext } from 'react';
import { ProfessionContext } from '../Context/ProfessionsContext.jsx';

function useProfessions() {
    return useContext(ProfessionContext);
}

export default useProfessions;