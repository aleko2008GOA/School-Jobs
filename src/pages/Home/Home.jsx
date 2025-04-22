import { Link } from 'react-router-dom';
import './Home.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home(){
    const [questionDrowp, setQuestionDrop] = useState([0, false]);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.substring(1));
            if(el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const students = [
        {
            name: 'ლიკა ასდა',
            text: `ვებდიზაინის კურსმა მომცა მტკიცე საფუძველი. 
                ინსტრუქტორები იყვნენ მცოდნეები და მხარდამჭერები. ძალიან გირჩევთ კურსს!`,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        },
        {
            name: 'იაკობ სდად',
            text: `ვებდიზაინის კურსმა მომცა მტკიცე საფუძველი. 
                ინსტრუქტორები იყვნენ მცოდნეები და მხარდამჭერები. ძალიან გირჩევთ კურსს!`,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        },
        {
            name: 'უმოლი ასლად',
            text: `ვებდიზაინის კურსმა მომცა მტკიცე საფუძველი. 
                ინსტრუქტორები იყვნენ მცოდნეები და მხარდამჭერები. ძალიან გირჩევთ კურსს!`,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        },
        {
            name: 'შოთა სდასად',
            text: `ვებდიზაინის კურსმა მომცა მტკიცე საფუძველი. 
                ინსტრუქტორები იყვნენ მცოდნეები და მხარდამჭერები. ძალიან გირჩევთ კურსს!`,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        }
    ];

    const courses = [
        {
            name: 'ვებ-დიზაინის საწყისები',
            description: 'ისწავლე ვებ-დიზაინის საფუძვლები, მათ შორის HTML, CSS და დიზაინის პრინციპები',
            month: 4,
            difficulity: 'დამწყები',
            sponsor: 'ჯეობალი JeoLab',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        },
        {
            name: 'UI/UX დიზაინი',
            description: 'ისწავლე ვებ-დიზაინის საფუძვლები, მათ შორის HTML, CSS და დიზაინის პრინციპები',
            month: 6,
            difficulity: 'დამწყები',
            sponsor: 'TBC',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        },
        {
            name: 'Mobile App Development',
            description: 'ისწავლე ვებ-დიზაინის საფუძვლები, მათ შორის HTML, CSS და დიზაინის პრინციპები',
            month: 8,
            difficulity: 'საშუალო',
            sponsor: 'Step It Academy',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        },
        {
            name: 'გრაფიკული დიზაინი',
            description: 'ისწავლე ვებ-დიზაინის საფუძვლები, მათ შორის HTML, CSS და დიზაინის პრინციპები',
            month: 10,
            difficulity: 'რთული',
            sponsor: 'ჯეობალი JeoLab',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s'
        }
    ];

    const questions = [
        {
            name: 'როგორ უნდა ავირჩიო პროფესია?',
            answer: 'შენ უნდა გააკეთო ეს და ამაში დაგეხმარება ეს: ',
            link: '/'
        },
        {
            name: 'როგორ უნდა ავირჩიო პროფესია?',
            answer: 'შენ უნდა გააკეთო ეს და ამაში დაგეხმარება ეს: ',
            link: '/'
        },
        {
            name: 'როგორ უნდა ავირჩიო პროფესია?',
            answer: 'შენ უნდა გააკეთო ეს და ამაში დაგეხმარება ეს: ',
            link: '/'
        },
        {
            name: 'როგორ უნდა ავირჩიო პროფესია?',
            answer: 'შენ უნდა გააკეთო ეს და ამაში დაგეხმარება ეს: ',
            link: '/'
        },
        {
            name: 'როგორ უნდა ავირჩიო პროფესია?',
            answer: 'შენ უნდა გააკეთო ეს და ამაში დაგეხმარება ეს: ',
            link: '/'
        }
    ];

    function handledropDown(e, index){
        setQuestionDrop([index, questionDrowp[0] === index ? !questionDrowp[1] : true]);
    }

    return (
        <div id="homepage">
            <video className='main-video' controls>
                <source/>
                Your brouser does not support this video
            </video>
            <div className='successful-students-short' id='homepage-successful-students'>
                <h1>წარმატებული მოსწავლეები</h1>
                <span>
                    <p>ვებდიზაინის კურსმა მომცა მტკიცე საფუძველი. ინსტრუქტორები იყვნენ მცოდნეები და მხარდამჭერები</p>
                    <Link><button>ყველას ნახვა</button></Link>
                </span>
            </div>
            <div className='successful-students'>
                {students.map((student, index) => (
                    <div key={index}>
                        <p>{student.text}</p>
                        <div>
                            <span><img src={student.img} />{student.name}</span>
                            <Link><button>იხილეთ სრულად</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='popular-courses-short' id='homepage-popular-courses'>
                <h1>პოპულალური კურსები</h1>
                <span>
                    <p>ჩვენი მეგობარი სასწავლო დაწესებულებები, ეს კურსები დაგეხმარებათ შეარჩიოთ თქვენი პროფესია და მიიღოთ გამოცდილება</p>
                    <Link to='/professions'><button>ყველას ნახვა</button></Link>
                </span>
            </div>
            <div className='popular-courses'>
                {courses.map((course, index) => (
                    <div key={index}>
                        <div>
                            <img src={course.src} />
                            <span>
                                <span>
                                    <label>{course.month} კვირა</label>
                                    <label>{course.difficulity}</label>
                                </span>
                                <label>{course.sponsor}</label>
                            </span>
                            <h1>{course.name}</h1>
                            <p>{course.description}</p>
                        </div>
                        <Link><button>ნახვა</button></Link>
                    </div>
                ))}
            </div>
            <div className='asked-questions' id='homepage-asked-questions'>
                <div className='questions-short'>
                    <h1>ხშირად დასმული შეკითხვები</h1>
                    <p>კიდევ არის კითხვები? მოწერეთ მეილზე</p>
                </div>
                <div className='questions'>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <div>
                                <h4>{question.name}</h4>
                                <button onClick={(e) => handledropDown(e, index)}>
                                    <span style={index === questionDrowp[0] && questionDrowp[1] ? {
                                        display: 'inline-block',
                                        transform: 'rotate(45deg)',
                                        transformOrigin: 'center center'
                                    } : null}>+</span>
                                </button>
                            </div>
                            <p style={index === questionDrowp[0] && questionDrowp[1] ? {
                                height: 'auto',
                                paddingTop: '40px',
                                marginTop: '30px',
                                borderTop: '1px solid rgb(230, 230, 230)',
                                opacity: 1
                            } : null}>{question.answer} - <Link to={question.link}>ლინკი</Link></p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div>
                <p>
                    დამატებითი დახმარების გარეშე, პროფესიის არჩევა შეიძლება გაუგებარი და 
                    ხშირად რთული პროცესიც იყოს, განსაკუთრებით მაშინ, როდესაც არ იცი, 
                    რა სფერო დაგაინტერესებს ან რომელი პროფესია დაგეხმარება ყველაზე მეტად 
                    შენი მიზნების მიღწევაში. სწორედ ამ სირთულეების დაძლევის მიზნით, ჩვენ 
                    შევქმენით პლატფორმა, რომელიც ხელს შეუწყობს სტუდენტებს, ახალგაზრდებსა 
                    და ყველას, ვისაც ამ საკითხზე დაინტერესებული აქვს, უფრო ინფორმირებული 
                    და ნდობის მქონე გადაწყვეტილებების მიღებაში.
                </p>
                <p>
                    ჩვენი პლატფორმა მოიცავს სხვადასხვა სექციებს, რომელთა საშუალებითაც შეგიძლიათ 
                    მიიღოთ ინფორმაცია სხვადასხვა პროფესიის, მათ შორის ყოველდღიური საქმიანობის, 
                    საჭირო უნარების, განათლებისა და დასაქმების პერსპექტივებზე. პლატფორმა 
                    აერთიანებს სხვადასხვა პროფესიის წარმომადგენლების ვიდეოებს, რომლებიც 
                    უშუალოდ გვიამბობენ თავიანთი სფეროს შესახებ, გვიზიარებენ გამოცდილებას 
                    და გვაწვდიან რჩევებს წარმატების მისაღწევად.
                </p>
                <h4>გსურს გაიგო მეტი პროფესიის შესახებ?</h4>
                <p>
                    მთავარ გვერდზე ნახავ მოკლე მიმოხილვას ჩვენი პლატფორმის შესახებ, 
                    როგორც სტუდენტებისთვის, ისე პროფესიონალებისთვის, რაც დაგეხმარება 
                    სწორი გადაწყვეტილების მიღებაში. აქვე შეგიძლიათ 
                    აირჩიოთ ის სფეროები, რომლებიც ყველაზე მეტად გაინტერესებთ.
                </p>
                <h4>გაინტერესებს კონკრეტული პროფესია?</h4>
                <p>
                    გაფართოებული “პროფესიების გვერდზე” შეირჩევა სხვადასხვა სფერო: 
                    ტექნოლოგიები, ხელოვნება, მედიცინა, ბიზნესი, განათლება და სხვა. 
                    აქ შეხვალთ რეალური პროფესიონალების ინტერვიუებში, რომლებიც დეტალურად 
                    იზიარებენ საკუთარ გამოცდილებას, პროფესიული გზის გასავლელ ეტაპებს, საჭირო 
                    უნარებსა და ამა თუ იმ პროფესიასთან დაკავშირებულ გამოწვევებს.
                </p>
                <h4>გნებავთ თქვენი ინტერესების უკეთ გაგება?</h4>
                <p>
                    გამოკითხვის გვერდი წარმოადგენს სრულყოფილ შესაძლებლობას, 
                    რათა თავად განსაზღვროთ, რა სფერო ან პროფესია თქვენთვის შეიძლება 
                    იყოს ყველაზე საინტერესო. ეს გვერდი დაგვეხმარება უკეთ გავიგოთ, თუ 
                    რა ტიპის კონტენტი და ვიდეოები იქნება სტუდენტებისთვის ყველაზე სასარგებლო. 
                    მარტივი კითხვებით თქვენ შემოგვთავაზებთ თქვენი ინტერესი, რომლის 
                    საფუძველზე შეგვიძლია შევარჩიოთ თქვენთვის შესაბამისი პროფესიონალები.
                </p>
            </div>
            <h2>როგორ მუშაობს პლატფორმა?</h2>
            <ul>
                <li>
                    მთავარი გვერდი: გთავაზობთ მოკლე და გასაგებ მიმოხილვას პლატფორმის 
                    შესახებ, დაინტერესების სფეროების განხილვას და არჩევანს.
                </li>
                <li>
                    პროფესია გვერდი: გაგაცნობთ სხვადასხვა სფეროს და პროფესიის წარმომადგენლებს, 
                    რომლებიც გაუსაჯაროვებენ თავიანთი პროფესიული გზის შესახებ საინტერესო ფაქტებს.
                </li>
                <li>
                    გამოკითხვის გვერდი: დაგვეხმარება უკეთ გავიგოთ თქვენი ინტერესები და მოთხოვნები.
                </li>
            </ul>
            <p>
                ჩვენი მიზანია, ხელი შევუწყოთ ახალგაზრდებს სწორი გადაწყვეტილებების მიღებაში, რათა მათ 
                შეძლონ გაატარონ დრო იმ პროფესიაზე, რომელიც მათთვის ყველაზე საინტერესო და შესაბამისი იქნება.
            </p>
            <p>გადადგი პირველი ნაბიჯი და გაიგე, როგორ მიიღწევა შენი იდეალური კარიერა!</p> */}
        </div>
    )
}

export default Home;