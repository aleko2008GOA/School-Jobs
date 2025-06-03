import './Questions.css'

function Questions(){
    async function handleSubmit(event){
        event.preventDefault();
        const question = event.target.elements.question.value;
        event.target.reset();

        try {
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: question
            });
            
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Status ${res.status}: ${text}`);
            } else console.log("success");
        } catch (err) {
            console.error('Error while sending responce: ', err);
            alert('Can not send an email, please, contact us manualy');
        }
    }

    return (
        <form onSubmit={handleSubmit} id="questions">
            <label htmlFor='question-homepage'>შენი შეკითხვა:</label>
            <input 
                type='text' 
                name='question' 
                id='question-homepage' 
                placeholder={["როგორ მივიღო მონაწიელობა გამოკითხვაში?", "სერვერზე შეცდომაა", "საიტი არ იმახსოვრებს ჩემს ქმედებებს", "არც ერთი პროფესია არ მომწონს", "სად არის ვიდეოები განთავსებული?", "რატომ არ იხსნება ვიდეო?"][Math.floor(Math.random() * 6)]} 
                required
            />
            <button type='submit'>Send</button>
        </form>
    )
}

export default Questions;