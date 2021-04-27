import React,{useState} from 'react'
import './CallendarForm.css';
import Day from "./CallendarForm/Day"
const CallendarForm = (props) => {
    let subjectsArray = [
        {
            id:1,
            subject:"Język Polski",
            teacher:"Hanna Kowal"
        },
        {
            id:2,
            subject:"Język Angielski",
            teacher:"Artur Nowak"
        },
        {
            id:3,
            subject:"Język Angielski",
            teacher:"Anna Rak"
        },
        {
            id:4,
            subject:"Język Polski",
            teacher:"Michał Jawor"
        },
        {
            id:5,
            subject:"Matematyka",
            teacher:"Anna Kos"
        },
        {
            id:6,
            subject:"Matematyka",
            teacher:"Alina Malinowska"
        }
    ];
    const [lessons,setLessons] = useState([{
        idPN:1, //id przedmiot_nauczyciel - z Lesson
        idKlasa:props.klasa.id,
        dzienTygodnia:"Poniedzialek", //z Lesson
        godzina:"08:00" // z Lesson 
    }]);
    return (
        <div className="callendar-form-container">
            <form className="callendar-form">
                <p>Formularz planu zajęć dla Klasy {props.klasa.nazwa}</p>
                <Day name="Poniedziałek" subjectsTeachers={subjectsArray}/>
                <Day name="Wtorek"  subjectsTeachers={subjectsArray}/>
                <Day name="Środa"   subjectsTeachers={subjectsArray}/>
                <Day name="Czwartek"subjectsTeachers={subjectsArray}/>
                <Day name="Piątek"  subjectsTeachers={subjectsArray}/>
                <div className="button-container">
                    <button>Dodaj plan zajęć</button>
                </div>
                
            </form>
        </div>


    )
}

export default CallendarForm
