import './Test.css';
import { questions } from '../../courses.js';
import useProfessions from '../../components/Hooks/useProfessions.jsx';

function Test(){
    const { setFavProfessions } = useProfessions();

    const professions = {
        Business: 0,
        ComputerScience: 0,
        Culture: 0,
        Diplomacy: 0,
        ElectricalEngineering: 0,
        GraphicalDesign: 0,
        Journalism: 0,
        Lawyer: 0,
        Medical: 0,
        Philology: 0,
        Science: 0
    };

    function chooseProfession(e){
        e.preventDefault();
        const formData = [...new FormData(e.target).values()]
        const professionsCopy = Object.assign({}, professions);
        
        formData.forEach((value, index) => {
            const object = Object.entries(questions[index].answers.find(obj => obj.answer === value).scores);
            for(let [key1, value1] of object){
                professionsCopy[key1] += value1;
            }
        });
        setFavProfessions(professionsCopy);
        localStorage.setItem('professions', JSON.stringify(professionsCopy));
    }

    return (
        <div id="test">
            <h1>შეარჩიე შენთვის სასურველი პროფესია!</h1>
            <form onSubmit={chooseProfession}>
                {questions.map((question, index) => (
                    <fieldset key={index}>
                        <legend>{question.question}</legend>
                        {question.answers.map((answer, ansindex) => (
                            <span key={ansindex}>
                                <input type='radio' value={answer.answer} name={question.name} required />
                                <label>{answer.answer}</label>
                            </span>
                        ))}
                    </fieldset>
                ))}
                <div>
                    <input type='submit' value="პროფესიის შერჩევა" />
                    <input type="reset" value="გასუფთავება" />
                </div>
            </form>
        </div>
    );
}

export default Test;