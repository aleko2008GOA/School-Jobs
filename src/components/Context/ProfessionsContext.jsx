import { createContext, useState } from 'react';

const ProfessionContext = createContext(null);

function ProfessionProvider({ children }) {
    const [favProfessions, setFavProfessions] = useState(JSON.parse(localStorage.getItem("professions")) || null
);

    return (
        <ProfessionContext.Provider value={{ favProfessions, setFavProfessions }}>
            {children}
        </ProfessionContext.Provider>
    );
}

export { ProfessionProvider, ProfessionContext };
