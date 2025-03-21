import './Test.css';

function Test(){
    return (
        <form>
            <label>Favorite food</label><br />
            <input type='checkbox' name='food' /><label>Khinkhali</label><br />
            <input type='checkbox' name='food' /><label>Khinkhali</label><br />
            <input type='checkbox' name='food' /><label>Khinkhali</label><br />
            <label>Something else</label>
            <input /><br />
            <input type='submit' />
        </form>
    );
}

export default Test;